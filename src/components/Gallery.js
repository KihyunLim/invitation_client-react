import React from 'react';
import ImgGallery from './common/ImgGallery';

function Gallery({ gallery }) {
  return (
    <section id="gallery">
      <h1 className="gallery__title">Gallery</h1>
      <div className="gallery__image">
        {gallery.map((itemGallery, index) => (
          <ItemGallery
            key={itemGallery.orderSeq}
            seq={index}
            gallery={itemGallery}
          />
        ))}
      </div>
    </section>
  );
}

function ItemGallery({ seq, gallery: { fullname } }) {
  console.log(`common/imgs/gallery-${seq + 1}.jpg`);
  return (
    <div className="imgage__item">
      <ImgGallery seq={seq} fullname={fullname} />
      <div className="item__imageIcon">
        <div className="imageIcon__container">
          <i className="far fa-images"></i>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
