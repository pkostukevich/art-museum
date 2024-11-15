import theme from '@styles/theme';
import styled from 'styled-components';

const SectionTitleWrapper = styled.div<{ align: 'center' | 'left' }>`
  max-width: 600px;
  margin: ${({ align }) => (align === 'center' ? '40px auto' : '0 0 24px 0')};
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align === 'center' ? 'center' : 'flex-start')};
`;

const Note = styled.p`
  color: ${theme.colors.ocher};
  font-size: ${theme.fonts.sizes.xs};
`;

const MainTitle = styled.p`
  color: ${theme.colors.grey};
  font-size: ${theme.fonts.sizes.xl};

  @media screen and (max-width: ${theme.breakpoints.small}) {
    font-size: ${theme.fonts.sizes.l};
  }
`;

export { MainTitle, Note, SectionTitleWrapper };
