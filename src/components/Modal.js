import React from 'react';

function Modal() {
  return (
    <div id="modal">
      <div className="modal__overlay"></div>
      <div className="modal__gallery">
        <div className="gallery__arrow prev">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="gallery__image">
          <img src="" alt="gallery modal" />
        </div>
        <div className="gallery__arrow next">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Modal;
