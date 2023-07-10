import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img src="/images/logo_footer.png" alt="restaurant"></img>
      <div className="ft-nav-container">
        <div>
          <p className="ft-nav">Navigation</p>
          <ul>
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
        </div>
        <div>
          <p className="ft-nav">Contact</p>
          <ul>
            <li>
              <a href="#address">Address</a>
            </li>
            <li>
              <a href="#phone-number">Phone number</a>
            </li>
            <li>
              <a href="#email">Email</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="ft-nav">Social Media</p>
          <ul>
            <li>
              <a href="#facebook">Facebook</a>
            </li>
            <li>
              <a href="#instagram">Instagram</a>
            </li>
            <li>
              <a href="#twitter">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
