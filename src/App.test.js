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

test("should not submit the form if required fields are missing", () => {
  const availableTimes = ["17:00", "18:00"];
  const dispatchTimes = jest.fn();
  const setReservations = jest.fn();
  const submitForm = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatchTimes={dispatchTimes}
      setReservations={setReservations}
      reservations={[]}
      formData={{ date: "", time: "", guests: 0, occasion: "" }}
      setFormData={() => {}}
      submitForm={submitForm}
    />
  );
  const reserveButton = screen.getByText("Reserve");
  fireEvent.click(reserveButton);

  expect(setReservations).not.toHaveBeenCalled();
  expect(submitForm).not.toHaveBeenCalled();
});

test("should submit the form if all required fields are provided", () => {
  const availableTimes = ["17:00", "18:00"];
  const dispatchTimes = jest.fn();
  const setReservations = jest.fn();
  const submitForm = jest.fn();
  let formDataState = { date: "", time: "", guests: 0, occasion: "" };
  const setFormData = (newData) => {
    formDataState = { ...formDataState, ...newData };
  };
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatchTimes={dispatchTimes}
      setReservations={setReservations}
      reservations={[]}
      formData={formDataState}
      setFormData={setFormData}
      submitForm={submitForm}
    />
  );
  const dateInput = screen.getByLabelText("Choose date");
  const timeSelect = screen.getByLabelText("Choose time");
  const guestsInput = screen.getByLabelText("Number of guests");

  fireEvent.change(dateInput, { target: { value: "2023-07-24" } });
  fireEvent.change(timeSelect, { target: { value: "17:00" } });
  fireEvent.change(guestsInput, { target: { value: "5" } });

  const form = screen.getByTestId("booking-form"); // you need to add the data-testid attribute to your form
  fireEvent.submit(form);

  expect(submitForm).toHaveBeenCalled();
});
