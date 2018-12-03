import React from "react";
import Admin from "react-crud-admin";
// import Form from "react-jsonschema-form";
import "../../node_modules/react-crud-admin/public/main.css";
// import * as alarmSDK from "../client/alarmSDK";

export default class AdminForm extends Admin {
  constructor(props) {
    super(props);
    this.state.list_per_page = this.props.list_per_page;
    this.get_queryset = this.props.get_queryset;
    this.onClickDelete = this.props.onClickDelete;
  }
  // get_actions() {
  //   return {
  //     delete: selected_objects => {
  //       for (let object of selected_objects) {
  //         alarmSDK.deleteBrand(object._id);
  //       }
  //     }
  //   };
  // }
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

  onckickBack() {
    this.setState({ display_type: "list" });
  }
}
