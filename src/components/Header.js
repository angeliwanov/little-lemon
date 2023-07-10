import logo from "../Logo.svg";
import Nav from "./Nav";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="little lemon logo"></img>
      <Nav />
    </header>
  );
};

export default Header;
