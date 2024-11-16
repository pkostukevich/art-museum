import React, { useEffect, useState } from 'react';

import ErrorMessage from '@components/ErrorBoundary/ErrorMessage';
import FavoriteIcon from '@components/FavoriteIcon';
import { STATIC_TEXTS } from '@constants/staticTexts';
import { CardSize } from '@models/enums/cardSize.enum';
import DefaultArtwork from '@svg/default-artwork.svg';
import { getImageUrl } from '@utils/getImageUrl';

import {
  Author,
  Card,
  Column,
  Description,
  ImageContainer,
  Info,
  Title,
  Wrapper,
} from './styled';

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
  const [imageSrc, setImageSrc] = useState<string>(DefaultArtwork);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    getImageUrl(imageId)
      .then((url) => {
        const src: string = url ? url : DefaultArtwork;
        setImageSrc(src);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [imageId]);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <Wrapper size={size} onClick={handleClick}>
      <Card size={size}>
        <ImageContainer src={imageSrc} />
        <Info>
          <Column>
            <Title>{title}</Title>
            <Author>{author}</Author>
            <Description>
              {publicDomain
                ? STATIC_TEXTS.artworkCard.publicDomain
                : STATIC_TEXTS.artworkCard.notPublicDomain}
            </Description>
          </Column>
          <FavoriteIcon
            active={favorite}
            toggleActive={(e: React.MouseEvent) => {
              e.stopPropagation();
              toggleFavorite();
            }}
          />
        </Info>
      </Card>
    </Wrapper>
  );
};

export default ArtworkCard;
