import BookingForm from "../components/BookingForm";
import "../styles/BookingPage.css";
import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router-dom";

function BookingPage({ reservations, setReservations }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 0,
    occasion: "",
  });

  const isSubmitted = submitAPI(formData);
  const navigate = useNavigate();
  function submitForm() {
    if (isSubmitted) {
      navigate("/confirmed");
    }
  }

  function initializeTimes() {
    return fetchAPI();
  }

  function updateTimes(state, action) {
    switch (action.type) {
      case "UPDATE":
        let newState = fetchAPI();
        for (let reservation of reservations) {
          if (reservation.date === formData.date) {
            newState = newState.filter((time) => time !== reservation.time);
          }
        }
        return newState;
      default:
        return state;
    }
  }

  const [availableTimes, dispatchTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );

  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatchTimes={dispatchTimes}
      submitForm={submitForm}
      reservations={reservations}
      setReservations={setReservations}
      formData={formData}
      setFormData={setFormData}
    />
  );
}

export default BookingPage;
