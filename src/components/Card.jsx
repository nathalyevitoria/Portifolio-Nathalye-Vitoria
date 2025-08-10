import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ image, title, description, delay }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div 
        className="skill-card" 
        style={{ animationDelay: `${delay}ms` }}
        onClick={openModal}
      >
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        description={description}
        image={image}
      />
    </>
  );
};

export default Card;