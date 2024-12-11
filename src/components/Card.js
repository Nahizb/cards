import React from 'react';
import PropTypes from 'prop-types'; // Asegúrate de importar PropTypes

function Card({ title = "Default Title", paragraph = "Default paragraph", imageSource = "", url = "#", text = "" }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="card mx-auto" style={{ width: '18rem' }}>
        <div className="image-container">
          <img src={imageSource} alt={title} className="card-img-top" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p>{paragraph}</p>
          <p>{text}</p>
          <div className="d-flex justify-content-center">
            <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired, // El título es obligatorio
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;
