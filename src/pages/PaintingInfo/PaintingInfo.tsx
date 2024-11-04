import React, { useEffect, useState } from 'react';
import DefaultArtwork from '@svg/default-artwork.svg';
import { useParams } from 'react-router-dom';
import { Painting } from '@models/interfaces/painting.interface';
import { fetchPaintingById } from '@api/fetchPaintings';
import { getImageUrl } from '@utils/getImageUrl';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import DescriptionItem from '@components/DescriptionItem/DescriptionItem';
import './PaintingInfo.scss';
import FavoriteIcon from '@components/FavoriteIcon/FavoriteIcon';
import {
  retrieveArtistName,
  retrieveArtistNationality,
} from '@utils/retrieveArtistInfo';
import BackButton from '@components/BackButton/BackButton';
import { useFavorites } from '@hooks/useSessionStorage';

const PaintingInfo: React.FC = () => {
  const { id } = useParams();
  const [favorites, toggleFavoriteInStorage] = useFavorites();
  const [painting, setPainting] = useState<Painting>();
  const [imageSrc, setImageSrc] = useState<string>(DefaultArtwork);

  useEffect(() => {
    if (id) {
      fetchPaintingById(id).then((data: Painting) => {
        setPainting(data);

        const imageId: string = data.image_id;
        getImageUrl(imageId).then((url) => {
          const src: string = url ? url : DefaultArtwork;
          setImageSrc(src);
        });
      });
    }
  }, [id]);

  return (
    <div className="painting">
      <BackButton />
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
    </div>
  );
};

export default PaintingInfo;
