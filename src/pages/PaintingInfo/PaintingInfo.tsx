import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchPaintingById } from '@api/fetchPaintings';
import BackButton from '@components/BackButton/BackButton';
import DescriptionItem from '@components/DescriptionItem/DescriptionItem';
import FavoriteIcon from '@components/FavoriteIcon/FavoriteIcon';
import Loader from '@components/Loader/Loader';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import { useFavorites } from '@hooks/useSessionStorage';
import { Painting } from '@models/interfaces/painting.interface';
import DefaultArtwork from '@svg/default-artwork.svg';
import { getImageUrl } from '@utils/getImageUrl';
import {
  retrieveArtistName,
  retrieveArtistNationality,
} from '@utils/retrieveArtistInfo';

import './PaintingInfo.scss';

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
    <div className="painting">
      <BackButton />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="painting__image-wrapper">
            <img
              src={imageSrc}
              alt={painting?.title || 'painting not found'}
              className="painting__image"
            />
            <div className="painting__favorite">
              <FavoriteIcon
                active={favorites.includes(Number(id))}
                toggleActive={() => toggleFavoriteInStorage(Number(id))()}
              />
            </div>
          </div>
          {painting && (
            <div className="painting__info">
              <div>
                <SectionTitle title={painting.title} align="left" />
                <p className="painting__info__artist">
                  {retrieveArtistName(painting.artist_display)}
                </p>
                <p className="painting__info__date">{painting.date_display}</p>
              </div>
              <div>
                <SectionTitle title="Overwiev" align="left" />
                <DescriptionItem
                  category="Artist nationality:"
                  value={retrieveArtistNationality(painting.artist_display)}
                />
                <DescriptionItem
                  category="Dimensions: Sheet:"
                  value={painting.dimensions}
                />
                <DescriptionItem
                  category="Credit Line:"
                  value={painting.credit_line}
                />
                <DescriptionItem
                  value={painting.is_public_domain ? 'Public' : 'Not public'}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PaintingInfo;
