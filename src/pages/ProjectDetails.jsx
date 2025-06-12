import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { projects } from '../data/ProjectsData.js'



function ProjectDetail() {
  const { id } = useParams()
  console.log('ID da URL:', id)
const project = projects.find(p => p.id.toLowerCase() === id.toLowerCase())


  if (!project) return <p>Projeto não encontrado.</p>

  return (
    <div className="page max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
      <p style={{ whiteSpace: 'pre-line' }} className="mb-6">{project.description}</p>

      <Swiper
        navigation
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-lg"
      >
        {project.media.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === 'image' ? (
              <img src={item.src} alt={`Slide ${index}`} className="w-full rounded" />
            ) : (
              <video controls className="w-full rounded">
                <source src={item.src} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProjectDetail
