import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title fade-in-section is-visible">
          Descubra o Paraíso que Você Merece
        </h1>
        <p className="hero-subtitle fade-in-section is-visible" style={{transitionDelay: '0.2s'}}>
          Experiências premium no Caribe e ao redor do mundo.<br />Sua Viagem dos Sonhos começa com a SeaHorse.
        </p>
        <div className="hero-buttons fade-in-section is-visible" style={{transitionDelay: '0.4s'}}>
          <a href="#destinos" className="btn btn-primary">Explorar Destinos</a>
          <a href="#contato" className="btn btn-secondary">Fale com um Especialista</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
