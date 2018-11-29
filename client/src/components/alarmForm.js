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
      <form onSubmit={this.handleSubmit}>
        <label>
          Platform:
            <select value={this.state.platform.value} onChange={this.handleChange}>
            <option value="Browser">Browser</option>
            <option value="IOS">IOS</option>
            <option value="Andoid">Andoid</option>
          </select>
        </label>
        <label>
          Brand:
            <select value={this.state.brand.value} onChange={this.handleChange}>
            <option value="GARBARINO">Garbarino</option>
            <option value="COMPUMUNDO">Comumundo</option>
          </select>
        </label>
        <label>
          Source:
            <select value={this.state.source.value} onChange={this.handleChange}>
            <option value="WEB">Web</option>
            <option value="DIA">Dia</option>
          </select>
        </label>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default AlarmForm;