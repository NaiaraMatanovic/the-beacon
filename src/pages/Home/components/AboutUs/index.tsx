import "./styles.css";
import Filipe from "./assets/Filipe.png";

const AboutUs = () => {
  return (
    <>
      <section className="about-us">
        <div className="container-about-us wrapper">
          <span className="section-name">&#123; “Quem somos” &#125; </span>
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
};

export default AboutUs;
