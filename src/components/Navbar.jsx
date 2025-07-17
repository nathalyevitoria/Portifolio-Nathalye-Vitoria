import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fecha o sidebar ao clicar no overlay
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('sidebar-overlay')) {
      setSidebarOpen(false);
    }
  };

  return (
    <header>
      <nav className="navbar-nav">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/certifications">Certificados</Link>
          <Link to="/contact">Contato</Link>
        </div>
        <button
          className={`hamburger${sidebarOpen ? ' hidden' : ''}`}
          aria-label="Abrir menu"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
      {/* Sidebar e overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={handleOverlayClick}>
          <aside className="sidebar">
            <button
              className="close-btn"
              aria-label="Fechar menu"
              onClick={() => setSidebarOpen(false)}
            >
              &times;
            </button>
            <Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link>
            <div className="sidebar-separator"></div>
            <Link to="/projects" onClick={() => setSidebarOpen(false)}>Projetos</Link>
            <div className="sidebar-separator"></div>
            <Link to="/certifications" onClick={() => setSidebarOpen(false)}>Certificados</Link>
            <div className="sidebar-separator"></div>
            <Link to="/contact" onClick={() => setSidebarOpen(false)}>Contato</Link>
          </aside>
        </div>
      )}
    </header>
  );
}

export default Navbar
