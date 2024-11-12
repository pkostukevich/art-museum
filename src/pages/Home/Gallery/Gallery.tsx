import './Gallery.scss';

import ArtworkCard from '@components/ArtworkCard/ArtworkCard';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import { usePagination } from '@hooks/usePagination';
import { useFavorites } from '@hooks/useSessionStorage';
import { CardSize } from '@models/enums/cardSize.enum';
import { Painting } from '@models/interfaces/painting.interface';
import PaginationBar from '@pages/Home/Gallery/PaginationBar/PaginationBar';
import { generatePageNumbers } from '@utils/generatePageNumbers';
import { retrieveArtistName } from '@utils/retrieveArtistInfo';
import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

type GalleryProps = {
  data: Painting[];
  itemsPerPage: number;
};

const Gallery: React.FC<GalleryProps> = ({ data, itemsPerPage }) => {
  const navigate: NavigateFunction = useNavigate();
  const [favorites, toggleFavoriteInStorage] = useFavorites();
  const { getCurrentData, currentPage, maxPage, next, prev, setPage } =
    usePagination(data, itemsPerPage);
  const pages: number[] = generatePageNumbers(currentPage, maxPage);
  const paintings: Painting[] = getCurrentData();

  return (
    <>
      <SectionTitle
        title="Our special gallery"
        note="Topics for you"
        align="center"
      />
      <div className="gallery">
        {paintings.length === 0 ? (
          <div className="gallery__empty-result">No paintings found</div>
        ) : (
          paintings.map((item) => (
            <ArtworkCard
              key={item.id}
              title={item.title}
              author={retrieveArtistName(item.artist_display)}
              publicDomain={item.is_public_domain}
              imageId={item.image_id}
              size={CardSize.LARGE}
              favorite={favorites.includes(item.id)}
              toggleFavorite={() => toggleFavoriteInStorage(item.id)()}
              handleClick={() => navigate(`/paintings/${item.id}`)}
            />
          ))
        )}
      </div>
      <PaginationBar
        currentPage={currentPage}
        maxPage={maxPage}
        onPrev={prev}
        onNext={next}
        setPage={setPage}
        pages={pages}
      />
    </>
  );
};

export default Gallery;
