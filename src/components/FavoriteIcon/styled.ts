import theme from '@styles/theme';
import styled from 'styled-components';

export const IconWrapper = styled.div<{ active: string }>`
  border-radius: 50%;
  background-color: ${({ active }) =>
    active === 'true'
      ? theme.colors.transparentOrange
      : theme.colors.lightGrey};
  height: 59px;
  width: 59px;
  padding: 17px;
  box-sizing: border-box;
`;
