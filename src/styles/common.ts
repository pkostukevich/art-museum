import styled from 'styled-components';

import theme from './theme';

export const Section = styled.div`
  margin: 112px 0;

  @media screen and (max-width: ${theme.breakpoints.small}) {
    margin: 60px 0;
  }
`;
