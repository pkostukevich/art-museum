import React, { useState } from 'react';

import MuseumLogo from '@svg/museum-logo-light.svg';
import Favorites from '@svg/navigation/favorites.svg';
import Home from '@svg/navigation/home.svg';

import NavItem from './NavItem/NavItem';

import './Header.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu: () => void = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header__wrapper content__wrapper">
        <img
          src={MuseumLogo}
          alt="Museum of Art logo"
          className="header__logo"
        />
        <div>
          <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
            <NavItem
              path="/"
              icon={Home}
              label="Home"
              handleClick={toggleMenu}
            />
            <NavItem
              path="/favorites"
              icon={Favorites}
              label="Your favorites"
              handleClick={toggleMenu}
            />
          </nav>
          <div className="header__burger-menu" onClick={toggleMenu}>
            <div
              className={`header__burger-menu__line ${isMenuOpen ? 'open' : ''}`}
            ></div>
            <div
              className={`header__burger-menu__line ${isMenuOpen ? 'open' : ''}`}
            ></div>
            <div
              className={`header__burger-menu__line ${isMenuOpen ? 'open' : ''}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
