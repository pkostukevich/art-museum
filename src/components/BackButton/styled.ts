import theme from '@styles/theme';
import styled from 'styled-components';

export const BackButtonWrapper = styled.div`
  position: absolute;
  top: -40px;
  left: 0;
  gap: 4px;
  cursor: pointer;
  color: ${theme.colors.grey};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
