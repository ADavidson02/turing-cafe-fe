import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Card from "./Card";

describe("Card", () => {
  it("should render correctly", () => {
    render(
      <Card
        id={3}
        name="Sadie"
        date="01/24"
        time="4:50"
        number={4}
        cancelReservation={jest.fn()}
      />
    );

    expect(screen.getByText("Sadie")).toBeInTheDocument();
    expect(screen.getByText("01/24")).toBeInTheDocument();
    expect(screen.getByText("4:50 pm")).toBeInTheDocument();
    expect(screen.getByText("Number of guests: 4")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  }),
  
  it("should call cancel reservation with the correct id", () => {
    const mockCancelReservation = jest.fn();

    render(
      <Card
        id={3}
        name="Zoe"
        date="02/22"
        time="200"
        number={2}
        cancelReservation={mockCancelReservation}
      />
    );

    const cancelButton = screen.getByText("Cancel");

    userEvent.click(cancelButton);

    expect(mockCancelReservation).toHaveBeenCalledWith(3);
  });
});
