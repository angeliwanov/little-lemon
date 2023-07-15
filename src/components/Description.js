import "../styles/Description.css";

function Description() {
  return (
    <div className="descr-container">
      <div className="descr-left">
        <h1 className="descr-h1">Little Lemon</h1>
        <h2 className="descr-h2">Chicago</h2>
        <p className="descr-p">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
      </div>
      <div className="descr-right">
        <img
          className="descr-img img1"
          src="/images/restaurantA.jpg"
          alt="descr"
        ></img>
        <img
          className="descr-img img2"
          src="/images/restaurantB.jpg"
          alt="descr"
        ></img>
      </div>
    </div>
  );
}

export default Description;
