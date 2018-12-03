import React from "react";
import Admin from "react-crud-admin";
import Form from "react-jsonschema-form";
import "../../node_modules/react-crud-admin/public/main.css";
import * as alarmSDK from "../client/alarmSDK";

export default class Example extends Admin {
  constructor() {
    super();
    this.state.current = {};
    this.state.list_per_page = 10;
    this.name = "Brand";
    this.name_plural = "Brands";
    this.list_display_links = ["brand"];
    this.list_display = ["_id", "brand"];
  }

  get_queryset(page_number, list_per_page, queryset) {
    alarmSDK.getBrand(list_per_page, page_number).then(data => {
      if (data) {
        this.setState({ current: data.docs });
        this.data = data.docs;
        this.set_queryset(data.docs);
        this.set_total(data.total);
      }
    });
    return queryset;
  }

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
  }

  form_submit(form) {
    let brand = form.formData;
    if (form.edit) {
      alarmSDK.updateBrand(brand._id, brand);
      this.response_change(); //esa magia te manda a la list
    } else {
      alarmSDK.createBrand(brand);
      this.state.queryset.push(brand);
      this.response_add();
    }
  }
  get_actions() {
    return {
      delete: selected_objects => {
        for (let object of selected_objects) {
          alarmSDK.deleteBrand(object._id);
        }
      }
    };
  }

  render_list_view() {
    return (
      <div>
        {this.render_add_button()}
        {this.render_below_add_button()}
        {/* {this.render_search_field()}
            {this.render_below_search_field()} */}
        {/* {this.render_filters()}
            {this.render_below_filters()} */}
        {this.render_table()}
        {this.render_below_table()}
        {this.render_progress(this.state.loading)}
        {this.render_below_progress()}
        {this.render_pagination()}
      </div>
    );
  }

  render_change_page() {
    return (
      <div>
        {this.render_above_change_view()}
        {this.render_change_view()}
        {this.render_below_change_view()}
      </div>
    );
  }

  render_below_add_button() {
    return (
      <div>
        <button
          onClick={this.onClickDelete.bind(this, this.state.selected_objects)}
          className="ra-add-button"
        >
          Delete Brand
        </button>
      </div>
    );
  }

  render_below_change_view() {
    return (
      <div>
        <button onClick={this.onckickBack.bind(this)} className="ra-add-button">
          Back
        </button>
      </div>
    );
  }

  onClickDelete(selected_objects) {
    for (let object of selected_objects.items) {
      alarmSDK.deleteBrand(object._id);
      console.log(object._id);
    }
    this.get_queryset(this.state.page_number, this.state.list_per_page, null);
  }

  onckickBack() {
    this.setState({ display_type: "list" });
  }
}
