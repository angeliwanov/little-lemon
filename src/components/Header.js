import logo from "../assets/Logo.svg";
import Nav from "./Nav";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="little lemon logo"></img>
      <Nav />
    </header>
  );
};

export default Header;
