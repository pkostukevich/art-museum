import { CardSize } from '@models/enums/cardSize.enum';
import theme from '@styles/theme';
import styled from 'styled-components';

const Wrapper = styled.div<{ size: CardSize }>`
  position: relative;
  max-width: 415px;
  width: ${({ size }) => (size === CardSize.LARGE ? '380px' : '415px')};
  height: ${({ size }) => (size === CardSize.LARGE ? '444px' : '130px')};
  ${({ size }) =>
    size === CardSize.SMALL &&
    `
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.borderGrey};
    `}

  @media screen and (max-width: ${theme.breakpoints.small}) {
    width: 100% !important;
  }
`;

const ImageContainer = styled.div<{ src: string }>`
  width: 100%;
  height: auto;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  background-color: ${theme.colors.white};
`;

const Card = styled.div<{ size: CardSize }>`
  display: flex;
  flex-direction: ${({ size }) => (size === CardSize.LARGE ? 'column' : 'row')};
  align-items: center;
  line-height: 26.3px;
  padding: ${theme.paddings.small};
  gap: 16px;
  cursor: pointer;
  height: ${({ size }) => (size === CardSize.LARGE ? '100%' : 'auto')};

  ${ImageContainer} {
    width: ${({ size }) => (size === CardSize.LARGE ? '100%' : '80px')};
    height: ${({ size }) => (size === CardSize.LARGE ? '85%' : '80px')};
    object-fit: cover;
    position: ${({ size }) =>
      size === CardSize.LARGE ? 'absolute' : 'relative'};
    top: ${({ size }) => (size === CardSize.LARGE ? '0' : 'auto')};
    left: 0;
  }

  ${Info} {
    padding: ${({ size }) => (size === CardSize.LARGE ? '24px 32px' : '0')};
    margin: ${({ size }) => (size === CardSize.LARGE ? '0 5%' : '0')};
    position: ${({ size }) =>
      size === CardSize.LARGE ? 'absolute' : 'relative'};
    bottom: ${({ size }) => (size === CardSize.LARGE ? '0' : 'auto')};
    left: 0;
    width: 285px;
    gap: 24px;

    @media screen and (max-width: ${theme.breakpoints.medium}) {
      width: ${({ size }) =>
        size === CardSize.LARGE ? '90%' : '100% !important'};
      box-sizing: border-box;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: ${theme.colors.grey};
  font-weight: ${theme.fonts.weights.semibold};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;

  @media screen and (max-width: ${theme.breakpoints.small}) {
    width: 100px;
  }
`;

const Author = styled.p`
  color: ${theme.colors.ocher};
  font-weight: ${theme.fonts.weights.regular};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;

  @media screen and (max-width: ${theme.breakpoints.small}) {
    width: 100px;
  }
`;

const Description = styled.p`
  color: ${theme.colors.grey};
  font-weight: ${theme.fonts.weights.bold};
  margin-top: 16px;
`;

export {
  Author,
  Card,
  Column,
  Description,
  ImageContainer,
  Info,
  Title,
  Wrapper,
};
