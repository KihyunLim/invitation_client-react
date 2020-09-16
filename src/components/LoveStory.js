import React from 'react';

function LoveStory({ loveStory }) {
  return (
    <section id="loveStory">
      <h1 className="loveStory__title">Love Story</h1>
      <ul className="loveStory__story">
        {loveStory.map((itemStory) => (
          <ItemStory key={itemStory.orderSeq} story={itemStory} />
        ))}
      </ul>
      <div className="loveStory__bar"></div>
    </section>
  );
}

function ItemStory({
  story: { orderSeq, fullNameImg, dateStory, title, content },
}) {
  return (
    <li className="story__item">
      <div
        className="item__image"
        style={setBackground(fullNameImg, orderSeq)}
      ></div>
      <div className="item__info">
        <p className="info__date">{getFormatDate(dateStory)}</p>
        <h3 className="info__title">{title}</h3>
        <p
          className="info__content"
          dangerouslySetInnerHTML={replaceConent(content)}
        ></p>
      </div>
    </li>
  );
}

function setBackground(url, seq) {
  return {
    backgroundImage: `url(${url}), url(common/imgs/couple-${seq % 4}.jpg)`,
  };
}

function getFormatDate(date) {
  return `${date.substr(0, 4)}.${date.substr(4, 2)}.${date.substr(6, 2)}`;
}

function replaceConent(text) {
  return { __html: text };
}

export default LoveStory;
