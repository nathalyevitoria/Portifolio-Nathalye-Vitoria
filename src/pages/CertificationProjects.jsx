import { useParams, useNavigate } from "react-router-dom";
import { certifications } from "../data/CertificationsData.js";
import { projects } from "../data/ProjectsData.js";
import React from "react";

function CertificationProjects() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cert = certifications.find((c) => c.id.toLowerCase() === id.toLowerCase());

  if (!cert) return <p>Certificação não encontrada.</p>;

  const linkedProjects = cert.linkedProjects || [];
  const relatedProjects = linkedProjects.map(pid => projects.find(p => p.id === pid)).filter(Boolean);

  return (
    <div className="certification-container">
      <div class="blur-circle c1"></div>
      <div class="blur-circle c2"></div>
      <div className="certification-details-modal">
        <h2 className="certification-title-modal">{cert.name}</h2>
        <p className="certification-description-modal">{cert.description}</p>
        {relatedProjects.length === 0 ? (
          <p className="certification-no-projects">Nenhum projeto vinculado a este certificado.</p>
        ) : (
          <div className="certification-projects-list">
            <h3 className="certification-projects-title">Projetos Relacionados:</h3>
            {relatedProjects.map(proj => (
              <div key={proj.id} className="certification-project-card">
                <img src={proj.image} alt={proj.name} />
                <div className="project-info">
                  <h4 className="certification-project-name">{proj.name}</h4>
                  <p className="certification-project-desc">{proj.description.slice(0, 120)}...</p>
                  <button className="certification-button" onClick={() => {
                    sessionStorage.setItem('projectOrigin', 'certifications');
                    navigate(`/projects/${proj.id}`);
                  }}>
                    Ver Projeto
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <button className="certification-back-button" onClick={() => navigate('/certifications')}>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default CertificationProjects; 