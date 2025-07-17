import { Link } from "react-router-dom";
import { projects } from "../data/ProjectsData.js";
import '../styles/projects.css';

function Projects() {
  return (
    <div id="project">
      <div className="container-project">
        <div className="list">
          {projects.map((project, index) => (
            <div className="item" key={project.id}>
              <img src={project.image} alt={project.name} />
              <div className="index">#{index + 1}</div>
              <div className="name">{project.name}</div>
              <div className="text">
                {project.description.length > 100
                  ? project.description.slice(0, 200) + "..."
                  : project.description}
              </div>
              <div className="author">
                <Link to={`/projects/${project.id}`} className="link">
                  Ver Projeto -{">"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
