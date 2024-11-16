import theme from '@styles/theme';
import styled from 'styled-components';

const ContentWrapper = styled.main`
  min-height: calc(100vh - 370px);

  max-width: calc(${theme.breakpoints.large} - ${theme.globalPadding} * 2);
  margin: 100px auto;

  @media screen and (max-width: ${theme.breakpoints.large}) {
    max-width: calc(${theme.breakpoints.medium} - ${theme.globalPadding} * 2);
  }

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    max-width: calc(100vw - ${theme.globalPadding} * 2);
  }

  @media screen and (max-width: ${theme.breakpoints.small}) {
    min-height: calc(100vh - 250px);
    margin: 60px auto;
  }
`;

export { ContentWrapper };
