import React from 'react';
import App from './App';
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
jest.mock("../apiCall");
import { getAllReservation } from '../apiCall'


describe('App', () => {
  it('should accept new reservations', () => {
    getAllReservation.mockResolvedValue([])
    render(<App />)

    const submitButton = screen.getByText("Make Reservation");
    userEvent.type(screen.getByPlaceholderText("Name"), "Micah");
    userEvent.type(screen.getByPlaceholderText("Date (mm/dd)"), "02/21");
    userEvent.type(screen.getByPlaceholderText("Time"), "4:15");
    userEvent.type(screen.getByPlaceholderText("Number of guests"), "3");
    userEvent.click(submitButton);
    
    expect(screen.getByText('Micah')).toBeInTheDocument()

  }),

  it('shoulf remove a card when cancel is clicked', () => {
    getAllReservation.mockResolvedValue([]);
    render(<App />
      )
    const submitButton = screen.getByText('Make Reservation');
    userEvent.type(screen.getByPlaceholderText("Name"), "Sally");
    userEvent.type(screen.getByPlaceholderText("Date (mm/dd)"), "10/31");
    userEvent.type(screen.getByPlaceholderText("Time"), "6:00");
    userEvent.type(screen.getByPlaceholderText("Number of guests"), "6");
    userEvent.click(submitButton);
    
    const cancelButton = screen.getByText("Cancel");
    const foundReservation = screen.getByText('Sally');

    userEvent.click(cancelButton)
    expect(foundReservation).not.toBeInTheDocument();

  })
})
