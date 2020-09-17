import React from 'react';
import * as Secret from '../../common/secret.js';
import axios from 'axios';

class Img extends React.Component {
  state = {
    placeX: this.props.placeX,
    placeY: this.props.placeY,
    src: '',
  };

  getImageMap = async (placeX, placeY) => {
    const url =
      'https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?' +
      'w=300&h=300' +
      '&crs=NHN:2048' +
      '&center=' +
      String(placeX) +
      ',' +
      String(placeY) +
      '&level=16' +
      '&markers=type:d|size:mid|viewSizeRatio:0.7|pos:' +
      String(placeX) +
      ' ' +
      String(placeY) +
      '&X-NCP-APIGW-API-KEY-ID=' +
      Secret.NAVER_MAP_CLIENT_ID;

    const test = await axios
      .get(url, {
        headers: { 'X-NCP-APIGW-API-KEY': Secret.NAVER_MAP_CLIENT_SECRET },
        responseType: 'blob',
      })
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        console.log(res);
      });

    this.setState(() => ({
      src: URL.createObjectURL(test),
    }));
  };

  componentDidMount() {
    this.getImageMap(this.state.placeX, this.state.placeY);
  }

  render() {
    return <img className="item__map" src={this.state.src} alt="map image" />;
  }
}

export default Img;
