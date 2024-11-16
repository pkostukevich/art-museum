import React, { useCallback, useState } from 'react';

import { ROUTES } from '@constants/routes';
import { NavItemInterface } from '@models/interfaces/navItem.interface';
import MuseumLogo from '@svg/museum-logo-light.svg';
import Favorites from '@svg/navigation/favorites.svg';
import Home from '@svg/navigation/home.svg';

import NavItem from '../ui/NavItem';
import {
  BurgerLine,
  BurgerMenu,
  HeaderContainer,
  HeaderWrapper,
  Logo,
  Nav,
} from './styled';

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

  const toggleMenu: () => void = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo src={MuseumLogo} alt="Museum of Art logo" />
        <div>
          <Nav isOpen={isMenuOpen}>
            {navItems.map(({ path, icon, label }, index) => (
              <NavItem
                key={index}
                path={path}
                icon={icon}
                label={label}
                handleClick={toggleMenu}
              />
            ))}
          </Nav>
          <BurgerMenu onClick={toggleMenu} aria-expanded={isMenuOpen}>
            <BurgerLine isOpen={isMenuOpen} />
            <BurgerLine isOpen={isMenuOpen} />
            <BurgerLine isOpen={isMenuOpen} />
          </BurgerMenu>
        </div>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
