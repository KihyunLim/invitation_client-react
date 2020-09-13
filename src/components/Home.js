import React from 'react';

class Home extends React.Component {
  state = {
    invitation: this.props.invitation,
    remainDate: 0,
    remainHours: 0,
    remainMinutes: 0,
    remainSeconds: 0,
  };

  getCountDDay = (date, time) => {
    const today = new Date();
    const currentDateTime = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      today.getHours(),
      today.getMinutes(),
      today.getSeconds()
    );
    const weddingDateTime = new Date(
      Number(date.substr(0, 4)),
      Number(date.substr(4, 2)) - 1,
      Number(date.substr(6, 2)),
      Number(time.substr(0, 2)),
      Number(time.substr(2, 2)),
      0
    );
    const diffDateTime = weddingDateTime - currentDateTime;

    this.setState(() => ({
      remainDate: parseInt(diffDateTime / (24 * 60 * 60 * 1000)),
      remainHours: Math.floor(
        (diffDateTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      remainMinutes: Math.floor(
        (diffDateTime % (1000 * 60 * 60)) / (1000 * 60)
      ),
      remainSeconds: Math.floor((diffDateTime % (1000 * 60)) / 1000),
    }));
  };

  componentDidMount() {
    this.getCountDDay(
      this.state.invitation.dateWedding,
      this.state.invitation.timeWedding
    );

    this.timerID = setInterval(() => {
      this.getCountDDay(
        this.state.invitation.dateWedding,
        this.state.invitation.timeWedding
      );
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <section id='home'>
        <div className='home__decoration'>
          <i className='fas fa-chess-queen'></i>
        </div>
        <div className='home__guide'>
          <div className='guide__bar'></div>
          <span className='guide__text'>THE WEDDING OF</span>
          <div className='guide__bar'></div>
        </div>
        <h1 className='home__title'>
          {this.state.invitation.nameGroom} &amp;{' '}
          {this.state.invitation.nameBride}
        </h1>
        <div className='home__d_day'>
          <div className='d_day__item'>
            <p className='item__num'>{this.state.remainDate}</p>
            <p className='item__text'>DAYS</p>
          </div>
          <div className='d_day__item'>
            <p className='item__num'>{this.state.remainHours}</p>
            <p className='item__text'>HOURS</p>
          </div>
          <div className='d_day__item'>
            <p className='item__num'>{this.state.remainMinutes}</p>
            <p className='item__text'>MINUTES</p>
          </div>
          <div className='d_day__item'>
            <p className='item__num'>{this.state.remainSeconds}</p>
            <p className='item__text'>SECONDS</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
