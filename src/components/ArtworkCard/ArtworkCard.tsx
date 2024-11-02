import React, { useEffect } from 'react';
import Favorite from '@svg/bookmark.svg';
import DefaultArtwork from '@svg/default-artwork.svg';
import { CardSize } from '@models/enums/cardSize.enum';
import './ArtworkCard.scss';
import { getImageUrl } from '@utils/getImageUrl';

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
  const [imageSrc, setImageSrc] = React.useState<string>(DefaultArtwork);

  useEffect(() => {
    getImageUrl(imageId).then((url) => {
      const src: string = url ? url : DefaultArtwork;
      setImageSrc(src);
    });
  }, [imageId]);

  return (
    <div className="artwork-card">
      <img
        src={imageSrc}
        className={`artwork-card__image ${size}`}
        alt={title}
      />
      <div className="artwork-card__info">
        <p className="artwork-card__info__title">{title}</p>
        <p className="artwork-card__info__author">{author}</p>
        <p className="artwork-card__info__description">
          {publicDomain ? 'Public' : 'Not public'}
        </p>
      </div>
      <div className={`artwork-card__favorite ${favorite ? 'active' : ''}`}>
        <img src={Favorite} alt="favorite" />
      </div>
    </div>
  );
};

export default ArtworkCard;
