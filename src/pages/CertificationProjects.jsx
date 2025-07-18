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
      <div className="certification-details-modal">
        <h2 className="certification-title-modal">{cert.name}</h2>
        <p className="certification-description-modal">{cert.description}</p>
        {relatedProjects.length === 0 ? (
          <p style={{textAlign: 'center', color: '#888'}}>Nenhum projeto vinculado a este certificado.</p>
        ) : (
          <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center'}}>
            <h3 style={{marginBottom: '1rem'}}>Projetos Relacionados:</h3>
            {relatedProjects.map(proj => (
              <div key={proj.id} style={{
                display: 'flex',
                alignItems: 'center',
                background: '#f7f7ff',
                borderRadius: 16,
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                padding: '1.5rem',
                maxWidth: 600,
                width: '100%',
                gap: '2rem',
              }}>
                <img src={proj.image} alt={proj.name} style={{width: 120, height: 80, objectFit: 'cover', borderRadius: 8}} />
                <div style={{flex: 1}}>
                  <h4 style={{margin: 0, fontSize: '1.2rem'}}>{proj.name}</h4>
                  <p style={{margin: '0.5rem 0 1rem 0', fontSize: '0.98em', color: '#444'}}>{proj.description.slice(0, 120)}...</p>
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
        <button className="certification-back-button" style={{marginTop: 32}} onClick={() => navigate('/certifications')}>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default CertificationProjects; 