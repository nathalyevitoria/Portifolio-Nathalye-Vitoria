import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetails'
import DarkModeToggle from './components/DarkModeToggle'
import Certifications from './pages/Certifications';
import CertificationDetails from './pages/CertificationDetails';
import CertificationProjects from './pages/CertificationProjects';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <Navbar />      
        <DarkModeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/certifications/:id" element={<CertificationDetails />} />
        <Route path="/certifications/:id/projects" element={<CertificationProjects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  )
}

export default App;
