import React from 'react';

class AlarmForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      platform: {value: 'BROWSER'},
      source: {value: 'WEB'},
      brand: {value: 'GARBARINO'},
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event)
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('platform: ' + this.state.platform.value);
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="sidebar-sticky-garba">
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Platform: </label>
              <select className="form-control" value={this.state.platform.value} onChange={this.handleChange}>
              <option value="Browser">Browser</option>
              <option value="IOS">IOS</option>
              <option value="Andoid">Andoid</option>
            </select>
        </div>
        <div className="form-group">
          <label> Brand:</label>
            <select className="form-control" value={this.state.brand.value} onChange={this.handleChange}>
            <option value="GARBARINO">Garbarino</option>
            <option value="COMPUMUNDO">Comumundo</option>
          </select>
        </div>
        <div className="form-group">
          <label> Source:</label>
            <select className="form-control" value={this.state.source.value} onChange={this.handleChange}>
            <option value="WEB">Web</option>
            <option value="DIA">Dia</option>
          </select>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
          <label>Is going:</label>
        </div>
        <div className="form-group">
        <label> Number of guests: </label>
          <input
            className="form-control"
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </div>
        <input type="submit" value="Submit" className="btn btn-alert-submit" />
      </form>
      </div>
    );
  }
}
export default AlarmForm;