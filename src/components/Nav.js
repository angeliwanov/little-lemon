import "../styles/Nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="hamburger-icon" onClick={handleToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`menu ${isOpen ? 'active' : ''}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#reservations">Reservations</a>
        </li>
        <li>
          <a href="#orderonline">Order Online</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
