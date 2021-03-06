import React from "react";
import * as alarmSDK from "../../services/alarmSDK";
import Form from "react-jsonschema-form";
import { schema, prefilled } from "../../models/alarmModel";

export const alarmFormProps = {
  name: "Alarm",
  name_plural: "Alarms",
  list_display: ["_id", "brand", "platform", "source", "promo"],
  list_display_links: ["_id"],
  list_per_page: 10,

  get_form(object = null) {
    if (!object) {
      return (
        <div className="calendarTable">
          <Form
            schema={schema}
            formData={prefilled}
            onSubmit={this.form_submit.bind(this)}
          />
        </div>
      );
    } else {
      return (
        <div className="calendarTable">
          <Form
            schema={schema}
            formData={object}
            onSubmit={this.form_submit.bind(this)}
          />
        </div>
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
    let alert = form.formData;
    form.edit = form.formData._id === undefined ? false : true;
    if (form.edit) {
      alarmSDK.updateAlarm(alert._id, alert);
      this.response_change();
    } else {
      alarmSDK.createAlarm(alert);
      this.state.queryset.push(alert);
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
