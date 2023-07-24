export default function BookingForm({
  availableTimes,
  dispatchTimes,
  setReservations,
  reservations,
  formData,
  setFormData,
  submitForm,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    setReservations([...reservations, formData]);
    submitForm();
    setFormData({ date: "", time: "", guests: 0, occasion: "" });
  }

  return (
    <div
      style={{
        backgroundColor: "#495e57",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        data-testid="booking-form"
        style={{
          display: "grid",
          maxWidth: "200px",
          gap: "20px",
          marginBottom: "20px",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          required
          value={formData.date}
          onChange={(e) => {
            setFormData({ ...formData, date: e.target.value });
            dispatchTimes({ type: "UPDATE" });
          }}
          type="date"
          id="res-date"
        ></input>
        <label htmlFor="res-time">Choose time</label>
        <select
          required
          id="res-time"
          value={formData.time}
          name=""
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        >
          <option value="">-- Please select time --</option>
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          required
          onChange={(e) =>
            setFormData({ ...formData, guests: Number(e.target.value) })
          }
          type="number"
          value={formData.guests}
          min="1"
          max="10"
          id="guests"
        ></input>
        <label htmlFor="occasion">Occasion</label>
        <input
          placeholder="Birthday, Anniversary ..."
          text="text"
          id="occasion"
          value={formData.occasion}
          onChange={(e) =>
            setFormData({ ...formData, occasion: e.target.value })
          }
        ></input>
        <button
          disabled={
            !formData.date || !formData.time || !formData.guests
              ? "disabled"
              : ""
          }
          type="submit"
          value="Make Your reservation"
        >
          Reserve
        </button>
      </form>
    </div>
  );
}
