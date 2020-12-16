import React from 'react';
import Card from '../Card/Card';
import '../index.css'

const Container = ({ reservations, cancelReservation }) => {
  const reservationCards = reservations.map((reservation) => {
    return (
      <div key={reservation.id}>
        <Card
          id={reservation.id}
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          number={reservation.number}
          cancelReservation={cancelReservation}
        />
      </div>
    );
  });
  return (
    <div className="body">
      {reservationCards}
    </div>
  );
};


export default Container;