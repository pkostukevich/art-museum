import React, { useEffect, useState } from 'react';
import Bookmark from '@svg/bookmark.svg';
import DefaultArtwork from '@svg/default-artwork.svg';
import { useParams } from 'react-router-dom';
import { Painting } from '@models/interfaces/painting.interface';
import { fetchPaintingById } from '@api/fetchPaintings';
import { getImageUrl } from '@utils/getImageUrl';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import DescriptionItem from '@components/DescriptionItem/DescriptionItem';

const PaintingInfo: React.FC = () => {
  const { id } = useParams();
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
  });

  return (
    <div className="painting">
      <div className="painting__image">
        <img src={imageSrc} alt="" />
        <img src={Bookmark} alt="favorite" />
      </div>
      {painting && (
        <div className="painting__info">
          <div>
            <SectionTitle title={painting.title} />
            <p>{painting.artist_display}</p>
            <p></p>
          </div>
          <div>
            <SectionTitle title="Overwiev" />
            <DescriptionItem
              category="Artist nationality:"
              value={painting.artist_display}
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
