import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./pages/BookingPage";

test('renders the "Choose date" label', () => {
  render(<BookingForm availableTimes={[]} />);

  const linkElement = screen.getByText(/Choose date/i);

  expect(linkElement).toBeInTheDocument();
});

test("initializeTimes should return initial times", () => {
  const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(initializeTimes()).toEqual(initialTimes);
});

test("updateTimes should return same state when action is not recognized", () => {
  const dummyState = ["17:00", "18:00", "19:00"];
  const dummyAction = { type: "UPDATE" };
  expect(updateTimes(dummyState, dummyAction)).toEqual(dummyState);
});
