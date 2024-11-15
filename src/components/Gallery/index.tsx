import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import ArtworkCard from '@components/ArtworkCard';
import PaginationBar from '@components/Gallery/PaginationBar';
import SectionTitle from '@components/SectionTitle';
import { ROUTES } from '@constants/routes';
import { usePagination } from '@hooks/usePagination';
import { useFavorites } from '@hooks/useSessionStorage';
import { CardSize } from '@models/enums/cardSize.enum';
import { Painting } from '@models/interfaces/painting.interface';
import { generatePageNumbers } from '@utils/generatePageNumbers';
import { retrieveArtistName } from '@utils/retrieveArtistInfo';

import { EmptyResult, GalleryContainer } from './styled';

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

  const handleCardClick = (id: number): void => {
    navigate(`${ROUTES.PAINTING_INFO}/${id}`);
  };

  return (
    <>
      <SectionTitle
        title="Our special gallery"
        note="Topics for you"
        align="center"
      />
      <GalleryContainer>
        {paintings.length === 0 ? (
          <EmptyResult>No paintings found</EmptyResult>
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
              handleClick={() => handleCardClick(item.id)}
            />
          ))
        )}
      </GalleryContainer>
      <PaginationBar
        currentPage={currentPage}
        minPage={1}
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
