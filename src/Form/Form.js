
import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state={
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  submitReservation = event => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({name: '', date: '', time: '', time:'', number: ''})
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          type="text"
          name="date"
          placeholder="Date (mm/dd)"
          value={this.state.date}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          type="text"
          name="time"
          placeholder="Time"
          value={this.state.time}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          type="text"
          name="number"
          placeholder="Number of guests"
          value={this.state.number}
          onChange={(event) => this.handleChange(event)}
        />
        <button className="submit-button" onClick={event => this.submitReservation(event)}>Make Reservation </button>
      </form>
    );
  }
}

export default Form;