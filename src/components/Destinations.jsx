import './Destinations.css';
import { MapPin } from 'lucide-react';

const destinations = [
  { id: 1, name: 'Curaçao', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', description: 'Águas cristalinas e arquitetura holandesa vibrante.' },
  { id: 2, name: 'Miami', image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=800&q=80', description: 'Vida noturna agitada e praias de areia branca paradisíacas.' },
  { id: 3, name: 'Fernando de Noronha', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80', description: 'Santuário ecológico inesquecível no Brasil.' },
  { id: 4, name: 'Costa Rica', image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80', description: 'Biodiversidade pura, vulcões majestosos e selvas exuberantes.' },
  { id: 5, name: 'Grécia', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80', description: 'Por do sol romântico, história antiga e mar Egeu deslumbrante.' },
  { id: 6, name: 'Tailândia', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80', description: 'Templos sagrados e as ilhas tropicais mais deslumbrantes da Ásia.' },
  { id: 7, name: 'Ushuaia', image: '/ushuaia.png', description: 'Passeios na Neve e Natureza extremamente preservada.' },
  { id: 8, name: 'São Carlos', image: '/saocarlos.png', description: 'A cidade conhecida como a Capital da Tecnologia.' },
  { id: 9, name: 'Ibirité', image: '/ibirite.png', description: 'Turismo ecológico, com vistas panorâmicas na Serra do Rola Moça, cultura e religiosidade.' },
];

const Destinations = () => {
  return (
    <section id="destinos" className="section destinations">
      <div className="container">
        <div className="section-header fade-in-section">
          <h2>Destinos em Destaque</h2>
          <p>Explore os cenários mais incríveis do mundo, selecionados com exclusividade para você.</p>
        </div>

        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <div 
              key={dest.id} 
              className="destination-card fade-in-section"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="destination-img-wrapper">
                <img src={dest.image} alt={dest.name} loading="lazy" />
              </div>
              <div className="destination-content">
                <h3><MapPin size={18} className="icon-pin" /> {dest.name}</h3>
                <p>{dest.description}</p>
                <a href="#contato" className="link-arrow">Ver pacotes &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
