import theme from '@styles/theme';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  height: 127px;
  width: 100%;
  background-color: ${theme.colors.white};

  @media screen and (max-width: ${theme.breakpoints.small}) {
    height: 96px;
  }
`;

const FooterWrapper = styled.div`
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: calc(${theme.breakpoints.large} - ${theme.globalPadding} * 2);
  margin: auto;

  @media screen and (max-width: ${theme.breakpoints.large}) {
    max-width: calc(${theme.breakpoints.medium} - ${theme.globalPadding} * 2);
  }

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    max-width: calc(100vw - ${theme.globalPadding} * 2);
  }

  @media screen and (max-width: ${theme.breakpoints.small}) {
    padding: 24px 0;

    img {
      width: 150px;
    }
  }
`;

export { FooterContainer, FooterWrapper };
