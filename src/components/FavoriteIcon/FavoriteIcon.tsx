import React from 'react';
import Favorite from '@svg/bookmark.svg';
import './FavoriteIcon.scss';

type FavoriteIconProps = {
  active?: boolean;
};

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ active }) => {
  return (
    <div className={`favorite-icon ${active ? 'favorite-icon--active' : ''}`}>
      <img src={Favorite} alt="favorite" />
    </div>
  );
};

export default FavoriteIcon;
