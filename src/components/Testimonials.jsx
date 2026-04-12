import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Carolina Silva",
    location: "São Paulo, SP",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "A SeaHorse superou todas as expectativas. Nossa lua de mel nas Maldivas foi perfeitamente organizada, desde os voos até o resort maravilhoso."
  },
  {
    id: 2,
    name: "Marcos Oliveira",
    location: "Rio de Janeiro, RJ",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Mudei o jeito de viajar. O atendimento 24 horas fez toda a diferença quando precisamos alterar uma conexão de última hora na Europa."
  },
  {
    id: 3,
    name: "Amanda Costa",
    location: "Belo Horizonte, MG",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Melhores preços e experiências exclusivas. Consegui um pacote para Punta Cana com um custo-benefício que não encontrei em nenhum outro lugar."
  }
];

const Testimonials = () => {
  return (
    <section id="avaliacoes" className="section testimonials">
      <div className="container">
        <div className="section-header fade-in-section">
          <h2>O Que Dizem Nossos Clientes</h2>
          <p>Depoimentos de quem já viveu uma experiência SeaHorse.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <div 
              key={test.id} 
              className="testimonial-card fade-in-section"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#e9c46a" color="#e9c46a" />
                ))}
              </div>
              <p className="testimonial-text">"{test.text}"</p>
              <div className="testimonial-author">
                <img src={test.image} alt={test.name} />
                <div className="author-info">
                  <h4>{test.name}</h4>
                  <span>{test.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
