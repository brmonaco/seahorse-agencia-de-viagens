import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = ({ onOpenPrivacy }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/seahorse-logo.png" alt="SeaHorse Agência de Viagens" className="logo-image" style={{marginBottom: '1.5rem', height: '100px', borderRadius: '8px'}} />
            <p className="footer-desc">
              Sua viagem dos sonhos para os destinos mais exclusivos e paradisíacos do mundo começa aqui.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/seahorseviagens" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img src="/facebook.png" alt="Facebook" style={{ width: '32px', height: '32px' }} /></a>
              <a href="https://www.instagram.com/seahorseviagens/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src="/instagram.png" alt="Instagram" style={{ width: '32px', height: '32px' }} /></a>
  {/* <a href="https://www.x.com/seahorseviagens" target="_blank" rel="noopener noreferrer" aria-label="X"><img src="/x.png" alt="X" style={{ width: '32px', height: '32px' }} /></a> */}
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
    {/* WhatsApp — abre conversa com mensagem pronta */}
    <li>
      <a href="https://wa.me/5516981589175?text=Olá%20Leandro%2C%20Quero%20Viajar!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Phone size={16} /> (16) 98158-9175
      </a>
    </li>
    {/* Email — abre o app de email */}
    <li>
      <a href="mailto:seahorseviagens@gmail.com">
        <Mail size={16} /> seahorseviagens@gmail.com
      </a>
    </li>
    {/* Instagram — abre o perfil */}
    <li>
      <a href="https://www.instagram.com/seahorseviagens/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MapPin size={16} /> @seahorseviagens
      </a>
    </li>
  </ul>
</div>
        </div>
        
		<div className="footer-bottom">
			<p>&copy; 2026 SeaHorse - Agência de Viagens. Todos os direitos reservados.</p>
			<button className="footer-privacy-link" onClick={onOpenPrivacy}>
				Política de Privacidade
			</button>
		</div>
      </div>
    </footer>
  );
};

export default Footer;
