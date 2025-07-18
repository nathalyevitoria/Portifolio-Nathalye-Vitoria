import { certifications } from "../data/CertificationsData.js";
import CertificationCard from "../components/CertificationCard.jsx";
import '../styles/certifications.css';

function Certifications() {
  return (
    <div id="certification">
      <div className="container-certification">
        {certifications.map((cert) => (
          <CertificationCard cert={cert} key={cert.id} />
        ))}
      </div>
    </div>
  );
}

export default Certifications;
