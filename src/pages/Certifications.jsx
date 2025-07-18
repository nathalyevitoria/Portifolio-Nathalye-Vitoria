import { certifications } from "../data/CertificationsData.js";
import { useNavigate } from "react-router-dom";
import '../styles/certifications.css';

function Certifications() {
  const navigate = useNavigate();
  return (
    <div id="certification">
      <div className="container-certification">
        {certifications.map((cert) => {
          const hasProjects = cert.linkedProjects && cert.linkedProjects.length > 0;
          const handleSaibaMais = () => {
            if (!hasProjects) {
              navigate(`/certifications/${cert.id}`);
            } else if (cert.linkedProjects.length === 1) {
              navigate(`/projects/${cert.linkedProjects[0]}`);
            } else {
              navigate(`/certifications/${cert.id}/projects`);
            }
          };
          return (
            <div className="certification-content" key={cert.id}>
              <div className="certification-image-gradient">
                <div className="certification-image-inner">
                  <img src={cert.image} alt={cert.name} />
                </div>
              </div>
              <div className="certification-panel">
                <h2 className="certification-title">{cert.name}</h2>
                <div className="certification-meta">
                  <span><b>Instituição:</b> {cert.institution}</span><br />
                  <span><b>Ano:</b> {cert.year}</span>
                </div>
                <button
                  className="certification-button"
                  onClick={handleSaibaMais}
                >
                  Saiba Mais
                </button>
                {hasProjects && (
                  <div style={{ marginTop: '1rem', fontSize: '0.95em', color: '#444' }}>
                    Relacionado {cert.linkedProjects.length === 1 ? 'ao projeto:' : 'aos projetos:'}
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {cert.linkedProjects.map(pid => (
                        <li key={pid}>{pid}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Certifications;
