import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    destino: '',
    dataIda: '',
    dataVolta: '',
    datasFlexiveis: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "5562982489877";
    const text = `Olá, gostaria de solicitar um orçamento!
*Nome:* ${formData.nome}
*WhatsApp:* ${formData.whatsapp}
*Email:* ${formData.email}
*Destino:* ${formData.destino}
*Ida:* ${formData.dataIda || 'Não definida'}
*Volta:* ${formData.dataVolta || 'Não definida'}
*Datas Flexíveis:* ${formData.datasFlexiveis ? 'Sim' : 'Não'}`;
    
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="section contact">
      <div className="container contact-container fade-in-section">
        <div className="contact-info">
          <h2>Vamos Planejar sua Próxima Aventura?</h2>
          <p>Preencha os dados e um de nossos especialistas em viagens entrará em contato com você via WhatsApp com as melhores opções.</p>
          <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Resort" className="contact-image" />
        </div>
        
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label>Nome Completo</label>
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Seu nome" />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>WhatsApp</label>
                <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required placeholder="(00) 00000-0000" />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="seu@email.com" />
              </div>
            </div>

            <div className="form-group">
              <label>Destino de Interesse</label>
              <input type="text" name="destino" value={formData.destino} onChange={handleChange} required placeholder="Ex: Maldivas, Europa..." />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Data de Ida</label>
                <input type="date" name="dataIda" value={formData.dataIda} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Data de Volta</label>
                <input type="date" name="dataVolta" value={formData.dataVolta} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group toggle-group">
              <label className="toggle-switch">
                <input type="checkbox" name="datasFlexiveis" checked={formData.datasFlexiveis} onChange={handleChange} />
                <span className="slider"></span>
              </label>
              <span>Minhas datas são flexíveis</span>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">Solicitar Orçamento via WhatsApp</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
