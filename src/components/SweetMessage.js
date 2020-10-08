import React, { useEffect } from 'react';

function SweetMessage({ sweetMessage }) {
  return (
    <section id="sweetMessageList">
      <h1 className="sweetMessageList__title">SweetMessage</h1>
      <div className="sweetMessageList__message">
        {sweetMessage.map((itemSweetMessage) => (
          <ItemSweetMessage
            key={itemSweetMessage.seq}
            message={itemSweetMessage}
          />
        ))}
      </div>
    </section>
  );
}

function ItemSweetMessage({ message }) {
  useEffect(() => {
    const sweetMessageList_message = document.querySelector(
      '.sweetMessageList__message'
    );
    let startPageX = 0;
    let tempPageX = 0;
    let lastPageX = 0;

    // Sweeet Message List 가로 스크롤
    sweetMessageList_message.onselectstart = new Function('return false');
    sweetMessageList_message.addEventListener('mousedown', (event) => {
      startPageX = event.pageX;
      //   console.log(`mousedown : ${startPageX}`);

      event.target
        .closest('.sweetMessageList__message')
        .classList.add('mousedown');
    });
    sweetMessageList_message.addEventListener('mouseover', (event) => {
      if (
        event.target
          .closest('.sweetMessageList__message')
          .classList.contains('mousedown')
      ) {
        if (startPageX > event.pageX) {
          tempPageX = Math.abs(startPageX - event.pageX) + lastPageX;
        } else {
          tempPageX = lastPageX - Math.abs(startPageX - event.pageX);
        }

        // console.log(
        //   `${startPageX} / ${event.pageX} / ${lastPageX} // ${tempPageX}`
        // );

        sweetMessageList_message.scrollTo({
          top: 0,
          left: tempPageX,
          behavior: 'smooth',
        });
      }
    });
    sweetMessageList_message.addEventListener('mouseup', (event) => {
      if (
        event.target
          .closest('.sweetMessageList__message')
          .classList.contains('mousedown')
      ) {
        lastPageX = tempPageX < 0 ? 0 : tempPageX;

        event.target
          .closest('.sweetMessageList__message')
          .classList.remove('mousedown');
      }
    });
  });
  return (
    <div className="message__item">
      <div
        className="item__content"
        dangerouslySetInnerHTML={replaceContent(message.registerContent)}
      ></div>
      <div className="item__info">
        <h3 className="item__name">{message.registerName}</h3>
        <div className="item__wrap_delete">
          <button className="wrap_delete__delete">삭제</button>
        </div>
      </div>
    </div>
  );
}

function replaceContent(text) {
  return { __html: text };
}

export default SweetMessage;
