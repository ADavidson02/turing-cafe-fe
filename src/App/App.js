import React, { Component } from 'react';
import './App.css';
import Container from '../Container/Container';
import { getAllReservation } from '../apiCall';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super()
    this.state={
      reservations: [],
    }
  }

  componentDidMount = async () => {
    const allReservations = await getAllReservation()
    this.setState({reservations: allReservations})
    console.log(allReservations);
  }

  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]})
  }

  cancelReservation = (id) => {
    const filteredReservations = this.state.reservations.filter(reservation => reservation.id !== id )
    this.setState({ reservations: filteredReservations })
  }


  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <Form addReservation={this.addReservation} />
        </div>
        <div className="resy-container">
          <Container
            reservations={this.state.reservations}
            cancelReservation={this.cancelReservation}
          />
        </div>
      </div>
    );
  }
}

export default App;
