import theme from '@styles/theme';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 127px;
  width: 100%;
  background: linear-gradient(90deg, #343333 17%, #484848 59%, #282828 99%);

  @media screen and (max-width: ${theme.breakpoints.small}) {
    height: 96px;
  }
`;

const HeaderWrapper = styled.div`
  padding: ${theme.paddings.medium} 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: calc(${theme.breakpoints.large} - ${theme.paddings.global} * 2);
  margin: auto;

  @media screen and (max-width: ${theme.breakpoints.large}) {
    max-width: calc(${theme.breakpoints.medium} - ${theme.paddings.global} * 2);
  }

  @media screen and (max-width: ${theme.breakpoints.medium}) {
    max-width: calc(100vw - ${theme.paddings.global} * 2);
  }

  @media screen and (max-width: ${theme.breakpoints.small}) {
    padding: ${theme.paddings.regular} 0;
  }
`;

const Nav = styled.nav<{ open: boolean }>`
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
    right: 0;

    ${({ open }) =>
      open &&
      `display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;`}
`;

const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: ${theme.breakpoints.small}) {
    display: block;
  }
`;

const BurgerLine = styled.div<{ open: boolean }>`
  width: 25px;
  height: 2px;
  background-color: ${theme.colors.white};
  margin: 4px 0;
`;

const Logo = styled.img`
  @media screen and (max-width: ${theme.breakpoints.small}) {
    width: 150px;
  }
`;

export { BurgerLine, BurgerMenu, HeaderContainer, HeaderWrapper, Nav, Logo };
