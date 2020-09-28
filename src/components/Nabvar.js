import React, { useEffect } from 'react';

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

function Navbar() {
  useEffect(() => {
    const navbar = document.querySelector('#navbar');
    const home = document.querySelector('#home');
    const homeHeight = home.getBoundingClientRect().height;
    const openSideMenu = document.querySelector('.side__toggle-btn');
    const categoryList = document.querySelector('.side__menu');

    // 스크롤 시 navbar 변경
    document.addEventListener('scroll', () => {
      if (window.scrollY > homeHeight / 5) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
        navbar.classList.remove('navbar--sleep');
      }

      if (window.scrollY > homeHeight / 4) {
        navbar.classList.add('navbar--awake');
      } else {
        navbar.classList.remove('navbar--awake');

        if (navbar.classList.contains('scrolled')) {
          navbar.classList.add('navbar--sleep');
        }
      }
    });

    // navbar 카테고리 선택
    document.addEventListener('click', (event) => {
      const target = event.target;
      const link = target.dataset.link;

      if (link == null) {
        return;
      }

      categoryList.classList.remove('open');
      scrollIntoView(link);
    });

    // 사이드 메뉴 버튼 선택
    openSideMenu.addEventListener('click', (event) => {
      categoryList.classList.toggle('open');
    });
  });

  return (
    <nav id="navbar">
      <div className="navbar__project">
        <a href="#">Invitation</a>
      </div>
      <ul className="side__menu">
        <li className="menu__item" data-link="#home">
          Home
        </li>
        <li className="menu__item" data-link="#main">
          Main
        </li>
        <li className="menu__item" data-link="#brideGroom">
          Bride &amp; Groom
        </li>
        <li className="menu__item" data-link="#loveStory">
          Love Story
        </li>
        <li className="menu__item" data-link="#whenWhere">
          When &amp; Where
        </li>
        <li className="menu__item" data-link="#gallery">
          Gallery
        </li>
        <li className="menu__item" data-link="#sweetMessageWrite">
          Sweet Message
        </li>
      </ul>
      <button className="side__toggle-btn">
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
}

export default Navbar;
