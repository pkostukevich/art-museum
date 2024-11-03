import React from 'react';

type DescriptionItemProps = {
  category?: string;
  value?: string;
};

const DescriptionItem: React.FC<DescriptionItemProps> = ({
  category,
  value,
}) => {
  return (
    <div>
      <span>{category}</span>
      <span>{value}</span>
    </div>
  );
};

export default DescriptionItem;
