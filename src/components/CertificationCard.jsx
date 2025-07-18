import { useNavigate } from "react-router-dom";

function CertificationCard({ cert }) {
  const navigate = useNavigate();
  const hasProjects = cert.linkedProjects && cert.linkedProjects.length > 0;

  const handleSaibaMais = () => {
    if (!hasProjects) {
      // Exibe detalhes do certificado
      navigate(`/certifications/${cert.id}`);
    } else if (cert.linkedProjects.length === 1) {
      navigate(`/projects/${cert.linkedProjects[0]}`);
    } else {
      navigate(`/certifications/${cert.id}/projects`);
    }
  };

  return (
    <div className="certification-content">
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
}

export default CertificationCard; 