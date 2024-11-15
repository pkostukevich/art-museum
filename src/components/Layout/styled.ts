import theme from '@styles/theme';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  background-color: ${theme.colors.lightGrey};
`;

const ContentWrapper = styled.div`
  min-height: calc(100vh - 370px);

  max-width: calc(${theme.breakpoints.large} - ${theme.globalPadding} * 2);
  margin: auto;

  @media screen and (max-width: ${theme.breakpoints.large}) {
    max-width: calc(${theme.breakpoints.medium} - ${theme.globalPadding} * 2);
  }

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    max-width: calc(100vw - ${theme.globalPadding} * 2);
  }

  @media screen and (max-width: ${theme.breakpoints.small}) {
    min-height: calc(100vh - 250px);
  }
`;

export { ContentWrapper, LayoutContainer };
