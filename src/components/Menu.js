import "../styles/Menu.css";
import Special from "./Special";

const specials = [
  {
    img: "/images/greek salad.jpg",
    name: "Greek salad",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: "/images/bruchetta.svg",
    name: "Bruchetta",
    price: "5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: "/images/lemon dessert.jpg",
    name: "Lemon Dessert",
    price: "4.99",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Menu() {
  return (
    <div>
      <div className="menu-top">
        <h1 className="menu-h1">This week's specials!</h1>
        <button aria-label="On Click" className="order-btn">
          Online Menu
        </button>
      </div>
      <div className="specials">
        <Special specials={specials} />
      </div>
    </div>
  );
}

export default Menu;
