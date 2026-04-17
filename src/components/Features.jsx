import { Clock, Plane, Tag, Users, MapPinned  , ShieldCheck } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Clock size={40} />,
      title: 'Atendimento 24h Personalizado',
      desc: 'Suporte integral antes, durante e depois da sua viagem.'
    },
    {
      icon: <Plane size={40} />,
      title: 'Pacotes Personalizados e Inteligentes',
      desc: 'Sua viagem desenhada sob medida para seus desejos.'
    },
    {
      icon: <Tag size={40} />,
      title: 'Melhor Preço Garantido',
      desc: 'Negociamos direto com parceiros para o melhor custo-benefício.'
    },
    {
      icon: <MapPinned size={40} />,
      title: 'Experiências Únicas e Imersivas',
      desc: 'Acesso a roteiros exclusivos e destinos inexplorados.'
    },
    {
      icon: <Users   size={40} />,
      title: 'Consultores Especializados',
      desc: 'Conte com consultores experientes que entendem seu perfil e montam roteiros com mais segurança, praticidade e atenção a cada detalhe da sua viagem'
    },
    {
      icon: <ShieldCheck size={40} />,
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
