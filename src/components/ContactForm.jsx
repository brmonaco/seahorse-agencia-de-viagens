import { useState, useEffect } from 'react';
import './ContactForm.css';

// Recebe pacoteSelecionado como prop vinda do App.jsx
const ContactForm = ({ pacoteSelecionado, onOpenPrivacy }) => {

  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    aeroportoOrigem: '',
    destino: '',
    dataIda: '',
    dataVolta: '',
    datasFlexiveis: false,
    adultos: 1,   // mínimo 1 adulto
    criancas: 0,  // começa com 0
    bebes: 0      // começa com 0
  });

// Controla se o usuário aceitou a política de privacidade
const [lgpdAceito, setLgpdAceito] = useState(false);

  // Quando o usuário clica em "Quero esse pacote" no LastMinuteOffers,
  // o nome do pacote chega aqui e preenche o campo destino automaticamente
  useEffect(() => {
    if (pacoteSelecionado) {
      setFormData(prev => ({ ...prev, destino: pacoteSelecionado }));
    }
  }, [pacoteSelecionado]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

// Handler específico para o campo WhatsApp
// Aplica a máscara antes de salvar no estado
const handleWhatsApp = (e) => {
  const valorFormatado = mascaraTelefone(e.target.value);
  setFormData({ ...formData, whatsapp: valorFormatado });
};

// Aplica a máscara de telefone enquanto o usuário digita
// Transforma 16981589175 em (16) 98158-9175
const mascaraTelefone = (valor) => {
  // Remove tudo que não for número
  const numeros = valor.replace(/\D/g, '');
  
  // Aplica a máscara progressivamente conforme digita
  if (numeros.length <= 2) return `(${numeros}`;
  if (numeros.length <= 7) return `(${numeros.slice(0,2)}) ${numeros.slice(2)}`;
  if (numeros.length <= 11) return `(${numeros.slice(0,2)}) ${numeros.slice(2,7)}-${numeros.slice(7)}`;
  
  // Limita a 11 dígitos (DDD + 9 dígitos)
  return `(${numeros.slice(0,2)}) ${numeros.slice(2,7)}-${numeros.slice(7,11)}`;
};

  // Controla o + e o - de cada categoria de passageiro
  // tipo = 'adultos' | 'criancas' | 'bebes'
  // operacao = 'mais' | 'menos'
  const handlePassageiros = (tipo, operacao) => {
    setFormData(prev => {
      const valor = prev[tipo];
      const minimo = tipo === 'adultos' ? 1 : 0; // adultos mínimo 1, resto mínimo 0
      const novoValor = operacao === 'mais'
        ? Math.min(valor + 1, 9)  // máximo 9
        : Math.max(valor - 1, minimo);
      return { ...prev, [tipo]: novoValor };
    });
  };

  // Monta o resumo de passageiros para a mensagem do WhatsApp
  const resumoPassageiros = () => {
    const partes = [];
    partes.push(`${formData.adultos} ${formData.adultos === 1 ? 'Adulto' : 'Adultos'}`);
    if (formData.criancas > 0)
      partes.push(`${formData.criancas} ${formData.criancas === 1 ? 'Criança' : 'Crianças'}`);
    if (formData.bebes > 0)
      partes.push(`${formData.bebes} ${formData.bebes === 1 ? 'Bebê' : 'Bebês'}`);
    return partes.join(', ');
  };

const handleSubmit = (e) => {
  e.preventDefault();
  // Bloqueia envio se não aceitou a política
  if (!lgpdAceito) {
    alert('Por favor, aceite a Política de Privacidade para continuar.');
    return;
  }

    const phone = "16981589175";
    const text = `Olá Leandro, Quero Viajar!
*Nome:* ${formData.nome}
*WhatsApp:* ${formData.whatsapp}
*Aeroporto de Origem:* ${formData.aeroportoOrigem}
*Destino:* ${formData.destino}
*Ida:* ${formData.dataIda || 'Não definida'}
*Volta:* ${formData.dataVolta || 'Não definida'}
*Datas Flexíveis:* ${formData.datasFlexiveis ? 'Sim' : 'Não'}
*Passageiros:* ${resumoPassageiros()}`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="section contact">
      <div className="container contact-container fade-in-section">

        {/* Lado esquerdo — texto e imagem */}
        <div className="contact-info">
          <h2>Vamos Planejar Sua Próxima Aventura?</h2>
          <p>Preencha os dados e um de nossos consultores em viagens entrará em contato com você via WhatsApp com as melhores opções.</p>
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Resort"
            className="contact-image"
          />
        </div>

        {/* Lado direito — formulário */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="form">

            {/* Nome */}
            <div className="form-group">
              <label>Nome Completo</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>

            {/* WhatsApp e Aeroporto lado a lado */}
            <div className="form-row">
              <div className="form-group">
                <label>WhatsApp</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleWhatsApp}
                  required
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div className="form-group">
                <label>Aeroporto de Origem</label>
                <input
                  type="text"
                  name="aeroportoOrigem"
                  value={formData.aeroportoOrigem}
                  onChange={handleChange}
                  placeholder="Ex: Guarulhos (GRU)..."
                />
              </div>
            </div>

            {/* Destino */}
            <div className="form-group">
              <label>Destino de Interesse</label>
              <input
                type="text"
                name="destino"
                value={formData.destino}
                onChange={handleChange}
                required
                placeholder="Ex: Maldivas, Europa, Nordeste..."
              />
            </div>

            {/* Datas lado a lado */}
            <div className="form-row">
              <div className="form-group">
                <label>Data de Ida</label>
                <input
                  type="date"
                  name="dataIda"
                  value={formData.dataIda}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Data de Volta</label>
                <input
                  type="date"
                  name="dataVolta"
                  value={formData.dataVolta}
                  onChange={handleChange}
				  min={formData.dataIda || ''}  // ← só isso adiciona
                />
              </div>
            </div>

            {/* Toggle datas flexíveis — logo abaixo das datas */}
            <div className="form-group toggle-group">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="datasFlexiveis"
                  checked={formData.datasFlexiveis}
                  onChange={handleChange}
                />
                <span className="slider"></span>
              </label>
              <span>Minhas datas são flexíveis</span>
            </div>

            {/* Passageiros — 3 linhas fixas, sem dropdown */}
            <div className="form-group">
              <label>Passageiros</label>

              <div className="passageiros-fixo">

                {/* Linha Adultos */}
                <div className="passageiro-linha">
                  <div className="passageiro-info">
                    <span className="passageiro-titulo">Adultos</span>
                    <span className="passageiro-desc">Acima de 12 anos</span>
                  </div>
                  <div className="passageiro-controle">
                    <button
                      type="button"
                      className="btn-contador"
                      onClick={() => handlePassageiros('adultos', 'menos')}
                      disabled={formData.adultos <= 1}
                    >−</button>
                    <span className="contador-valor">{formData.adultos}</span>
                    <button
                      type="button"
                      className="btn-contador"
                      onClick={() => handlePassageiros('adultos', 'mais')}
                      disabled={formData.adultos >= 9}
                    >+</button>
                  </div>
                </div>

                {/* Linha Crianças */}
                <div className="passageiro-linha">
                  <div className="passageiro-info">
                    <span className="passageiro-titulo">Crianças</span>
                    <span className="passageiro-desc">De 2 a 11 anos</span>
                  </div>
                  <div className="passageiro-controle">
                    <button
                      type="button"
                      className="btn-contador"
                      onClick={() => handlePassageiros('criancas', 'menos')}
                      disabled={formData.criancas <= 0}
                    >−</button>
                    <span className="contador-valor">{formData.criancas}</span>
                    <button
                      type="button"
                      className="btn-contador"
                      onClick={() => handlePassageiros('criancas', 'mais')}
                      disabled={formData.criancas >= 9}
                    >+</button>
                  </div>
                </div>

                {/* Linha Bebês */}
                <div className="passageiro-linha">
                  <div className="passageiro-info">
                    <span className="passageiro-titulo">Bebês</span>
                    <span className="passageiro-desc">De 0 a 23 meses</span>
                  </div>
                  <div className="passageiro-controle">
                    <button
                      type="button"
                      className="btn-contador"
                      onClick={() => handlePassageiros('bebes', 'menos')}
                      disabled={formData.bebes <= 0}
                    >−</button>
                    <span className="contador-valor">{formData.bebes}</span>
                    <button
                      type="button"
                      className="btn-contador"
                      onClick={() => handlePassageiros('bebes', 'mais')}
                      disabled={formData.bebes >= 9}
                    >+</button>
                  </div>
                </div>

              </div>
            </div>
			{/* Checkbox LGPD — obrigatório antes de enviar */}
			<div className="lgpd-group">
				<input
					type="checkbox"
					id="lgpd"
					checked={lgpdAceito}
					onChange={(e) => setLgpdAceito(e.target.checked)}
				/>
				<label htmlFor="lgpd">
					Li e concordo com a{' '}
					<button
						type="button"
						className="lgpd-link"
						onClick={onOpenPrivacy}
					>
						Política de Privacidade
					</button>
					{' '}e autorizo o uso dos meus dados para receber cotações da SeaHorse Viagens.
					</label>
			</div>
            {/* Botão enviar */}
            <button type="submit" className="btn btn-primary submit-btn">
              Solicitar Orçamento via WhatsApp
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;