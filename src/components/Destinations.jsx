import './Destinations.css';
import { MapPin } from 'lucide-react';

const destinations = [
  { 
    id: 1, 
    name: 'Curaçao', 
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80', 
    description: 'Águas cristalinas e arquitetura holandesa vibrante no Caribe.' 
  },
  { 
    id: 2, 
    name: 'Disney', 
    image: 'https://images.unsplash.com/photo-1634221558053-3a617b5201d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9ybGFuZG8lMjBmbG9yaWRhfGVufDB8fDB8fHww', 
    description: 'A magia do mundo Disney esperando por você e sua família.' 
  },
  { 
    id: 3, 
    name: 'Paris', 
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80', 
    description: 'A cidade luz com a Torre Eiffel, gastronomia e romance.' 
  },
  { 
    id: 4, 
    name: 'Maceió', 
    image: 'https://images.unsplash.com/photo-1587571594954-272f8cc473d0?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    description: 'Piscinas naturais e praias de água verde esmeralda no Nordeste.' 
  },
  { 
    id: 5, 
    name: 'Natal', 
    image: 'https://images.unsplash.com/photo-1515898034510-821b204966e4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    description: 'Dunas douradas, lagoas e o melhor litoral do Rio Grande do Norte.' 
  },
  { 
    id: 6, 
    name: 'Gramado', 
    image: 'https://images.unsplash.com/photo-1752434379738-8ac3634fa230?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENpZGFkZSUyMGRlJTIwZ3JhbWFkb3xlbnwwfHwwfHx8MA%3D%3D', 
    description: 'Clima europeu, chocolate artesanal e charme gaúcho na Serra.' 
  },
];

const Destinations = ({ onSelectDestino }) => {
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
                <button
					className="link-arrow"
					onClick={() => {
						onSelectDestino(dest.name); // envia o nome do destino para o App.jsx
						document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
					}}
				>
					Consultar Pacotes →
				</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
