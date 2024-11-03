import React from 'react';
import './Header.scss';
import NavItem from './NavItem/NavItem';
import Home from '@svg/navigation/home.svg';
import Favourites from '@svg/navigation/favorites.svg';
import MuseumLogo from '@svg/museum-logo-light.svg';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <img src={MuseumLogo} alt="Museum of Art logo" />
        <div>
          <nav className="header__nav">
            <NavItem path="/" icon={Home} label="Home" />
            <NavItem
              path="/favorites"
              icon={Favourites}
              label="Your favorites"
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
