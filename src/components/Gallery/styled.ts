import theme from '@styles/theme';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 30px auto;
  gap: 70px;
  width: fit-content;

  @media screen and (max-width: ${theme.breakpoints.large}) {
    gap: 80px;
  }

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    justify-content: center;
  }

  @media screen and (max-width: ${theme.breakpoints.small}) {
    width: 100%;
    gap: 0;
  }
`;

const EmptyResult = styled.div`
  text-align: center;
  width: 100%;
`;

export { EmptyResult, GalleryContainer };
