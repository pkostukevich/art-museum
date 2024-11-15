import theme from '@styles/theme';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 127px;
  width: 100%;
  background: linear-gradient(90deg, #343333 17%, #484848 59%, #282828 99%);

  @media screen and (max-width: ${theme.breakpoints.small}) {
    height: 96px;
  }
`;

const HeaderWrapper = styled.div`
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
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media screen and (max-width: ${theme.breakpoints.small}) {
    display: none;
    background: linear-gradient(90deg, #343333 17%, #484848 59%, #282828 99%);
    padding: 10px;
    position: absolute;
    top: 92px;
    left: 0;
    width: 100%;

    ${({ isOpen }) =>
      isOpen &&
      `display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;`}
`;

const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: ${theme.breakpoints.small}) {
    display: block;
  }
`;

const BurgerLine = styled.div<{ isOpen: boolean }>`
  width: 25px;
  height: 2px;
  background-color: ${theme.colors.white};
  margin: 4px 0;
`;

export { BurgerLine, BurgerMenu, HeaderContainer, HeaderWrapper, Nav };
