import { useParams, useNavigate } from "react-router-dom";
import { certifications } from "../data/CertificationsData.js";
import { projects } from "../data/ProjectsData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";

function CertificationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cert = certifications.find((c) => c.id.toLowerCase() === id.toLowerCase());

  const [origin, setOrigin] = React.useState(null);
  const [projectOriginId, setProjectOriginId] = React.useState(null);

  React.useEffect(() => {
    // Detecta origem da navegação
    const sessionOrigin = sessionStorage.getItem('certOrigin');
    const sessionProjectId = sessionStorage.getItem('certProjectId');
    if (sessionOrigin) setOrigin(sessionOrigin);
    if (sessionProjectId) setProjectOriginId(sessionProjectId);
    // Limpa ao sair
    return () => {
      sessionStorage.removeItem('certOrigin');
      sessionStorage.removeItem('certProjectId');
    };
  }, []);

  if (!cert) return <p>Certificação não encontrada.</p>;

  const linkedProjects = cert.linkedProjects || [];

  // Se veio de um projeto, exibe o modal de detalhes do certificado
  if (origin === 'projects') {
    return (
      <div className="certification-container">
        <div className="certification-details-modal">
          <div className="certification-carousel-modal">
            <Swiper
              navigation
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              className="media-carousel"
            >
              {cert.media && cert.media.map((item, index) => (
                <SwiperSlide key={index}>
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={`Slide ${index}`}
                      className="media-item"
                    />
                  ) : (
                    <video controls className="media-item">
                      <source src={item.src} type="video/mp4" />
                      Seu navegador não suporta vídeos.
                    </video>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <h2 className="certification-title-modal">{cert.name}</h2>
          <p className="certification-description-modal">{cert.description}</p>
          <button className="certification-back-button" style={{marginTop: 32}} onClick={() => {
            if (projectOriginId) {
              navigate(`/projects/${projectOriginId}`);
            } else {
              navigate('/projects');
            }
          }}>
            Voltar
          </button>
        </div>
      </div>
    );
  }

  // Se veio da listagem de certificados
  if (origin === 'certifications' || !origin) {
    // Se só há um projeto vinculado, redireciona automaticamente
    if (linkedProjects.length === 1) {
      navigate(`/projects/${linkedProjects[0]}`);
      return null;
    }
    // Se múltiplos projetos, exibe middleware
    return (
      <div>
        <div className="certification-container">
          <div className="certification-details-modal">
            <h2 className="certification-title-modal">{cert.name}</h2>
            <p className="certification-description-modal">{cert.description}</p>
            {linkedProjects.length === 0 ? (
              <p style={{textAlign: 'center', color: '#888'}}>Nenhum projeto vinculado a este certificado.</p>
            ) : (
              <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center'}}>
                <h3 style={{marginBottom: '1rem'}}>Projetos Relacionados:</h3>
                {linkedProjects.map(pid => {
                  const proj = projects.find(p => p.id === pid);
                  if (!proj) return null;
                  return (
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
                  );
                })}
              </div>
            )}
            <button className="certification-back-button" style={{marginTop: 32}} onClick={() => navigate('/certifications')}>
              Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default CertificationDetails;
