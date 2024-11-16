import React from 'react';

import Favorite from '@svg/bookmark.svg';

import { IconWrapper } from './styled';

type FavoriteIconProps = {
  active: boolean;
  toggleActive: (e: React.MouseEvent) => void;
};

const FavoriteIcon: React.FC<FavoriteIconProps> = ({
  active,
  toggleActive,
}) => {
  return (
    <IconWrapper active={String(active)} onClick={toggleActive}>
      <img src={Favorite} alt="favorite" />
    </IconWrapper>
  );
};

export default React.memo(FavoriteIcon);
