import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchPaintingById } from '@api/fetchPaintings';
import ArtworkOverview from '@components/ArtworkOverview';
import BackButton from '@components/BackButton';
import FavoriteIcon from '@components/FavoriteIcon';
import Loader from '@components/Loader';
import { STATIC_TEXTS } from '@constants/staticTexts';
import { useFavorites } from '@hooks/useSessionStorage';
import { Painting } from '@models/interfaces/painting.interface';
import DefaultArtwork from '@svg/default-artwork.svg';
import { getImageUrl } from '@utils/getImageUrl';

import {
  FavoriteWrapper,
  ImageWrapper,
  PaintingContainer,
  PaintingImage,
} from './styled';

const PaintingInfo: React.FC = () => {
  const { id } = useParams();
  const [favorites, toggleFavoriteInStorage] = useFavorites();
  const [painting, setPainting] = useState<Painting>();
  const [imageSrc, setImageSrc] = useState<string>(DefaultArtwork);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchPaintingById(id)
        .then((data: Painting) => {
          setPainting(data);
          const imageId: string = data.image_id;
          getImageUrl(imageId).then((url) => {
            const src: string = url ? url : DefaultArtwork;
            setImageSrc(src);
          });
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  return (
    <PaintingContainer>
      <BackButton />
      {loading ? (
        <Loader />
      ) : (
        <>
          <ImageWrapper>
            <PaintingImage
              src={imageSrc}
              alt={painting?.title || STATIC_TEXTS.paintingInfo.notFound}
            />
            <FavoriteWrapper>
              <FavoriteIcon
                active={favorites.includes(Number(id))}
                toggleActive={() => toggleFavoriteInStorage(Number(id))}
              />
            </FavoriteWrapper>
          </ImageWrapper>
          {painting && (
            <ArtworkOverview
              title={painting.title}
              artist_display={painting.artist_display}
              date_display={painting.date_display}
              dimensions={painting.dimensions}
              credit_line={painting.credit_line}
              is_public_domain={painting.is_public_domain}
            />
          )}
        </>
      )}
    </PaintingContainer>
  );
};

export default PaintingInfo;
