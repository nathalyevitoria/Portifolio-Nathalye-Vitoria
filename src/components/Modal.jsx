import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, description, image }) => {
  useEffect(() => {
    if (isOpen) {
      // Travar a rolagem da página quando o modal estiver aberto
      document.body.style.overflow = 'hidden';
    } else {
      // Liberar a rolagem quando o modal for fechado
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup para garantir que a rolagem seja liberada quando o componente for desmontado
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
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