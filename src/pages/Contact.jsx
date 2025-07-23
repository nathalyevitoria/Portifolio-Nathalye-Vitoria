import '../styles/contact.css';

function Contact() {
  return (
    <div id="contact">      
      <div className="blur-orbit orbit1">
        <div className="blur-circle1 c01"></div>
      </div>
      <div className="blur-orbit orbit2">
        <div className="blur-circle1 c02"></div>
      </div>
      <div className="container">
        <div className="thank text-gradient">Obrigada!</div>
        <h2>Contato</h2>
        <div className="list contact-buttons">
          <a
            href="mailto:nathalye277@gmail.com"
            className="contact-btn animated-gradient-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511953192603&text=Ol%C3%A1!%20acessei%20seu%20site%20portfolio%20e%20gostaria%20de%20falar%20com%20voc%C3%AA!"
            className="contact-btn animated-gradient-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telefone
          </a>
          <a
            href="https://www.linkedin.com/in/nathalye-vitoria-felix-17689a205/"
            className="contact-btn animated-gradient-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
