import "./App.css";
import Farol from "./pages/Home/assets/farol.png";
import Barco from "./pages/Home/assets/barco.png";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
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
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="hero__content">
          <h2>THE BEACON</h2>

          <p>
            Erga um farol,
            <br /> e atraia todos até você.
          </p>

          <a href="#" className="hero__content__button">
            Nos contate!
          </a>
        </div>
        <div className="hero__images">
          <img className="farol" src={Farol} alt="Farol" />
          <img className="barco" src={Barco} alt="Barco" />
        </div>
      </section>
    </>
  );
}

export default App;
