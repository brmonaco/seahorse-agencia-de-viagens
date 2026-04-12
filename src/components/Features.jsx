import { Clock, Briefcase, Tag, Compass, Coffee, ShieldCheck } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Clock size={32} />,
      title: 'Atendimento 24h',
      desc: 'Suporte integral antes, durante e depois da sua viagem.'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Pacotes Personalizados',
      desc: 'Sua viagem desenhada sob medida para seus desejos.'
    },
    {
      icon: <Tag size={32} />,
      title: 'Melhor Preço Garantido',
      desc: 'Negociamos direto com parceiros para o melhor custo-benefício.'
    },
    {
      icon: <Compass size={32} />,
      title: 'Experiências Únicas',
      desc: 'Acesso a roteiros exclusivos e destinos inexplorados.'
    },
    {
      icon: <Coffee size={32} />,
      title: 'Roteiros Gastronômicos Exclusivos',
      desc: 'Descubra os sabores autênticos através de reservas premium e dicas secretas de chefs locais.'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Seguro Viagem Completo',
      desc: 'Viaje com absoluta tranquilidade com nossas apólices de seguro médico e bagagem de primeira linha.'
    }
  ];

  return (
    <section id="sobre" className="section features">
      <div className="container">
        <div className="section-header fade-in-section">
          <h2>Por que a SeaHorse?</h2>
          <p>Nossa missão é transformar seus sonhos de viagem em memórias inesquecíveis.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card fade-in-section"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
