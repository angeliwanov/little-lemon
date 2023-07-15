import "../styles/Person.css";

function Person({ people }) {
  return people.map((p) => (
    <div key={p.name}>
      <p>{p.rating}</p>
      <img className="p-img" src={p.img} alt="name"></img>
      <p>{p.name}</p>
      <p className="review">{p.review}</p>
    </div>
  ));
}

export default Person;
