import React from 'react';
import Favorite from '@svg/bookmark.svg';
import './FavoriteIcon.scss';

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
