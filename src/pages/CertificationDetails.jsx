import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { certifications } from "../data/CertificationsData.js";

function CertificationDetails() {
  const { id } = useParams();
  const cert = certifications.find((c) => c.id.toLowerCase() === id.toLowerCase());

  if (!cert) return <p>Certificação não encontrada.</p>;

  return (
    <div className="certification-container">
      <div className="carousel">
        <Swiper
          navigation
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          className="media-carousel"
        >
          {cert.media.map((item, index) => (
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
      <h2 className="certification-title">{cert.name}</h2>
      <p className="certification-description" style={{ whiteSpace: "pre-line" }}>
        {cert.description}
      </p>
      <div className="certification-meta">
        <span><b>Instituição:</b> {cert.institution}</span> | <span><b>Ano:</b> {cert.year}</span>
      </div>
    </div>
  );
}

export default CertificationDetails;
