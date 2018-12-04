import React from "react";
import * as alarmSDK from "../../services/alarmSDK";
import Form from "react-jsonschema-form";

export const alarmFormProps = {
  name: "Alarm",
  name_plural: "Alarms",
  list_display: ["_id", "brand", "platform", "source", "promo"],
  list_display_links: ["promo"],
  list_per_page: 10,
  get_form(object = null) {
    let schema = {
      title: this.name,
      type: "object",
      required: ["brand"],
      properties: {
        _id: { type: "string", title: "id" },
        brand: { type: "string", title: "brand", default: "" },
        platform: { type: "string", title: "platform", default: "" },
        promo: { type: "string", title: "promo", default: "" },
        source: { type: "string", title: "source", default: "" }
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
    alarmSDK.getAlarm(list_per_page, page_number).then(data => {
      if (data) {
        this.data = data;
        this.set_queryset(data.docs);
        this.set_total(data.total);
      }
    });
    return queryset;
  },

  form_submit(form) {
    let brand = form.formData;
    if (form.edit) {
      alarmSDK.updateAlarm(brand._id, brand);
      this.response_change();
    } else {
      alarmSDK.createAlarm(brand);
      this.state.queryset.push(brand);
      this.response_add();
    }
  },

  onClickDelete(selected_objects) {
    for (let object of selected_objects.items) {
      alarmSDK.deleteAlarm(object._id);
    }
    this.get_queryset(this.state.page_number, this.state.list_per_page, null);
  }
};
