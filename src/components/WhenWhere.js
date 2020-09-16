import React from 'react';
import * as Secret from '../common/secret.js';
import axios from 'axios';

function WhenWhere({ whenWhere }) {
  return (
    <section id='whenWhere'>
      <h1 className='whenWhere__title'>When &amp; Where</h1>
      <div className='whenWhere__ceremony'>
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
    <div className='ceremony__item' style={background}>
      <div className='wrap__item'>
        <p className='item__decoration'>
          <i className={icon}></i>
        </p>
        <h2 className='item__title'>{type}</h2>
        <p className='item__date'>{getFormatDate(dateWedding)}</p>
        <p className='item__time'>{getFromatTime(timeWedding)}</p>
        <p className='item__place'>{address}</p>
        <img
          className='item__map'
          src={getImageMap(placeX, placeY)}
          alt='map image'
        />
        <button className='item__move_web'>지도 보기</button>
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

async function getImageMap(placeX, placeY) {
  let src = 'test';
  // let xhr = new XMLHttpRequest();
  // xhr.responseType = 'blob';
  // xhr.onreadystatechange = function () {
  //   console.log('!!!!!!!!!!!!!!!!!!!');
  //   if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
  //     console.log('@@@@@@@@@@@@@@');
  //     src = URL.createObjectURL(xhr.response);
  //   }
  // };
  // xhr.open(
  //   'GET',
  //   'https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?' +
  //     'w=300&h=300' +
  //     '&center=' +
  //     String(placeX) +
  //     ',' +
  //     String(placeY) +
  //     '&level=16' +
  //     '&X-NCP-APIGW-API-KEY-ID=' +
  //     Secret.NAVER_MAP_CLIENT_ID,
  //   true
  // );
  // xhr.setRequestHeader('X-NCP-APIGW-API-KEY', Secret.NAVER_MAP_CLIENT_SECRET);
  // xhr.send();

  // https://github.com/axios/axios https://qastack.kr/programming/45578844/how-to-set-header-and-options-in-axios
  await axios
    .get({
      url:
        'https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?' +
        'w=300&h=300' +
        '&center=' +
        String(placeX) +
        ',' +
        String(placeY) +
        '&level=16' +
        '&X-NCP-APIGW-API-KEY-ID=' +
        Secret.NAVER_MAP_CLIENT_ID,
      method: 'get',
      headers: { 'X-NCP-APIGW-API-KEY': Secret.NAVER_MAP_CLIENT_SECRET },
      responseType: 'blob',
    })
    .then((res) => {
      console.log('success');
      console.log(res);
    })
    .catch((res) => {
      console.log('fail');
      console.log(res);
    });

  console.log(src);
  return src;
}

export default WhenWhere;
