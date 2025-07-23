import '../styles/home.css';

function Home() {
  return (
    <section className="over-hidden">
      <div class="blur-circle c1"></div>
      <div className="home">
        <div className="content">
          <div className="name">
            BEM <span>VINDO!</span>
          </div>
          <div className="des">
            <p>  Olá, sou a <span>Nathalye Vitoria</span>, estudante do curso Técnico em
            Mecatrônica, pelo IFSP - campus Guarulhos e faço o CAI de
            Eletricista de Manutenção Eletroeletrônica no Senai Hermenegildo
            Campos de Almeida. </p>
            
            <p>  Com habilidades desenvolvidas em automação industrial,
            eletroeletrônica e sistemas de controle, tenho conhecimento em
            manutenção preventiva e corretiva de máquinas, interpretação de
            diagramas elétricos e programação de controladores lógicos
            programáveis (CLPs). Ao longo da minha formação, participei de
            projetos práticos, como o desenvolvimento de circuitos automatizados
            e a montagem de sistemas eletropneumáticos. </p>
            
            <p>  Busco constantemente aprimorar meus conhecimentos para contribuir de
            forma eficaz em projetos industriais e na otimização de processos
            produtivos. Meu objetivo é integrar-me a uma equipe técnica
            inovadora, onde possa aplicar minhas habilidades e crescer
            profissionalmente. </p>
          </div>
        </div>
        <div className="avatar">
          <div className="card">
            <img className="img" src="/perfil.jpeg" alt="perfil" />
          </div>
        </div>
        <a
          className="cv-button"
          href="/curriculo.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baixe meu CV
        </a>
      </div>
    </section>
  );
}

export default Home;
