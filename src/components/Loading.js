import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [dot, setDot] = useState('');

  const effectLoading = () => {
    setDot((prevDot) => {
      return prevDot.length >= 5 ? '' : prevDot + '.';
    });
  };

  useEffect(() => {
    const timerID = setInterval(effectLoading, 500);

    return () => {
      console.log('clear!!');
      clearInterval(timerID);
    };
  }, []);

  return (
    <section id="loading">
      <div className="loading__text">
        <span>loading</span>
        <span>{dot}</span>
      </div>
    </section>
  );
};

export default Loading;
