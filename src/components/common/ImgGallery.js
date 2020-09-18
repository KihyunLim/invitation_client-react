import React from 'react';

class ImgGallery extends React.Component {
  state = {
    seq: this.props.seq,
    src: this.props.fullname,
    replaceSrc: [
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
    ],
  };

  render() {
    return (
      <img
        className="item__image"
        src={this.state.src}
        alt={`gallery${this.state.seq}`}
        onError={(e) => {
          e.target.src = this.state.replaceSrc[this.state.seq + 1];
        }}
      />
    );
  }
}

export default ImgGallery;
