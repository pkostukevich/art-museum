import theme from '@styles/theme';
import SearchIcon from '@svg/search.svg';
import styled from 'styled-components';

const SearchFormContainer = styled.form`
  margin: auto;
  width: 762px;
  max-width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 64px;
  border-radius: 16px;
  border: none;
  background-color: ${theme.colors.borderGrey};
  padding: 16px 64px 16px 16px;
  box-sizing: border-box;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: calc(100% - 16px) 16px;

  @media screen and (max-width: ${theme.breakpoints.small}) {
    width: 100%;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

export { ErrorMessage, SearchFormContainer, SearchInput };
