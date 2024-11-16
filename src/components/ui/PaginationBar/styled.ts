import styled from 'styled-components';
import theme from '@styles/theme';

export const PaginationBarWrapper = styled.div`
  text-align: right;
  height: 30px;

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    text-align: center;
  }
`;
