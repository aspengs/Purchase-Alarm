import React, { Component } from "react";
import "./App.css";
import AdminForm from "./components/adminForm";
import { brandFormProps } from "./components/props/BrandFormProps";
import { platformFormProps } from "./components/props/PlatformFormProps";
import { sourceFormProps } from "./components/props/SourceFormProps";
import { promoFormProps } from "./components/props/PromoFormProps";
import { alarmFormProps } from "./components/props/AlarmFormProps";
import Header from "./header";
import NavBar from "./components/navBar";
import InfoFilter from "./components/infoFilter";
import Table from "./components/table";

class App extends Component {
  state = {};
  componentDidMount() {}
  handleSubmit = async e => {};
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 d-none d-md-block bg-light sidebarGarba text-left">
              <NavBar />
            </div>
            <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <InfoFilter />
              <Table />
            </div>
          </div>
        </div>

        <header className="App-header">
          <AdminForm custom={brandFormProps} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <AdminForm custom={platformFormProps} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <AdminForm custom={sourceFormProps} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <AdminForm custom={promoFormProps} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <AdminForm custom={alarmFormProps} />
        </header>
      </div>
    );
  }
}
export default App;
