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
  }),
  
    it("form inputs should clear after Make Reservation has been clicked", () => {
      render(<Form addReservation={jest.fn} />);

      const submitButton = screen.getByText("Make Reservation");
      userEvent.type(screen.getByPlaceholderText("Name"), "James");
      userEvent.type(screen.getByPlaceholderText("Date (mm/dd)"), "04/22");
      userEvent.type(screen.getByPlaceholderText("Time"), "4:00");
      userEvent.type(screen.getByPlaceholderText("Number of guests"), "2");
      userEvent.click(submitButton);

      expect(screen.getByPlaceholderText("Name").value).toEqual("");
      expect(screen.getByPlaceholderText("Date (mm/dd)").value).toEqual("");
      expect(screen.getByPlaceholderText("Time").value).toEqual("");
      expect(screen.getByPlaceholderText("Number of guests").value).toEqual("");
    });
});
