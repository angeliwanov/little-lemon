import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [reservations, setReservations] = useState([]);

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              reservations={reservations}
              setReservations={setReservations}
            />
          }
        ></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
