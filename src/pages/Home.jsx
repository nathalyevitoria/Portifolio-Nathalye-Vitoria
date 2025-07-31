import '../styles/home.css';

function Home() {
  return (
    <section className="home-section">
      <div className="hero-container">
        <div className="text-content">
          <h1 className="welcome-title">BEM <span>VINDO!</span></h1>
          <div className="intro-text">
          <p>  Olá, sou a <span>Nathalye Vitoria</span>, estudante do curso Técnico em Mecatrônica, pelo IFSP - campus Guarulhos e faço o CAI de Eletricista de Manutenção Eletroeletrônica no Senai Hermenegildo Campos de Almeida. </p>
          </div>
          <a className="cv-button" href="/curriculo.pdf" download>
            Baixe meu CV
          </a>
        </div>
        <div className="avatar-container">
          <div className="profile-card">
            <img src="/perfil.png" alt="Nathalye Vitória" className="profile-image" />
          </div>
        </div>
      </div>
      
      <div className="detailed-content">
        <div className="description">
        <p>  Com habilidades desenvolvidas em automação industrial, eletroeletrônica e sistemas de controle, tenho conhecimento em manutenção preventiva e corretiva de máquinas, interpretação de diagramas elétricos e programação de controladores lógicos programáveis (CLPs). Ao longo da minha formação, participei de projetos práticos, como o desenvolvimento de circuitos automatizados e a montagem de sistemas eletropneumáticos. </p>
        <p>  Busco constantemente aprimorar meus conhecimentos para contribuir de forma eficaz em projetos industriais e na otimização de processos produtivos. Meu objetivo é integrar-me a uma equipe técnica inovadora, onde possa aplicar minhas habilidades e crescer profissionalmente. </p>
        </div>
      </div>
    </section>
  );
}

export default Home;