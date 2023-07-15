import Person from "./Person";
import "../styles/Testimonials.css";

const people = [
  {
    rating: "★★★★☆ 4/5",
    img: "/images/p1.jpg",
    name: "The Rock",
    review:
      "Savor Delights: Hidden gem, extensive menu, Mediterranean platter impressive. Great service, reasonable prices, cozy ambiance.",
  },
  {
    rating: "★★★★★ 5/5",
    img: "/images/p2.jpg",
    name: "Bill Gates",
    review:
      "Gourmet Haven: Culinary excellence, remarkable menu, impeccable service. Elegant ambiance, outstanding flavors, worth the price.",
  },
  {
    rating: "★★★☆☆ 3/5",
    img: "/images/p3.jpg",
    name: "Mila Kunis",
    review:
      "Tasty Bites: Decent experience, good variety, average taste. Prices slightly high. Prompt service but occasional mix-ups.",
  },
  {
    rating: "★★★★★ 5/5",
    img: "/images/p4.jpg",
    name: "Kaley Cuoco",
    review:
      "Mouthwatering Delights: Culinary masterpiece, incredible flavors. Impeccable service, delightful atmosphere. A must-visit!",
  },
];

function Testimonials() {
  return (
    <div className="test">
      <h2 className="test-h3">Testimonials</h2>
      <div className="person">
        <Person people={people} />
      </div>
    </div>
  );
}

export default Testimonials;
