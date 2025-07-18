import { useParams, useNavigate } from "react-router-dom";
import { certifications } from "../data/CertificationsData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
