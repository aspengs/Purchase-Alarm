import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminForm from "./components/adminForm";
import GridAlertForm from "./components/gridAlertForm";
import { brandFormProps } from "./components/props/BrandFormProps";
import { platformFormProps } from "./components/props/PlatformFormProps";
import { sourceFormProps } from "./components/props/SourceFormProps";
import { promoFormProps } from "./components/props/PromoFormProps";
import { alarmFormProps } from "./components/props/AlarmFormProps";
import Header from "./header";
import NavBar from "./components/navBar";

class App extends Component {
  state = {};
  componentDidMount() {
  }
  handleSubmit = async e => {};
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2 d-none d-md-block bg-light sidebarGarba text-left">
                  <NavBar />
                </div>
                <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 dashboardGarba">
                  <Route
                    exact
                    path="/"
                    component={() => <GridAlertForm custom={alarmFormProps} />}
                  />
                  <Route
                    exact
                    path="/brand"
                    component={() => <AdminForm custom={brandFormProps} />}
                  />
                  <Route
                    exact
                    path="/platform"
                    component={() => <AdminForm custom={platformFormProps} />}
                  />
                  <Route
                    exact
                    path="/source"
                    component={() => <AdminForm custom={sourceFormProps} />}
                  />
                  <Route
                    exact
                    path="/promo"
                    component={() => <AdminForm custom={promoFormProps} />}
                  />
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
