import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/seahorse-logo.png" alt="SeaHorse Agência de Viagens" className="logo-image" style={{marginBottom: '1.5rem', height: '100px', borderRadius: '8px'}} />
            <p className="footer-desc">
              Sua jornada para os destinos mais exclusivos e paradisíacos do mundo começa aqui.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/seahorseviagens" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img src="/facebook.png" alt="Facebook" style={{ width: '32px', height: '32px' }} /></a>
              <a href="https://www.instagram.com/seahorseviagens/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src="/instagram.png" alt="Instagram" style={{ width: '32px', height: '32px' }} /></a>
              <a href="https://www.x.com/seahorseviagens" target="_blank" rel="noopener noreferrer" aria-label="X"><img src="/x.png" alt="X" style={{ width: '32px', height: '32px' }} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Links Úteis</h3>
            <ul>
              <li><a href="#destinos">Destinos</a></li>
              <li><a href="#pacotes">Pacotes</a></li>
              <li><a href="#avaliacoes">Avaliações</a></li>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Fale Conosco</h3>
            <ul>
              <li><Phone size={16} /> WhatsApp: (62) 98248-9877</li>
              <li><Mail size={16} /> contato@seahorse.com.br</li>
              <li><MapPin size={16} /> Av. Paulista, 1000 - São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 SeaHorse - Agência de Viagens. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
