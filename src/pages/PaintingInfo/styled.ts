import theme from '@styles/theme';
import styled from 'styled-components';

const PaintingContainer = styled.div`
  height: 570px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 72px;
  margin: 120px auto;
  position: relative;

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    height: unset;
    flex-direction: column;
    gap: 48px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const PaintingImage = styled.img`
  width: 500px;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    width: 100%;
  }
`;

const FavoriteWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 2;
`;

export { FavoriteWrapper, ImageWrapper, PaintingContainer, PaintingImage };
