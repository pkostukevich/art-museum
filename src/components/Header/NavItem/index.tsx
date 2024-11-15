import React from 'react';

import { StyledNavLink } from './styled';

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
    <StyledNavLink
      to={path}
      hidden={false} // TODO
      onClick={handleClick}
    >
      <img src={icon} alt={label} />
      <span>{label}</span>
    </StyledNavLink>
  );
};

export default NavItem;
