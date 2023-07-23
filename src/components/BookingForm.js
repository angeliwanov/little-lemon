import { useState } from "react";

function BookingForm({ availableTimes, dispatchTimes }) {
  const [reservations, setReservations] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!date || !time || !guests) return;
    let newReservation = {
      date,
      time,
      guests,
      occasion,
    };
    setReservations([...reservations, newReservation]);
    setDate("");
    setTime("");
    setGuests(0);
    setOccasion("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        maxWidth: "200px",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        required
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatchTimes({ type: "UPDATE" });
        }}
        type="date"
        id="res-date"
      ></input>
      <label htmlFor="res-time">Choose time</label>
      <select
        required
        id="res-time "
        value={time}
        name=""
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">-- Please select time --</option>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        required
        onChange={(e) => setGuests(Number(e.target.value))}
        type="number"
        value={guests}
        min="1"
        max="10"
        id="guests"
      ></input>
      <label htmlFor="occasion">Occasion</label>
      <input
        placeholder="Birthday, Anniversary ..."
        text="text"
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      ></input>
      <button type="submit" value="Make Your reservation">
        Reserve
      </button>
    </form>
  );
}

export default BookingForm;
