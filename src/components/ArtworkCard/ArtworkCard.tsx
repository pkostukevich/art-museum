import { CardSize } from 'interfaces/enum/cardSize.enum';
import React from 'react';
import Favorite from '../../assets/svg/bookmark.svg';
import './ArtworkCard.scss';

type ArtworkCardProps = {
  title: string;
  author: string;
  publicDomain: boolean;
  imageId: string;
  size: CardSize;
  favorite?: boolean;
};

const ArtworkCard: React.FC<ArtworkCardProps> = ({
  title,
  author,
  publicDomain,
  imageId,
  size,
  favorite = false,
}) => {
  return (
    <div className="artwork-card">
      <img
        src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
        className={`artwork-card__image ${size}`}
      />
      <div className="artwork-card__info">
        <p className="artwork-card__info__title">{title}</p>
        <p className="artwork-card__info__author">{author}</p>
        <p className="artwork-card__info__description">
          {publicDomain ? 'Public' : 'Not public'}
        </p>
      </div>
      <div className={`artwork-card__favorite ${favorite ? 'active' : ''}`}>
        <img src={Favorite} />
      </div>
    </div>
  );
};

export default ArtworkCard;
