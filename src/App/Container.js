import React from 'react';
import Card from './Card';
import '../index.css'

const Container = ({ reservations }) => {
  const reservationCards = reservations.map(reservation => {
    return(
      <div key={reservation.id}>
        <Card
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          number={reservation.number}
          />
      </div>
    )
  })
  return(
    <div className='body'>
      <h2>Contianer</h2>
      {reservationCards}
    </div>
  )
}


export default Container;