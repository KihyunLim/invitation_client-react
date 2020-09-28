import React, { useEffect } from 'react';

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

function ItemGallery({ seq, gallery: { fullName } }) {
  useEffect(() => {
    const modal = document.querySelector('#modal');
    const modal_overlay = document.querySelector('.modal__overlay');
    const item = document.querySelectorAll('.image__item')[seq];
    const modalGalleryImage = document.querySelector(
      '#modal .gallery__image img'
    );
    const galleryArrow = document.querySelectorAll('#modal .gallery__arrow');
    let currItemImage = null;

    // Gallery 모달 이미지 외부 영역 클릭 시 닫기
    modal_overlay.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // itemImage.forEach((item) => {
    item.addEventListener('click', (event) => {
      let target = event.target.closest('.image__item');

      modal.style.display = 'block';
      modalGalleryImage.src = target.children[0].src;

      currItemImage = target;
    });
    // });

    // Gallery 이미지 선택 후 사진 넘기기 아이콘 선택
    galleryArrow.forEach((item) => {
      item.addEventListener('click', (event) => {
        let target = event.target.closest('.gallery__arrow');

        if (target.classList.contains('prev')) {
          if (currItemImage && currItemImage.previousElementSibling != null) {
            modalGalleryImage.src = currItemImage.previousElementSibling.querySelector(
              'img'
            ).src;

            currItemImage = currItemImage.previousElementSibling;
          }
        } else if (target.classList.contains('next')) {
          if (currItemImage && currItemImage.nextElementSibling != null) {
            modalGalleryImage.src = currItemImage.nextElementSibling.querySelector(
              'img'
            ).src;

            currItemImage = currItemImage.nextElementSibling;
          }
        }
      });
    });

    // 모달에 사진 로드 될때 잡아서 전 후 체크해서 하이드 처리
    const modalImg = document.querySelector('#modal img');
    modalImg.addEventListener('load', (event) => {
      if (
        currItemImage &&
        isCompareSrc(
          currItemImage.querySelector('img').getAttribute('src'),
          event.target.getAttribute('src')
        )
      ) {
        let prev = document.querySelector('.prev');
        let next = document.querySelector('.next');

        prev.style.visibility =
          currItemImage.previousElementSibling == null ? 'hidden' : 'visible';

        next.style.visibility =
          currItemImage.nextElementSibling == null ? 'hidden' : 'visible';
      }
    });
  });

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
    <div className="image__item">
      <img
        className="item__image"
        src={fullName}
        alt={`gallery${seq}`}
        onError={(e) => {
          e.target.src = replaceSrc[seq];
        }}
      />
      <div className="item__imageIcon">
        <div className="imageIcon__container">
          <i className="far fa-images"></i>
        </div>
      </div>
    </div>
  );
}

function isCompareSrc(currentImgSrc, willLoadImgSrc) {
  return (
    currentImgSrc === willLoadImgSrc.replace(window.location.origin + '/', '')
  );
}

export default Gallery;
