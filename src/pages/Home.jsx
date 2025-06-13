function Home() {
  return (
    <section>
      <div className="blur-circle c1"></div>
      <div className='home'>
        <div  className="content">

        <div className='name'>
          MEU NOME É <span>Vitória</span>
        </div>
        <div className='des'>
        Texto sobre você. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere saepe provident neque odit vero accusantium? Suscipit amet, laudantium consectetur, ex tempora dolor recusandae cumque voluptatem explicabo rerum blanditiis excepturi distinctio.
        </div>
        <a className="cv-button" href='/curriculo.pdf' target='_blank' rel='noopener noreferrer'>Baixe meu CV</a>
      </div>
      <div className='avatar'>
        <div className='card'>
          <img className="img" src='/image.png' alt='perfil'/>
        </div>
      </div>
        </div>
    </section>
    
  )
}

export default Home
