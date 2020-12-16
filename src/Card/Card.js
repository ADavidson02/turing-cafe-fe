import React from 'react';
import './Card.css';
import Container from '../Container/Container';

const Card = ({ id, name, date, time, number, cancelReservation }) => {
  return (
    <div className="card" key={id} id={id}>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button onClick={() => cancelReservation(id)}>Cancel</button>
    </div>
  );
};


export default Card; 