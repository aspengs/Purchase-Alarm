import React, { Component } from "react";
import "./App.css";
import AdminForm from "./components/adminForm";
import { brandFormProps } from "./components/props/BrandFormProps";
import { platformFormProps } from "./components/props/PlatformFormProps";
import { sourceFormProps } from "./components/props/SourceFormProps";
import { promoFormProps } from "./components/props/PromoFormProps";
import { alarmFormProps } from "./components/props/AlarmFormProps";

class App extends Component {
  state = {};
  componentDidMount() {}
  handleSubmit = async e => {};
  render() {
    return (
      <div className="App">
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
