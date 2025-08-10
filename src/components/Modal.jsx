import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, description, image, sectionTitle, sectionId }) => {
  useEffect(() => {
    if (isOpen) {
      // Travar a rolagem da página
      document.body.style.overflow = 'hidden';
      
      // Rolar para a seção correspondente
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      // Destravar a rolagem da página
      document.body.style.overflow = '';
    }
    
    return () => {
      // Garantir que o scroll seja restaurado se o componente for desmontado
      document.body.style.overflow = '';
    };
  }, [isOpen, sectionId]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-section-title">
          {sectionTitle}
        </div>
        
        <div className="modal-image-container">
          <img src={image} alt={title} className="modal-image" />
        </div>
        <div className="modal-body">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;