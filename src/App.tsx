import "./App.css";
import HeroImage from "./pages/Home/assets/hero__image.png";
import Logo from "./pages/Home/assets/Figura.png";
import Filipe from "./pages/Home/assets/image 6.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".hero",
    //     pin: true, // pin the trigger element while active
    //     start: "top top", // when the top of the trigger hits the top of the viewport
    //     end: "bottom top", // end after scrolling 500px beyond the start
    //     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //   },
    // });
  }, []);

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

      <section className="about-us">
        <div className="container-about-us wrapper">
          <span className="section-name">&#123; "Quem somos" &#125; </span>
          <div className="about-us__cards-container">
            <div className="cards__wrapper">
              <div className="about-us__card">
                <div className="card__image-container">
                  <img src={Filipe} alt="" />
                </div>
                <h3>
                  Hello, i'm: <br /> Filipe Augusto Souza Vilas Bôas
                </h3>
                <span>Graduando em Análise e Desenvolvimento de Sistemas</span>
              </div>
              <div className="about-us__card">
                <div className="card__image-container">
                  <img src={Filipe} alt="" />
                </div>
                <h3>
                  Hello, i'm: <br /> Naiara Matanovic Tenorio
                </h3>
                <span>Graduando em Análise e Desenvolvimento de Sistemas</span>
              </div>
            </div>
          </div>
          <div className="about-us__content">
            <h2>Sobre nós...</h2>
            <p>
              // Somos a{" "}
              <span>
                The Beacon<strong>®</strong>
              </span>
              , uma agência de desenvolvimento web de Amparo-SP, especializada
              em criar soluções digitais que conectam negócios ao seu público.
              Combinamos design criativo, tecnologia avançada e estratégias
              eficazes para desenvolver websites personalizados, otimizados para
              performance e resultados. <br />
              Nosso compromisso é transformar a presença digital da sua empresa,
              ajudando sua marca a crescer, se destacar no mercado e construir
              conexões significativas com os clientes. Seja um pequeno negócio
              ou uma grande empresa, estamos prontos para levar suas ideias ao
              próximo nível. //
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
