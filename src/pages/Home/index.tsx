import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";

const Home = () => {
  return (
    <div className="container-home">
      <Hero />
      <AboutUs />
      <OurServices />
    </div>
  );
};

export default Home;
