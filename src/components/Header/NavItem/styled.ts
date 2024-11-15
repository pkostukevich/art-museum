import { NavLink } from 'react-router-dom';

import theme from '@styles/theme';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)<{ hidden: boolean }>`
  text-decoration: none !important;
  color: white !important;
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  font-size: ${theme.fonts.sizes.xs};
  font-weight: ${theme.fonts.weights.regular};

  ${({ hidden }) =>
    hidden &&
    `
    display: none;
`}
`;
