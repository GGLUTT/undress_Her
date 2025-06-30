import React from 'react';
import './Gallery.css';

// @ts-ignore
import asianDressed1 from '../../img/models/gallery/asian-1-dressed.jpg';
// @ts-ignore
import asianUndressed1 from '../../img/models/gallery/asian-1-undressed.jpg';
// @ts-ignore
import asianDressed2 from '../../img/models/gallery/asian-2-dressed.jpg';
// @ts-ignore
import asianUndressed2 from '../../img/models/gallery/asian-2-undressed.jpg';
// @ts-ignore
import blackDressed from '../../img/models/gallery/black-dressed.jpg';
// @ts-ignore
import blackUndressed from '../../img/models/gallery/black-undressed.jpg';
// @ts-ignore
import gardenDressed from '../../img/models/gallery/garden-dressed.jpg';
// @ts-ignore
import gardenUndressed from '../../img/models/gallery/garden-undressed.jpg';
// @ts-ignore
import gymDressed from '../../img/models/gallery/gym-dressed.jpg';
// @ts-ignore
import gymUndressed from '../../img/models/gallery/gym-undressed.jpg';
// @ts-ignore
import officeDressed from '../../img/models/gallery/office-dressed.jpg';
// @ts-ignore
import officeUndressed from '../../img/models/gallery/office-undressed.jpg';

interface GalleryProps {
  language: 'ru' | 'en';
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const content = {
    ru: {
      galleryTitle: 'ГАЛЕРЕЯ'
    },
    en: {
      galleryTitle: 'GALLERY'
    }
  };

  const galleryImages = [
    { dressed: asianDressed1, undressed: asianUndressed1, alt: 'Asian Model 1' },
    { dressed: asianDressed2, undressed: asianUndressed2, alt: 'Asian Model 2' },
    { dressed: blackDressed, undressed: blackUndressed, alt: 'Black Model' },
    { dressed: gardenDressed, undressed: gardenUndressed, alt: 'Garden Scene' },
    { dressed: gymDressed, undressed: gymUndressed, alt: 'Gym Scene' },
    { dressed: officeDressed, undressed: officeUndressed, alt: 'Office Scene' }
  ];

  const t = content[language];

  return (
    <section className="gallery-section section">
      <div className="container">
        <h2 className="section-title neon-text">{t.galleryTitle}</h2>
        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <div key={index} className="gallery-item">
              <div className="gallery-image-container">
                <img 
                  src={item.dressed} 
                  alt={item.alt} 
                  className="gallery-image gallery-image-dressed"
                />
                <img 
                  src={item.undressed} 
                  alt={`${item.alt} - Undressed`} 
                  className="gallery-image gallery-image-undressed"
                />
               
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;