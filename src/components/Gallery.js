import React from 'react';

function Gallery({ gallery }) {
  return (
    <section id='gallery'>
      <h1 className='gallery__title'>Gallery</h1>
      <div className='gallery__image'>
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

function ItemGallery({ seq, gallery: { fullName } }) {
  const replaceSrc = [
    'common/imgs/gallery-1.jpg',
    'common/imgs/gallery-2.jpg',
    'common/imgs/gallery-3.jpg',
    'common/imgs/gallery-4.jpg',
    'common/imgs/gallery-5.jpg',
    'common/imgs/gallery-6.jpg',
    'common/imgs/gallery-7.jpg',
    'common/imgs/gallery-8.jpg',
    'common/imgs/gallery-1.jpg',
    'common/imgs/gallery-2.jpg',
  ];

  return (
    <div className='imgage__item'>
      <img
        className='item__image'
        src={fullName}
        alt={`gallery${seq}`}
        onError={(e) => {
          e.target.src = replaceSrc[seq];
        }}
      />
      <div className='item__imageIcon'>
        <div className='imageIcon__container'>
          <i className='far fa-images'></i>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
