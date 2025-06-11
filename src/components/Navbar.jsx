import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
    <nav>
      <Link to="/" style={{ color: '#fff' }}>Home</Link>
      <Link to="/projects" style={{ color: '#fff' }}>Projetos</Link>
      <Link to="/contact" style={{ color: '#fff' }}>Contato</Link>
    </nav>

    </header>
  )
}

export default Navbar
