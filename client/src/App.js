import React, { Component } from 'react';
import './App.css';
import Header from './header';
import AlarmForm from './components/alarmForm';
import Table from './components/table';
class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };
  render() {
    return (
      <div className="App">
         <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 d-none d-md-block bg-light sidebarGarba text-left">
              <AlarmForm />
            </div>
            <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <Table />
            </div>
          </div>
        </div>
         

      </div>
    );
  }
}
export default App;