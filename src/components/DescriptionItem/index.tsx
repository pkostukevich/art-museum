import React from 'react';

import './DescriptionItem.scss';

type DescriptionItemProps = {
  category?: string;
  value?: string;
};

const DescriptionItem: React.FC<DescriptionItemProps> = ({
  category,
  value,
}) => {
  return (
    <div className="description-item">
      <span className="description-item__category">{category}</span>
      <span className="description-item__value">{value}</span>
    </div>
  );
};

export default DescriptionItem;
