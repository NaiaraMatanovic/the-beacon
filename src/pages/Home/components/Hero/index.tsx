import "./index.css";
import Logo from "./assets/Figura.png";
import HeroImage from "./assets/hero__image.png";

const Hero = () => {
  return (
    <>
      <section className="hero wrapper">
        <header>
          <div className="logo">
            <img src={Logo} alt="THE BEACON" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#" className="initial_target">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Quem somos</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Projetos</a>
              </li>
            </ul>
          </nav>
          <a className="header__contactButton" href="#">
            <span>NOS CONTATE</span>
          </a>
        </header>
        <div className="container-hero">
          <div className="hero__content">
            <h2>
              &lt; The Beac<span>o</span>n /&gt;
            </h2>

            <p>
              Erga um farol,
              <br /> e atraia todos até você.
            </p>

            <a href="#" className="hero__content__button">
              <span>NOS CONTATE</span>
            </a>
          </div>
          <div className="hero__image__container">
            <img className="hero__image" src={HeroImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
