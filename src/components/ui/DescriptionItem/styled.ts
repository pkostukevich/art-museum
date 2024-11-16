import theme from '@styles/theme';
import styled from 'styled-components';

const DescriptionWrapper = styled.div`
  margin-top: 16px;
  font-size: ${theme.fonts.sizes.xs};
  line-height: 20px;
`;

const Category = styled.span`
  color: ${theme.colors.ocher};
  margin-right: 4px;
`;

const Value = styled.span`
  color: ${theme.colors.grey};
`;

export { Category, DescriptionWrapper, Value };
