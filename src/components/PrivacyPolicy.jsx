import './PrivacyPolicy.css';
import { X } from 'lucide-react';

// Recebe a prop onClose para fechar a página quando clicar no X
const PrivacyPolicy = ({ onClose }) => {
  return (
    <div className="privacy-overlay">
      <div className="privacy-modal">

        {/* Botão fechar */}
        <button className="privacy-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="privacy-content">
          <h1>Política de Privacidade</h1>
          <p className="privacy-updated">Última atualização: janeiro de 2026</p>

          <p>A <strong>SeaHorse Agência de Viagens</strong> respeita a sua privacidade e está comprometida com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).</p>

          <h2>1. Quem somos</h2>
          <p>SeaHorse Agência de Viagens é uma agência especializada em passagens aéreas e pacotes de viagem, operada como MEI, atendendo clientes em todo o Brasil com foco em atendimento personalizado via WhatsApp.</p>

          <h2>2. Quais dados coletamos</h2>
          <p>Ao preencher nosso formulário de cotação, coletamos:</p>
          <ul>
            <li>Nome completo</li>
            <li>Número de WhatsApp</li>
            <li>Aeroporto de origem</li>
            <li>Destino de interesse</li>
            <li>Datas de viagem</li>
            <li>Quantidade e perfil de passageiros</li>
          </ul>

          <h2>3. Para que usamos seus dados</h2>
          <p>Seus dados são usados exclusivamente para:</p>
          <ul>
            <li>Elaborar cotações de passagens e pacotes de viagem personalizados</li>
            <li>Entrar em contato via WhatsApp para apresentar as melhores ofertas</li>
            <li>Melhorar nosso atendimento e serviços</li>
          </ul>

          <h2>4. Como protegemos seus dados</h2>
          <p>Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais. Suas informações são tratadas com sigilo e utilizadas apenas pela equipe da SeaHorse para fins de atendimento.</p>

          <h2>5. Por quanto tempo guardamos seus dados</h2>
          <p>Seus dados são mantidos pelo tempo necessário para a prestação do serviço solicitado. Caso não haja continuidade no atendimento, os dados são descartados em até 90 dias.</p>

          <h2>6. Seus direitos como titular</h2>
          <p>De acordo com a LGPD, você tem direito a:</p>
          <ul>
            <li>Confirmar se tratamos seus dados</li>
            <li>Acessar, corrigir ou excluir seus dados</li>
            <li>Revogar o consentimento a qualquer momento</li>
            <li>Solicitar a portabilidade dos seus dados</li>
          </ul>
          <p>Para exercer seus direitos, entre em contato pelo WhatsApp <strong>(16) 98158-9175</strong> ou pelo e-mail <strong>seahorseviagens@gmail.com</strong>.</p>

          <h2>7. Cookies</h2>
          <p>Nosso site pode utilizar cookies para melhorar a experiência de navegação. Esses dados são anônimos e não permitem sua identificação pessoal.</p>

          <h2>8. Contato</h2>
          <p>Dúvidas sobre esta política? Fale com a gente:</p>
          <ul>
            <li>WhatsApp: <strong>(16) 98158-9175</strong></li>
            <li>E-mail: <strong>seahorseviagens@gmail.com</strong></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;