import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import BookingPage from "./pages/BookingPage";
import { MemoryRouter } from "react-router-dom";

test('renders the "Choose date" label', () => {
  const formData = {
    date: "2023-07-24",
    time: "",
    guests: 0,
    occasion: "",
  };

  render(<BookingForm availableTimes={[]} formData={formData} />);

  const chooseDateLabel = screen.getByText(/Choose date/i);

  expect(chooseDateLabel).toBeInTheDocument();
});

test("should initialize availableTimes correctly", () => {
  render(
    <MemoryRouter>
      <BookingPage reservations={[]} setReservations={() => {}} />
    </MemoryRouter>
  );

  const availableTimes = screen.getAllByRole("option");

  expect(availableTimes).toHaveLength(7);
  expect(availableTimes[0]).toHaveTextContent("-- Please select time --");
  expect(availableTimes[1]).toHaveTextContent("17:00");
  expect(availableTimes[2]).toHaveTextContent("18:00");
  expect(availableTimes[3]).toHaveTextContent("19:00");
  expect(availableTimes[4]).toHaveTextContent("20:00");
  expect(availableTimes[5]).toHaveTextContent("21:00");
  expect(availableTimes[6]).toHaveTextContent("22:00");
});

test("should update availableTimes correctly", () => {
  const reservations = [
    {
      date: "2023-07-24",
      time: "17:00",
      guests: 1,
      occasion: "Birthday",
    },
    {
      date: "2023-07-24",
      time: "19:00",
      guests: 1,
      occasion: "Birthday",
    },
  ];
  render(
    <MemoryRouter>
      <BookingPage reservations={reservations} setReservations={() => {}} />
    </MemoryRouter>
  );

  const dateInput = screen.getByLabelText("Choose date");

  fireEvent.change(dateInput, {
    target: { value: "2023-07-24" },
  });

  const availableTimes = screen.getAllByRole("option");

  expect(availableTimes).toHaveLength(5);
  expect(availableTimes[0]).toHaveTextContent("-- Please select time --");
  expect(availableTimes[1]).toHaveTextContent("18:00");
  expect(availableTimes[2]).toHaveTextContent("20:00");
  expect(availableTimes[3]).toHaveTextContent("21:00");
  expect(availableTimes[4]).toHaveTextContent("22:00");
});
