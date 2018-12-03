import React, { Component } from "react";
// import "./App.css";
import AdminForm from "./components/adminForm";
import { brandFormProps } from "./components/BrandFormProps";
// import { platformFormProps } from "./components/PlatformFormProps";

class App extends Component {
  state = {};
  componentDidMount() {}
  handleSubmit = async e => {};
  render() {
    return (
      <div className="App">
        {/* <header className="App-header"></header> */}
        {/* <AdminForm
          get_queryset={brandFormProps.get_queryset}
          form_submit={brandFormProps.form_submit}
          get_form={brandFormProps.get_form}
          onClickDelete={brandFormProps.onClickDelete}
          list_per_page={brandFormProps.list_per_page}
          name={brandFormProps.name}
          name_plural={brandFormProps.name_plural}
          list_display={brandFormProps.list_display}
          list_display_links={brandFormProps.list_display_links}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <AdminForm
          get_queryset={platformFormProps.get_queryset}
          form_submit={platformFormProps.form_submit}
          get_form={platformFormProps.get_form}
          onClickDelete={platformFormProps.onClickDelete}
          list_per_page={platformFormProps.list_per_page}
          name={platformFormProps.name}
          name_plural={platformFormProps.name_plural}
          list_display={platformFormProps.list_display}
          list_display_links={platformFormProps.list_display_links}
        /> */}
        <AdminForm custom={brandFormProps} />
      </div>
    );
  }
}
export default App;
