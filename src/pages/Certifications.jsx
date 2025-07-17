import { Link } from "react-router-dom";
import { certifications } from "../data/CertificationsData.js";
import '../styles/certifications.css';

function Certifications() {
  return (
    <div id="certification">
      <div className="container-certification">
        <div className="list">
          {certifications.map((cert, index) => (
            <div className="item" key={cert.id}>
              <img src={cert.image} alt={cert.name} />
              <div className="index">#{index + 1}</div>
              <div className="name">{cert.name}</div>
              <div className="text">
                {cert.description.length > 100
                  ? cert.description.slice(0, 200) + "..."
                  : cert.description}
              </div>
              <div className="author">
                <Link to={`/certifications/${cert.id}`} className="link">
                  Ver Certificação -{'>'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
