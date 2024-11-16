import theme from '@styles/theme';
import styled from 'styled-components';

export const Button = styled.button<{ active: boolean; hidden: boolean }>`
  width: 30px;
  height: 30px;
  color: ${theme.colors.grey};
  font-size: ${theme.fonts.sizes.m};
  font-weight: ${theme.fonts.weights.light};
  line-height: 24px;
  border: none;
  border-radius: 4px;
  background-color: ${theme.colors.transparent};
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
    color: ${theme.colors.white}; 
    font-weight: ${theme.fonts.weights.semibold}; 
    background-color: ${theme.colors.orange};
  `}

  ${({ hidden }) =>
    hidden &&
    `
    visibility: hidden;
    cursor: none;
  `}
`;
