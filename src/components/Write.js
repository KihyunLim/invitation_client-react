import React from 'react';
import axios from 'axios';

function Write({ userId, invSeq }) {
  const writeMessage = () => {
    const registerName = document.querySelector('#registerName').value;
    const registerPassword = document.querySelector('#registerPassword').value;
    const registerContent = document.querySelector('#registerContent').value;

    registerSweetMessage({
      id: userId,
      invSeq: invSeq,
      registerName: registerName,
      registerPassword: registerPassword,
      registerContent: registerContent.replace(/\n/g, '<br />'),
    });
  };

  const registerSweetMessage = async (data) => {
    await axios
      .post(
        'http://localhost:8980/admin/invitation/registerSweetMessage.do',
        data
      )
      .then((res) => {
        // 일단 새로고침으로 하고 리덕스 배우면 그때 추가 수정하는 거로
        console.log(res);
        window.location.reload();
      })
      .catch((res) => {
        console.log(res.message);
      });
  };

  return (
    <section id="sweetMessageWrite">
      <h1 className="sweetMessageWrite__title">Write</h1>
      <div className="sweetMessageWrite__form">
        <div className="form_wrap">
          <input
            type="text"
            className="form__name"
            id="registerName"
            placeholder="이름"
          />
          <input
            type="password"
            className="form__password"
            id="registerPassword"
            placeholder="비밀번호"
          />
          <textarea
            className="form__content"
            id="registerContent"
            placeholder="내용을 입력해주세요."
          ></textarea>
          <button className="form__writeMessage" onClick={writeMessage}>
            등록
          </button>
        </div>
      </div>
    </section>
  );
}

export default Write;
