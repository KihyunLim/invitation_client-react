import React from 'react';

function BrideGroom({
  mainInfo: {
    nameGroom,
    nameBride,
    fullNameGroom,
    fullNameBride,
    contentGroom,
    contentBride,
  },
}) {
  return (
    <section id="brideGroom">
      <div className="brideGroom__topBackground"></div>
      <div className="brideGroom__bottomBackground"></div>
      <div className="brideGroom__container">
        <h1 className="container__title">Bride &amp; Groom</h1>
        <div className="container__info">
          <div className="info__item">
            <div className="item__image">
              <img
                src={fullNameGroom}
                onError={(e) => {
                  e.target.src = 'common/imgs/groom.jpg';
                }}
                alt="groom image"
              />
            </div>
            <div className="item__content">
              <h2 className="content__name">{nameGroom}</h2>
              <p
                className="content__introduce"
                dangerouslySetInnerHTML={replaceContent(contentGroom)}
              ></p>
            </div>
          </div>
          <div className="info__item">
            <div className="item__image">
              <img
                src={fullNameBride}
                onError={(e) => {
                  e.target.src = 'common/imgs/bride.jpg';
                }}
                alt="bride image"
              />
            </div>
            <div className="item__content">
              <h2 className="content__name">{nameBride}</h2>
              <p
                className="content__introduce"
                dangerouslySetInnerHTML={replaceContent(contentBride)}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function replaceContent(text) {
  return { __html: text };
}

export default BrideGroom;
