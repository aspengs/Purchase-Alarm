import React, { Component } from "react";
// import "./App.css";
import AdminForm from "./components/adminForm";
import { brandFormProps } from "./components/BrandFormProps";

class App extends Component {
  state = {};
  componentDidMount() {}
  handleSubmit = async e => {};
  render() {
    return (
      <div className="App">
        {/* <header className="App-header"></header> */}
        <AdminForm
          get_queryset={brandFormProps.get_queryset}
          form_submit={brandFormProps.form_submit}
          get_form={brandFormProps.get_form}
          onClickDelete={brandFormProps.onClickDelete}
          list_per_page={10}
          name={"Brand"}
          name_plural={"Brands"}
          list_display={["_id", "brand"]}
          list_display_links={["brand"]}
        />
        <AdminForm
          get_queryset={brandFormProps.get_queryset}
          form_submit={brandFormProps.form_submit}
          get_form={brandFormProps.get_form}
          onClickDelete={brandFormProps.onClickDelete}
          list_per_page={10}
          name={"Brand"}
          name_plural={"Brands"}
          list_display={["_id", "brand"]}
          list_display_links={["brand"]}
        />
      </div>
    );
  }
}
export default App;
