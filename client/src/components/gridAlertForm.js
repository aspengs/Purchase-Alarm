import React from "react";
import Admin from "react-crud-admin";
import "../../node_modules/react-crud-admin/public/main.css";

export default class GridAlertForm extends Admin {
  constructor(props) {
    super(props);
    this.name = props.custom.name;
    this.name_plural = props.custom.name_plural;
    this.list_display = props.custom.list_display;
    this.list_display_links = props.custom.list_display_links;
    this.state.list_per_page = props.custom.list_per_page;
    this.get_form = props.custom.get_form;
    this.form_submit = props.custom.form_submit;
    this.get_queryset = props.custom.get_queryset;
    this.onClickDelete = props.custom.onClickDelete;
  }
  componentDidMount() {
    this.get_queryset(
      this.state.page_number,
      this.list_per_page,
      this.queryset
    );
  }
  
  render_list_view() {
    return (
      <div className="AdminForm row">
        <div className="addDeleteButton">
          {this.render_add_button()}
          {this.render_below_add_button()}
        </div>
        <div className="tableGarba tableAlert">
          {this.render_table()}
          {this.render_below_table()}
          {this.render_progress(this.state.loading)}
          {this.render_below_progress()}
        </div>
        <div className="pagination paginationGarba">
          {this.render_pagination()}
        </div>
      </div>
    );
  }
  render_change_page() {
    return (
      <div className="row">
        <div className="box-button-edit text-right">
          {this.render_below_change_view()}
        </div>
        <div className="form-box">
          {this.render_above_change_view()}
          {this.render_change_view()}
        </div>
      </div>
    );
  }
  render_below_add_button() {
    return (
      <button
        onClick={this.onClickDelete.bind(this, this.state.selected_objects)}
        className="ra-add-button"
      >
        Delete Brand
      </button>
    );
  }
  render_below_change_view() {
    return (
      <div className="backButton">
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
