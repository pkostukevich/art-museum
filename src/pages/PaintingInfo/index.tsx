import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchPaintingById } from '@api/fetchPaintings';
import ArtworkOverview from '@components/ArtworkOverview';
import ErrorMessage from '@components/ErrorBoundary/ErrorMessage';
import FavoriteIcon from '@components/FavoriteIcon';
import BackButton from '@components/ui/BackButton';
import Loader from '@components/ui/Loader';
import { STATIC_TEXTS } from '@constants/staticTexts';
import { useFavorites } from '@hooks/useSessionStorage';
import { Painting } from '@models/interfaces/painting.interface';
import { Section } from '@styles/common';
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      setError(null);
      fetchPaintingById(id)
        .then((data: Painting) => {
          setPainting(data);
          const imageId: string = data.image_id;
          return getImageUrl(imageId);
        })
        .then((url) => {
          const src: string = url || DefaultArtwork;
          setImageSrc(src);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  const toggleFavorite: () => void = useCallback(() => {
    if (id) {
      toggleFavoriteInStorage(Number(id));
    }
  }, [id, toggleFavoriteInStorage]);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <Section>
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
                  toggleActive={toggleFavorite}
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
    </Section>
  );
};

export default PaintingInfo;
