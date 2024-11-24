import React from 'react';
import Card from './Card';
import image1 from '../assest/image1.jpg';  // Verifica la ruta correcta
import image2 from '../assest/image2.jpg';
import image3 from '../assest/image3.jpg';
import './cards.scss';  // Asegúrate de que la ruta es correcta


function Cards() {
  const cardData = [
    {
      title: 'Fazt Web',
      paragraph: 'Este es el párrafo de la primera tarjeta. Describe brevemente su contenido.',
      imageSource: image1,
      url: 'https://faztweb.com/',  // URL para la primera tarjeta
      text: 'Texto adicional para la primera tarjeta',  // Texto adicional para la primera tarjeta
    },
    {
      title: 'Fazt Blog',
      paragraph: 'Este es el párrafo de la segunda tarjeta. Incluye información adicional.',
      imageSource: image2,
      url: 'https://blog.faztweb.com/',  // URL para la segunda tarjeta
      text: 'Texto adicional para la segunda tarjeta',  // Texto adicional para la segunda tarjeta
    },
    {
      title: 'Fazt Youtube',
      paragraph: 'Este es el párrafo de la tercera tarjeta. Ideal para llamar la atención.',
      imageSource: image3,
      url: 'https://www.youtube.com/channel/UCX9NJ471o7Wie1DQe94RVIg',  // URL para la tercera tarjeta
      text: 'Texto adicional para la tercera tarjeta',  // Texto adicional para la tercera tarjeta
    },
  ];

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="row justify-content-center">
        {/* Usamos map para recorrer los datos de las tarjetas */}
        {cardData.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card
              title={card.title}
              paragraph={card.paragraph}
              imageSource={card.imageSource}
              url={card.url}  // Pasa la URL como prop
              text={card.text}  // Pasa el texto adicional como prop
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
