import BookingForm from "../components/BookingForm";
import "../styles/BookingPage.css";
import { useReducer } from "react";

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE":
      return [...state];
    default:
      return state;
  }
}

export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function BookingPage() {
  const [availableTimes, dispatchTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );

  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatchTimes={dispatchTimes}
    />
  );
}

export default BookingPage;
