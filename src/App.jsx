import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetails'
import LightButton from './components/LightButton'
import Certifications from './pages/Certifications';
import CertificationDetails from './pages/CertificationDetails';

function App() {
  return (
    <>
      <Navbar />      
        <LightButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/certifications/:id" element={<CertificationDetails />} />
      </Routes>
    </>
  )
}

export default App
