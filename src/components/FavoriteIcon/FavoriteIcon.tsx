import './FavoriteIcon.scss';

import Favorite from '@svg/bookmark.svg';
import React from 'react';

type FavoriteIconProps = {
  active: boolean;
  toggleActive: (e: React.MouseEvent) => void;
};

const FavoriteIcon: React.FC<FavoriteIconProps> = ({
  active,
  toggleActive,
}) => {
  return (
    <div
      className={`favorite-icon ${active ? 'favorite-icon--active' : ''}`}
      onClick={toggleActive}
    >
      <img src={Favorite} alt="favorite" />
    </div>
  );
};

export default FavoriteIcon;
