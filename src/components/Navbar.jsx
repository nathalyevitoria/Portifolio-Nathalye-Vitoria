import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/contact">Contato</Link>
    </nav>

    </header>
  )
}

export default Navbar
