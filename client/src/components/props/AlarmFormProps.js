import React from "react";
import * as alarmSDK from "../../services/alarmSDK";
import Form from "react-jsonschema-form";

export const alarmFormProps = {
  name: "Alarm",
  name_plural: "Alarms",
  list_display: ["_id", "brand", "platform", "source", "promo"],
  list_display_links: ["_id"],
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
        source: { type: "string", title: "source", default: "" },
        calendar: {
          type: "object",
          title: "calendar",
          properties: {
            dom: {
              type: "object",
              title: "domingo",
              properties: {
                A1: { type: "number", title: "0a1" },
                A2: { type: "number", title: "1a2" },
                A3: { type: "number", title: "2a3" },
                A4: { type: "number", title: "3a4" },
                A5: { type: "number", title: "4a5" },
                A6: { type: "number", title: "5a6" },
                A7: { type: "number", title: "6a7" },
                A8: { type: "number", title: "7a8" },
                A9: { type: "number", title: "8a9" },
                A10: { type: "number", title: "9a10" },
                A11: { type: "number", title: "10a11" },
                A12: { type: "number", title: "11a12" },
                A13: { type: "number", title: "12a13" },
                A14: { type: "number", title: "13a14" },
                A15: { type: "number", title: "14a15" },
                A16: { type: "number", title: "15a16" },
                A17: { type: "number", title: "16a17" },
                A18: { type: "number", title: "17a18" },
                A19: { type: "number", title: "18a19" },
                A20: { type: "number", title: "19a20" },
                A21: { type: "number", title: "20a21" },
                A22: { type: "number", title: "21a22" },
                A23: { type: "number", title: "22a23" },
                A24: { type: "number", title: "23a24" }
              }
            },
            lun: {
              type: "object",
              title: "lunes",
              properties: {
                A1: { type: "number", title: "0a1" },
                A2: { type: "number", title: "1a2" },
                A3: { type: "number", title: "2a3" },
                A4: { type: "number", title: "3a4" },
                A5: { type: "number", title: "4a5" },
                A6: { type: "number", title: "5a6" },
                A7: { type: "number", title: "6a7" },
                A8: { type: "number", title: "7a8" },
                A9: { type: "number", title: "8a9" },
                A10: { type: "number", title: "9a10" },
                A11: { type: "number", title: "10a11" },
                A12: { type: "number", title: "11a12" },
                A13: { type: "number", title: "12a13" },
                A14: { type: "number", title: "13a14" },
                A15: { type: "number", title: "14a15" },
                A16: { type: "number", title: "15a16" },
                A17: { type: "number", title: "16a17" },
                A18: { type: "number", title: "17a18" },
                A19: { type: "number", title: "18a19" },
                A20: { type: "number", title: "19a20" },
                A21: { type: "number", title: "20a21" },
                A22: { type: "number", title: "21a22" },
                A23: { type: "number", title: "22a23" },
                A24: { type: "number", title: "23a24" }
              }
            },
            mar: {
              type: "object",
              title: "martes",
              properties: {
                A1: { type: "number", title: "0a1" },
                A2: { type: "number", title: "1a2" },
                A3: { type: "number", title: "2a3" },
                A4: { type: "number", title: "3a4" },
                A5: { type: "number", title: "4a5" },
                A6: { type: "number", title: "5a6" },
                A7: { type: "number", title: "6a7" },
                A8: { type: "number", title: "7a8" },
                A9: { type: "number", title: "8a9" },
                A10: { type: "number", title: "9a10" },
                A11: { type: "number", title: "10a11" },
                A12: { type: "number", title: "11a12" },
                A13: { type: "number", title: "12a13" },
                A14: { type: "number", title: "13a14" },
                A15: { type: "number", title: "14a15" },
                A16: { type: "number", title: "15a16" },
                A17: { type: "number", title: "16a17" },
                A18: { type: "number", title: "17a18" },
                A19: { type: "number", title: "18a19" },
                A20: { type: "number", title: "19a20" },
                A21: { type: "number", title: "20a21" },
                A22: { type: "number", title: "21a22" },
                A23: { type: "number", title: "22a23" },
                A24: { type: "number", title: "23a24" }
              }
            },
            mie: {
              type: "object",
              title: "miercoles",
              properties: {
                A1: { type: "number", title: "0a1" },
                A2: { type: "number", title: "1a2" },
                A3: { type: "number", title: "2a3" },
                A4: { type: "number", title: "3a4" },
                A5: { type: "number", title: "4a5" },
                A6: { type: "number", title: "5a6" },
                A7: { type: "number", title: "6a7" },
                A8: { type: "number", title: "7a8" },
                A9: { type: "number", title: "8a9" },
                A10: { type: "number", title: "9a10" },
                A11: { type: "number", title: "10a11" },
                A12: { type: "number", title: "11a12" },
                A13: { type: "number", title: "12a13" },
                A14: { type: "number", title: "13a14" },
                A15: { type: "number", title: "14a15" },
                A16: { type: "number", title: "15a16" },
                A17: { type: "number", title: "16a17" },
                A18: { type: "number", title: "17a18" },
                A19: { type: "number", title: "18a19" },
                A20: { type: "number", title: "19a20" },
                A21: { type: "number", title: "20a21" },
                A22: { type: "number", title: "21a22" },
                A23: { type: "number", title: "22a23" },
                A24: { type: "number", title: "23a24" }
              }
            },
            jue: {
              type: "object",
              title: "jueves",
              properties: {
                A1: { type: "number", title: "0a1" },
                A2: { type: "number", title: "1a2" },
                A3: { type: "number", title: "2a3" },
                A4: { type: "number", title: "3a4" },
                A5: { type: "number", title: "4a5" },
                A6: { type: "number", title: "5a6" },
                A7: { type: "number", title: "6a7" },
                A8: { type: "number", title: "7a8" },
                A9: { type: "number", title: "8a9" },
                A10: { type: "number", title: "9a10" },
                A11: { type: "number", title: "10a11" },
                A12: { type: "number", title: "11a12" },
                A13: { type: "number", title: "12a13" },
                A14: { type: "number", title: "13a14" },
                A15: { type: "number", title: "14a15" },
                A16: { type: "number", title: "15a16" },
                A17: { type: "number", title: "16a17" },
                A18: { type: "number", title: "17a18" },
                A19: { type: "number", title: "18a19" },
                A20: { type: "number", title: "19a20" },
                A21: { type: "number", title: "20a21" },
                A22: { type: "number", title: "21a22" },
                A23: { type: "number", title: "22a23" },
                A24: { type: "number", title: "23a24" }
              }
            },
            vie: {
              type: "object",
              title: "viernes",
              properties: {
                A1: { type: "number", title: "0a1" },
                A2: { type: "number", title: "1a2" },
                A3: { type: "number", title: "2a3" },
                A4: { type: "number", title: "3a4" },
                A5: { type: "number", title: "4a5" },
                A6: { type: "number", title: "5a6" },
                A7: { type: "number", title: "6a7" },
                A8: { type: "number", title: "7a8" },
                A9: { type: "number", title: "8a9" },
                A10: { type: "number", title: "9a10" },
                A11: { type: "number", title: "10a11" },
                A12: { type: "number", title: "11a12" },
                A13: { type: "number", title: "12a13" },
                A14: { type: "number", title: "13a14" },
                A15: { type: "number", title: "14a15" },
                A16: { type: "number", title: "15a16" },
                A17: { type: "number", title: "16a17" },
                A18: { type: "number", title: "17a18" },
                A19: { type: "number", title: "18a19" },
                A20: { type: "number", title: "19a20" },
                A21: { type: "number", title: "20a21" },
                A22: { type: "number", title: "21a22" },
                A23: { type: "number", title: "22a23" },
                A24: { type: "number", title: "23a24" }
              }
            },
            sab: {
              type: "object",
              title: "sabado",
              properties: {
                A1: { type: "number", title: "0a1" },
                A2: { type: "number", title: "1a2" },
                A3: { type: "number", title: "2a3" },
                A4: { type: "number", title: "3a4" },
                A5: { type: "number", title: "4a5" },
                A6: { type: "number", title: "5a6" },
                A7: { type: "number", title: "6a7" },
                A8: { type: "number", title: "7a8" },
                A9: { type: "number", title: "8a9" },
                A10: { type: "number", title: "9a10" },
                A11: { type: "number", title: "10a11" },
                A12: { type: "number", title: "11a12" },
                A13: { type: "number", title: "12a13" },
                A14: { type: "number", title: "13a14" },
                A15: { type: "number", title: "14a15" },
                A16: { type: "number", title: "15a16" },
                A17: { type: "number", title: "16a17" },
                A18: { type: "number", title: "17a18" },
                A19: { type: "number", title: "18a19" },
                A20: { type: "number", title: "19a20" },
                A21: { type: "number", title: "20a21" },
                A22: { type: "number", title: "21a22" },
                A23: { type: "number", title: "22a23" },
                A24: { type: "number", title: "23a24" }
              }
            }
          }
        }
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
