import theme from '@styles/theme';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  width: fit-content;
  margin: auto;

  @media screen and (max-width: ${theme.breakpoints.large}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }

  @media screen and (max-width: ${theme.breakpoints.small}) {
    width: 100%;
  }
`;

const EmptyResult = styled.div`
  text-align: center;
  width: 100%;
`;

export { EmptyResult, GridContainer };
