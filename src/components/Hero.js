import "../styles/Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1 className="hero-h1">Little Lemon</h1>
        <h2 className="hero-h2">Chicago</h2>
        <p className="hero-p">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a table</button>
      </div>
      <div className="img-container">
        <img
          className="hero-img"
          src="/images/restauranfood.jpg"
          alt="hero"
        ></img>
      </div>
    </div>
  );
}

export default Hero;
