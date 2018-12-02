import React from "react";
import Admin from "react-crud-admin";
import Form from "react-jsonschema-form";
import "../../node_modules/react-crud-admin/public/main.css";

export default class Example extends Admin {
  constructor() {
    super();
    this.name = "Brand";
    this.name_plural = "Brands";
    this.list_display_links = ["brand"];
    this.list_display = ["_id", "brand"];
  }

  get_queryset(page_number, list_per_page, queryset) {
    fetch("/brand?limit=" + list_per_page + "&page=" + page_number)
      .then(response => response.json())
      .then(data => {
        if (data) {
          console.log(data.docs);
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
      return <Form schema={schema} />;
    } else {
      return <Form schema={schema} formData={object} />;
    }
  }
  // get_actions() {
  //   return {
  //     delete: selected_objects => {
  //       let total = this.data.length;
  //       for (let object of selected_objects) {
  //         this.data.splice(this.data.indexOf(object), 1);
  //       }
  //       this.set_queryset(this.data);
  //       this.set_total(total - selected_objects.length);
  //     }
  //   };
  // }
  render_list_view() {
    return (
      <div>
        {this.render_add_button()}
        {this.render_below_add_button()}
        {/* {this.render_search_field()}
            {this.render_below_search_field()}
            {this.render_actions()}
                {this.render_below_actions()}
            {this.render_filters()}
            {this.render_below_filters()} */}
        {this.render_table()}
        {this.render_below_table()}
        {this.render_progress(this.state.loading)}
        {this.render_below_progress()}
        {this.render_pagination()}
      </div>
    );
  }
}
