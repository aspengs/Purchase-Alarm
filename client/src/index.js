import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AdminForm from "./admin/adminForm";
import * as serviceWorker from "./serviceWorker";
import * as alarmSDK from "./client/alarmSDK";
import Form from "react-jsonschema-form";
import brandFormProps from "./admin/BrandFormProps";

ReactDOM.render(
  <AdminForm
    get_queryset={get_queryset}
    form_submit={form_submit}
    get_form={get_form}
    onClickDelete={onClickDelete}
    list_per_page={10}
    name={"Brand"}
    name_plural={"Brands"}
    list_display={["_id", "brand"]}
    list_display_links={["brand"]}
  />,
  document.getElementById("root")
);

function get_form(object = null) {
  let schema = {
    title: this.name,
    type: "object",
    required: ["brand"],
    properties: {
      _id: { type: "string", title: "id" },
      brand: { type: "string", title: "Brand", default: "" }
    }
  };

  if (!object) {
    return <Form schema={schema} onSubmit={this.form_submit.bind(this)} />;
  } else {
    return (
      <Form
        schema={schema}
        formData={object}
        onSubmit={this.form_submit.bind(this)}
      />
    );
  }
}
function get_queryset(page_number, list_per_page, queryset) {
  alarmSDK.getBrand(list_per_page, page_number).then(data => {
    if (data) {
      this.data = data.docs;
      this.set_queryset(data.docs);
      this.set_total(data.total);
    }
  });
  return queryset;
}

function form_submit(form) {
  let brand = form.formData;
  if (form.edit) {
    alarmSDK.updateBrand(brand._id, brand);
    this.response_change(); //esa magia te manda a la list
  } else {
    debugger;
    alarmSDK.createBrand(brand);
    this.state.queryset.push(brand);
    this.response_add();
  }
}
function onClickDelete(selected_objects) {
  for (let object of selected_objects.items) {
    alarmSDK.deleteBrand(object._id);
    console.log(object._id);
  }
  this.get_queryset(this.state.page_number, this.state.list_per_page, null);
}

// ReactDOM.render(<Example />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
