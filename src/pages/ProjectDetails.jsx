import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { projects } from "../data/ProjectsData.js";

function ProjectDetail() {
  const { id } = useParams();
  console.log("ID da URL:", id);
  const project = projects.find((p) => p.id.toLowerCase() === id.toLowerCase());

  if (!project) return <p>Projeto não encontrado.</p>;

  return (
    <div className="project-container">
      <div class="blur-circle c1"></div>
      <div class="blur-circle c2"></div>
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

      <h2 className="project-title">{project.name}</h2>
      <p className="project-description" style={{ whiteSpace: "pre-line" }}>
        {project.description}
      </p>
    </div>
  );
}

export default ProjectDetail;
