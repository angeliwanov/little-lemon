import "../styles/Special.css";

function Special({ specials }) {
  return specials.map((s) => (
    <div className="special" key={s.name}>
      <img className="spec-img" src={s.img} alt="img"></img>
      <div className="spec-top">
        <h3>{s.name}</h3>
        <span style={{ color: "#EE9972" }}>${s.price}</span>
      </div>
      <div className="text-container">
        <p className="description">{s.description}</p>
        <p className="order">Order a delivery 🛵</p>
      </div>
    </div>
  ));
}

export default Special;
