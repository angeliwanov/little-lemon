import BookingForm from "../components/BookingForm";
import "../styles/BookingPage.css";

function BookingPage() {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  return <BookingForm availableTimes={availableTimes} />;
}

export default BookingPage;
