import theme from '@styles/theme';
import styled from 'styled-components';

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    gap: 48px;
  }
`;

const ArtistInfo = styled.p`
  font-size: ${theme.fonts.sizes.l};
  font-weight: ${theme.fonts.weights.regular};
  color: ${theme.colors.ocher};
  margin-bottom: 16px;
`;

const DateInfo = styled.p`
  font-size: ${theme.fonts.sizes.xs};
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.grey};
`;

export { ArtistInfo, DateInfo, OverviewContainer };
