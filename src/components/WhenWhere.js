import React from 'react';
import Img from './common/Img';

function WhenWhere({ whenWhere }) {
  return (
    <section id="whenWhere">
      <h1 className="whenWhere__title">When &amp; Where</h1>
      <div className="whenWhere__ceremony">
        {whenWhere.map((itemWhenWhere, index) => {
          return (
            <ItemWhenWhere key={index} seq={index} whenWhere={itemWhenWhere} />
          );
        })}
      </div>
    </section>
  );
}

function ItemWhenWhere({ seq, whenWhere }) {
  const { dateWedding, timeWedding, address, placeX, placeY } = whenWhere;
  const { background, icon, type } = setInfo(seq);

  return (
    <div className="ceremony__item" style={background}>
      <div className="wrap__item">
        <p className="item__decoration">
          <i className={icon}></i>
        </p>
        <h2 className="item__title">{type}</h2>
        <p className="item__date">{getFormatDate(dateWedding)}</p>
        <p className="item__time">{getFromatTime(timeWedding)}</p>
        <p className="item__place">{address}</p>
        <Img placeX={placeX} placeY={placeY} />
        <button className="item__move_web">지도 보기</button>
      </div>
    </div>
  );
}

function setInfo(seq) {
  return seq == 0
    ? {
        background: { backgroundImage: 'url(common/imgs/place-2.jpg)' },
        icon: 'fas fa-birthday-cake',
        type: '결혼식',
      }
    : {
        background: { backgroundImage: 'url(common/imgs/place-3.jpg)' },
        icon: 'fas fa-seedling',
        type: '폐백',
      };
}

function getFormatDate(date) {
  return `${date.substr(0, 4)}.${date.substr(4, 2)}.${date.substr(6, 2)}`;
}

function getFromatTime(time) {
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

export default WhenWhere;
