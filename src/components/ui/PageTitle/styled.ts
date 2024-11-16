import theme from '@styles/theme';
import styled from 'styled-components';

const Title = styled.h1`
  max-width: 680px;
  margin: 96px auto;
  color: ${theme.colors.grey};
  font-size: ${theme.fonts.sizes.xxl};
  font-weight: ${theme.fonts.weights.bold};
  line-height: 80px;
  text-transform: capitalize;
  text-align: center;

  @media screen and (max-width: ${theme.breakpoints.small}) {
    width: 300px;
    margin: 48px auto;
    font-size: ${theme.fonts.sizes.xl};
    line-height: 40px;
  }
`;

const HighlightedText = styled.span`
  color: ${theme.colors.orange};
`;

export { HighlightedText, Title };
