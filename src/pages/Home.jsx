import '../styles/home.css';

function Home() {
  return (
    <section className="home-section">
      <div className="hero-container">
        <div className="left-content">
          <div className="welcome-title-container">
            <h1 className="welcome-title">BEM <span>VINDO!</span></h1>
          </div>
          <div className="text-content">
            <div className="intro-text">
              <p>
                Olá, sou a <span>Nathalye Vitoria</span>, estudante do curso Técnico em Mecatrônica, pelo IFSP - campus Guarulhos e faço o CAI de Eletricista de Manutenção Eletroeletrônica no Senai Hermenegildo Campos de Almeida.
              </p>
            </div>
            <a className="cv-button" href="/curriculo.pdf" download>
              Baixe meu CV
            </a>
          </div>
        </div>
        <div className="avatar-container">
          <div className="profile-card">
            <img src="/perfil.png" alt="Nathalye Vitória" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;