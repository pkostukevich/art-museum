import React, { useCallback, useRef, useState } from 'react';
import { Location, useLocation } from 'react-router-dom';

import NavItem from '@components/ui/NavItem';
import { ROUTES } from '@constants/routes';
import useClickOutside from '@hooks/useClickOutside';
import { NavItemInterface } from '@models/interfaces/navItem.interface';
import MuseumLogo from '@svg/museum-logo-light.svg';
import Favorites from '@svg/navigation/favorites.svg';
import Home from '@svg/navigation/home.svg';

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
  const menuRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const location: Location = useLocation();

  const toggleMenu: () => void = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  useClickOutside(menuRef, () => setMenuOpen(false));

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo src={MuseumLogo} alt="Museum of Art logo" />
        <div ref={menuRef}>
          <Nav open={isMenuOpen}>
            {navItems
              .filter((navItem) => navItem.path !== location.pathname)
              .map(({ path, icon, label }, index) => (
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
            <BurgerLine open={isMenuOpen} />
            <BurgerLine open={isMenuOpen} />
            <BurgerLine open={isMenuOpen} />
          </BurgerMenu>
        </div>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
