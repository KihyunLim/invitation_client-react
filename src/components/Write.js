import React from 'react';

function Write() {
  return (
    <section id='sweetMessageWrite'>
      <h1 className='sweetMessageWrite__title'>Write</h1>
      <div className='sweetMessageWrite__form'>
        <div className='form_wrap'>
          <input type='text' className='form__name' placeholder='이름' />
          <input
            type='password'
            className='form__password'
            placeholder='비밀번호'
          />
          <textarea
            className='form__content'
            placeholder='내용을 입력해주세요.'
          ></textarea>
          <button className='form__writeMessage'>등록</button>
        </div>
      </div>
    </section>
  );
}

export default Write;
