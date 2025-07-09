import { useEffect } from "react";
import "./styles.css";

const OurServices = () => {
  useEffect(() => {
    const links = document.querySelectorAll(
      ".services__card__content-text__button"
    );

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const elementId = link.getAttribute("href") || null;
        if (elementId) {
          const element = document.querySelector(elementId);
          element?.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    });
  }, []);

  return (
    <>
      <section className="services">
        <div className="container-services wrapper">
          <span className="section-name-variant">
            &#123; “O que podemos fazer por você” &#125;
          </span>

          <div className="services__carousel__container">
            {/* Start of Carrousel Bootstrap Component */}
            <div className="services__card__mask"></div>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                ></li>
              </ol>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-block w-100 services__card">
                    <h3>Tirar uma ideia do papel</h3>
                    <div className="services__card__content">
                      <div className="services__card__content-img tirar-uma-ideia-do-papel"></div>
                      <div className="services__card__content-text">
                        <p>
                          Você tem uma ideia incrível, mas não sabe por onde
                          começar? Nós transformamos sua visão em realidade! Com
                          a nossa expertise em design e desenvolvimento,
                          ajudamos você a criar um site profissional que reflete
                          a essência do seu negócio. Desde a primeira
                          consultoria até o lançamento, estamos ao seu lado para
                          garantir que sua ideia ganhe vida online.
                        </p>
                        <a
                          href="#tirar-uma-ideia-do-papel"
                          className="services__card__content-text__button"
                        >
                          <span>Saiba mais</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="d-block w-100 services__card">
                    <h3>Reinventar meu site</h3>
                    <div className="services__card__content">
                      <div className="services__card__content-img reinventar-meu-site"></div>
                      <div className="services__card__content-text">
                        <p>
                          Seu site já não representa mais o seu negócio como
                          deveria? Está lento, desatualizado ou não funciona bem
                          em dispositivos móveis? Nós revitalizamos o seu site,
                          transformando-o em uma ferramenta moderna, rápida e
                          eficiente. Com um redesign focado na experiência do
                          usuário, seu site vai não só atrair mais visitantes,
                          mas também converter mais.
                        </p>
                        <a
                          href="#reinventar-meu-site"
                          className="services__card__content-text__button"
                        >
                          <span>Saiba mais</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100 services__card">
                    <h3>Minha empresa online</h3>
                    <div className="services__card__content">
                      {/* Testando !!! */}
                      <div className="services__card__content-img minha-empresa-online"></div>
                      <div className="services__card__content-text">
                        <p>
                          Você já tem um negócio consolidado, mas ainda não tem
                          um site? Está perdendo oportunidades de atrair novos
                          clientes e fortalecer sua marca. Nós criamos a sua
                          presença online do zero, com um site profissional que
                          reflete a qualidade do seu trabalho. Seja para mostrar
                          seus serviços, vender produtos ou se conectar com seu
                          público, vamos ajudar você a brilhar na internet.
                        </p>
                        <a
                          href="#minha-empresa-online"
                          className="services__card__content-text__button"
                        >
                          <span>Saiba mais</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100 services__card">
                    <h3>Minha Landing Page de Alto Impacto</h3>
                    <div className="services__card__content">
                      {/* Testando !!! */}
                      <div className="services__card__content-img minha-landing-page"></div>
                      <div className="services__card__content-text">
                        <p>
                          Precisa de uma página focada em resultados para sua
                          campanha, lançamento ou promoção? Nós criamos landing
                          pages poderosas, projetadas para capturar a atenção do
                          seu público e gerar conversões. Seja para coletar
                          emails, promover um produto ou destacar um serviço,
                          sua mensagem será transmitida de forma clara e
                          persuasiva.
                        </p>
                        <a
                          href="#minha-landing-page"
                          className="services__card__content-text__button"
                        >
                          <span>Saiba mais</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            {/* End of Carousel Bootstrap Component */}
          </div>
        </div>
        <div className="container-services-details wrapper">
          <div className="service-details" id="tirar-uma-ideia-do-papel">
            <div className="services__card__content-img tirar-uma-ideia-do-papel"></div>
            <div className="service-details__content">
              <h3>Tirar suas ideias do papel</h3>
              <p>
                Você tem uma ideia incrível, mas não sabe por onde começar? Nós
                transformamos sua visão em realidade! Com a nossa expertise em
                design e desenvolvimento, ajudamos você a criar um site
                profissional que reflete a essência do seu negócio. Desde a
                primeira consultoria até o lançamento, estamos ao seu lado para
                garantir que sua ideia ganhe vida online.
              </p>
            </div>
          </div>
          <div className="service-details" id="reinventar-meu-site">
            <div className="services__card__content-img reinventar-meu-site"></div>
            <div className="service-details__content">
              <h3>Reinventar meu site</h3>
              <p>
                Seu site já não representa mais o seu negócio como deveria? Está
                lento, desatualizado ou não funciona bem em dispositivos móveis?
                Nós revitalizamos o seu site, transformando-o em uma ferramenta
                moderna, rápida e eficiente. Com um redesign focado na
                experiência do usuário, seu site vai não só atrair mais
                visitantes, mas também converter mais.
              </p>
            </div>
          </div>
          <div className="service-details" id="minha-empresa-online">
            <div className="services__card__content-img minha-empresa-online"></div>
            <div className="service-details__content">
              <h3>Minha empresa online</h3>
              <p>
                Você já tem um negócio consolidado, mas ainda não tem um site?
                Está perdendo oportunidades de atrair novos clientes e
                fortalecer sua marca. Nós criamos a sua presença online do zero,
                com um site profissional que reflete a qualidade do seu
                trabalho. Seja para mostrar seus serviços, vender produtos ou se
                conectar com seu público, vamos ajudar você a brilhar na
                internet.
              </p>
            </div>
          </div>
          <div className="service-details" id="minha-landing-page">
            <div className="services__card__content-img minha-landing-page"></div>
            <div className="service-details__content">
              <h3>Tirar suas ideias do papel</h3>
              <p>
                Você tem uma ideia incrível, mas não sabe por onde começar? Nós
                transformamos sua visão em realidade! Com a nossa expertise em
                design e desenvolvimento, ajudamos você a criar um site
                profissional que reflete a essência do seu negócio. Desde a
                primeira consultoria até o lançamento, estamos ao seu lado para
                garantir que sua ideia ganhe vida online.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
