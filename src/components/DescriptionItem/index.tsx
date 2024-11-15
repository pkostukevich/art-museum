import React from 'react';

import { Category, DescriptionWrapper, Value } from './styled';

type DescriptionItemProps = {
  category?: string;
  value?: string;
};

const DescriptionItem: React.FC<DescriptionItemProps> = ({
  category,
  value,
}) => {
  return (
    <DescriptionWrapper>
      <Category>{category}</Category>
      <Value>{value}</Value>
    </DescriptionWrapper>
  );
};

export default DescriptionItem;
