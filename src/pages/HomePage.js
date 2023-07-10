import Description from "../components/Description";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import Menu from "../components/Menu";

function HomePage() {
  return (
    <main>
      <Hero />
      <Menu />
      <Testimonials />
      <Description />
    </main>
  );
}

export default HomePage;
