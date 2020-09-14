import React from 'react';

function Main({
  mainInfo: {
    nameGroom,
    nameBride,
    dateWedding,
    timeWedding,
    address,
    fullNameMain,
  },
}) {
  return (
    <section id="main">
      <div className="main__container">
        <div
          className="container__main_image"
          style={setBackground(fullNameMain)}
        ></div>
        <div className="contact-info">
          <p className="info__guide">우리 결혼합니다</p>
          <h1 className="info__title">
            {nameGroom} <br />
            &amp;
            <br />
            {nameBride}
          </h1>
          <div className="info__decoration">
            <i className="fas fa-chess-queen"></i>
          </div>
          <div className="info__date">
            <span>{dateWedding.substr(0, 4)}</span>
            <span>|</span>
            <span>{dateWedding.substr(4, 2)}</span>
            <span>|</span>
            <span>{dateWedding.substr(6, 2)}</span>
          </div>
          <p className="info__time">{getTime(timeWedding)}</p>
          <p className="info__place">{address}</p>
        </div>
      </div>
    </section>
  );
}

function setBackground(url) {
  return {
    backgroundImage: `url(${url}), url(common/imgs/about.jpg)`,
  };
}

function getTime(time) {
  let hour = Number(time.substr(0, 2));
  let flagAmPm = '오전';

  if (hour > 12) {
    hour -= 12;
    flagAmPm = '오후';
  }

  if (hour < 10) {
    hour = '0' + String(hour);
  } else {
    hour = String(hour);
  }

  return `${flagAmPm} ${hour} : ${time.substr(2, 2)}`;
}

export default Main;
