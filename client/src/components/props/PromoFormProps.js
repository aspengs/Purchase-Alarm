import React from "react";
import * as alarmSDK from "../../services/alarmSDK";
import Form from "react-jsonschema-form";

export const promoFormProps = {
  name: "Promo",
  name_plural: "Promos",
  list_display: ["_id", "promo"],
  list_display_links: ["promo"],
  list_per_page: 10,
  get_form(object = null) {
    let schema = {
      title: this.name,
      type: "object",
      required: ["promo"],
      properties: {
        _id: { type: "string", title: "id" },
        promo: { type: "string", title: "Promo", default: "" }
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
    alarmSDK.getPromo(list_per_page, page_number).then(data => {
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
      alarmSDK.updatePromo(brand._id, brand);
      this.response_change();
    } else {
      alarmSDK.createPromo(brand);
      this.state.queryset.push(brand);
      this.response_add();
    }
  },

  onClickDelete(selected_objects) {
    for (let object of selected_objects.items) {
      alarmSDK.deletePromo(object._id);
    }
    this.get_queryset(this.state.page_number, this.state.list_per_page, null);
  }
};
