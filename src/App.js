import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="booking" element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
