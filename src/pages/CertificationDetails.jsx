import { useParams, useNavigate } from "react-router-dom";
import { certifications } from "../data/CertificationsData.js";
import React from "react";

function CertificationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cert = certifications.find((c) => c.id.toLowerCase() === id.toLowerCase());

  // Detecta origem da navegação para o botão Voltar
  const [origin, setOrigin] = React.useState(null);
  const [projectOriginId, setProjectOriginId] = React.useState(null);
  React.useEffect(() => {
    const sessionOrigin = sessionStorage.getItem('certOrigin');
    const sessionProjectId = sessionStorage.getItem('certProjectId');
    if (sessionOrigin) setOrigin(sessionOrigin);
    if (sessionProjectId) setProjectOriginId(sessionProjectId);
    return () => {
      sessionStorage.removeItem('certOrigin');
      sessionStorage.removeItem('certProjectId');
    };
  }, []);

  if (!cert) return <p>Certificação não encontrada.</p>;

  return (
    <div className="certification-container">
      <div className="certification-details-modal">
        <div className="certification-image-gradient" style={{maxWidth: 600, marginBottom: 32}}>
          <div className="certification-image-inner">
            <img src={cert.image} alt={cert.name} />
          </div>
        </div>
        <h2 className="certification-title-modal">{cert.name}</h2>
        <p className="certification-description-modal">{cert.description}</p>
        <button className="certification-back-button" style={{marginTop: 32}} onClick={() => {
          if (origin === 'projects') {
            if (projectOriginId) {
              navigate(`/projects/${projectOriginId}`);
            } else {
              navigate('/projects');
            }
          } else {
            navigate('/certifications');
          }
        }}>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default CertificationDetails;
