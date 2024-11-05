import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.scss';

type NavItemProps = {
  path: string;
  icon: string;
  label: string;
  handleClick?: () => void;
};

const NavItem: React.FC<NavItemProps> = ({
  path,
  icon,
  label,
  handleClick,
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? 'hidden' : '')}
      onClick={handleClick}
    >
      <img src={icon} alt={label} />
      <span>{label}</span>
    </NavLink>
  );
};

export default NavItem;
