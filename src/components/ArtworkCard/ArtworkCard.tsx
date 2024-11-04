import React, { useEffect } from 'react';
import DefaultArtwork from '@svg/default-artwork.svg';
import { CardSize } from '@models/enums/cardSize.enum';
import './ArtworkCard.scss';
import { getImageUrl } from '@utils/getImageUrl';
import FavoriteIcon from '@components/FavoriteIcon/FavoriteIcon';

type ArtworkCardProps = {
  title: string;
  author: string;
  publicDomain: boolean;
  imageId: string;
  size: CardSize;
  favorite: boolean;
  toggleFavorite: () => void;
  handleClick?: () => void;
};

const ArtworkCard: React.FC<ArtworkCardProps> = ({
  title,
  author,
  publicDomain,
  imageId,
  size,
  favorite,
  toggleFavorite,
  handleClick,
}) => {
  const [imageSrc, setImageSrc] = React.useState<string>(DefaultArtwork);

  useEffect(() => {
    getImageUrl(imageId).then((url) => {
      const src: string = url ? url : DefaultArtwork;
      setImageSrc(src);
    });
  }, [imageId]);

  return (
    <div className={`artwork-card__wrapper ${size}`} onClick={handleClick}>
      <div className="artwork-card">
        <img src={imageSrc} className="artwork-card__image" alt={title} />
        <div className="artwork-card__info">
          <div className="column">
            <p className="artwork-card__info__title">{title}</p>
            <p className="artwork-card__info__author">{author}</p>
            <p className="artwork-card__info__description">
              {publicDomain ? 'Public' : 'Not public'}
            </p>
          </div>
          <FavoriteIcon
            active={favorite}
            toggleActive={(e: React.MouseEvent) => {
              e.stopPropagation();
              toggleFavorite();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
