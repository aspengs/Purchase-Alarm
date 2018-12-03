import React from "react";
import * as alarmSDK from "../client/alarmSDK";
import Form from "react-jsonschema-form";

export const brandFormProps = {
  get_form(object = null) {
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
  },
  get_queryset(page_number, list_per_page, queryset) {
    alarmSDK.getBrand(list_per_page, page_number).then(data => {
      if (data) {
        this.data = data.docs;
        this.set_queryset(data.docs);
        this.set_total(data.total);
      }
    });
    return queryset;
  },
  form_submit(form) {
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
  },
  onClickDelete(selected_objects) {
    for (let object of selected_objects.items) {
      alarmSDK.deleteBrand(object._id);
      console.log(object._id);
    }
    this.get_queryset(this.state.page_number, this.state.list_per_page, null);
  }
};
