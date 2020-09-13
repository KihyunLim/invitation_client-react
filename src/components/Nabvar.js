import React from 'react';

function Navbar() {
  return (
    <nav id='navbar'>
      <div className='navbar__project'>
        <a href='#'>Invitation</a>
      </div>
      <ul className='side__menu'>
        <li className='menu__item' data-link='#home'>
          Home
        </li>
        <li className='menu__item' data-link='#main'>
          Main
        </li>
        <li className='menu__item' data-link='#brideGroom'>
          Bride &amp; Groom
        </li>
        <li className='menu__item' data-link='#loveStory'>
          Love Story
        </li>
        <li className='menu__item' data-link='#whenWhere'>
          When &amp; Where
        </li>
        <li className='menu__item' data-link='#gallery'>
          Gallery
        </li>
        <li className='menu__item' data-link='#SweetMessageList'>
          Sweet Message
        </li>
      </ul>
      <button className='side__toggle-btn'>
        <i className='fas fa-bars'></i>
      </button>
    </nav>
  );
}

export default Navbar;
