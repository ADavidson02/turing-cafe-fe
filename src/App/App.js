import React, { Component } from 'react';
import './App.css';
import Container from '../Container/Container';
import { getAllReservation } from '../apiCall';

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


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Container reservations={this.state.reservations}/>
          
        </div>
      </div>
    )
  }
}

export default App;
