import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { projects } from "../data/ProjectsData.js";
import { certifications } from "../data/CertificationsData.js";
import React from "react"; // Added missing import for React

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id.toLowerCase() === id.toLowerCase());

  if (!project) return <p>Projeto não encontrado.</p>;

  // Buscar certificados relacionados
  const relatedCerts = (project.linkedCertifications || [])
    .map(cid => certifications.find(c => c.id === cid))
    .filter(Boolean);

  // Determinar origem da navegação
  const handleBack = () => {
    const origin = sessionStorage.getItem('projectOrigin');
    if (origin === 'certifications') {
      navigate('/certifications');
    } else {
      navigate('/projects');
    }
  };

  // Salvar origem ao abrir este modal
  React.useEffect(() => {
    if (!sessionStorage.getItem('projectOrigin')) {
      // fallback: se veio de /certifications/:id, salva 'certifications', senão 'projects'
      if (window.location.pathname.startsWith('/projects/')) {
        // Não sabemos a origem, mantém como está
      } else if (document.referrer.includes('/certifications')) {
        sessionStorage.setItem('projectOrigin', 'certifications');
      } else {
        sessionStorage.setItem('projectOrigin', 'projects');
      }
    }
    return () => {
      sessionStorage.removeItem('projectOrigin');
    };
  }, []);

  return (
    <div className="project-container">
      <div class="blur-circle c1"></div>
      <div class="blur-circle c2"></div>
      <h2 className="project-title">{project.name}</h2>
      <div className="carousel">
        <Swiper
          navigation
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          className="media-carousel"
        >
          {project.media.map((item, index) => (
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

      <p className="project-description">{project.description}</p>

      {relatedCerts.length > 0 && (
        <div className="related-certs-container">
          <h3 className="related-certs-title">Certificados Relacionados:</h3>
          <div className="related-certs-list">
            {relatedCerts.map(cert => (
              <div key={cert.id} className="related-cert-card">
                <img src={cert.image} alt={cert.name} className="related-cert-img" />
                <div className="related-cert-info">
                  <div className="related-cert-name">{cert.name}</div>
                  <div className="related-cert-meta">{cert.institution} ({cert.year})</div>
                </div>
                <button className="certification-button related-cert-btn" onClick={() => navigate(`/certifications/${cert.id}`)}>
                  Ver Certificado
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className="certification-back-button" onClick={handleBack}>
        Voltar
      </button>
    </div>
  );
}

export default ProjectDetail;
