import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Form from "./Form";

describe("Form", () => {
  it("should accept a new reservation", () => {
    const mockAddReservation = jest.fn();

    render(<Form addReservation={mockAddReservation} />);

    const submitButton = screen.getByText("Make Reservation");
    Date.now = jest.fn().mockImplementation();

    userEvent.type(screen.getByPlaceholderText("Name"), "Mike");
    userEvent.type(screen.getByPlaceholderText("Date (mm/dd)"), "03/21");
    userEvent.type(screen.getByPlaceholderText("Time"), "2:00");
    userEvent.type(screen.getByPlaceholderText("Number of guests"), "4");
    userEvent.click(submitButton);

    const expectedReservation = {
      date: Date.now(),
      name: "Mike",
      date: "03/21",
      time: "2:00",
      number: "4",
    };
    expect(mockAddReservation).toHaveBeenCalledWith(expectedReservation);
  })
});
