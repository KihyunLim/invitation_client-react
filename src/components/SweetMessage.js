import React, { useEffect } from 'react';
import axios from 'axios';

function SweetMessage({ sweetMessage }) {
  const filteredSweetMessage = sweetMessage.filter(
    (item) => item.isDelete === false
  );

  return (
    <section id="sweetMessageList">
      <h1 className="sweetMessageList__title">SweetMessage</h1>
      <div className="sweetMessageList__message">
        {filteredSweetMessage.map((itemSweetMessage) => (
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
  const deleteSweetMessage = async () => {
    const checkPassword = prompt('비밀번호를 입력해주세요.', '');

    if (checkPassword === message.registerPassword) {
      // const param = encodeURIComponent(`?seq=${message.seq}&isDelete=true`);
      const param = `?seq=${message.seq}&isDelete=true`;
      console.log(param);
      await axios
        .get(
          'http://localhost:8980/admin/invitation/deleteSweetMessage.do' + param
        )
        .then((res) => {
          // 일단 새로고침으로 하고 리덕스 배우면 그때 추가 수정하는 거로
          console.log(res);
          window.location.reload();
        })
        .catch((res) => {
          console.log(res.message);
        });
    } else {
      if ((checkPassword === null || checkPassword === '') === false) {
        alert('비밀번호가 일치하지 않습니다.');
      }
    }
  };

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
          <button className="wrap_delete__delete" onClick={deleteSweetMessage}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}

function replaceContent(text) {
  return { __html: text };
}

export default SweetMessage;
