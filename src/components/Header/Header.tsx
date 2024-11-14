import React, { useState } from 'react';

import { ROUTES } from '@constants/routes';
import { NavItemInterface } from '@models/interfaces/navItem.interface';
import MuseumLogo from '@svg/museum-logo-light.svg';
import Favorites from '@svg/navigation/favorites.svg';
import Home from '@svg/navigation/home.svg';

import NavItem from './NavItem/NavItem';

import './Header.scss';

const navItems: NavItemInterface[] = [
  {
    path: ROUTES.HOME,
    icon: Home,
    label: 'Home',
  },
  {
    path: ROUTES.FAVORITES,
    icon: Favorites,
    label: 'Your favorites',
  },
];

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
            {navItems.map(
              ({ path, icon, label }: NavItemInterface, index: number) => (
                <NavItem
                  key={index}
                  path={path}
                  icon={icon}
                  label={label}
                  handleClick={toggleMenu}
                />
              ),
            )}
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
