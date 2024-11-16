import React, { useCallback, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import ArtworkCard from '@components/ArtworkCard';
import ErrorMessage from '@components/ErrorBoundary/ErrorMessage';
import Loader from '@components/ui/Loader';
import PaginationBar from '@components/ui/PaginationBar';
import SectionTitle from '@components/ui/SectionTitle';
import { ROUTES } from '@constants/routes';
import useFetchPaintings from '@hooks/useFetchPaintings';
import { useFavorites } from '@hooks/useSessionStorage';
import { CardSize } from '@models/enums/cardSize.enum';
import { Painting } from '@models/interfaces/painting.interface';
import { generatePageNumbers } from '@utils/generatePageNumbers';
import { retrieveArtistName } from '@utils/retrieveArtistInfo';

import { EmptyResult, GalleryContainer } from './styled';

type GalleryProps = {
  searchParam: string;
  itemsPerPage: number;
};

const Gallery: React.FC<GalleryProps> = ({ searchParam, itemsPerPage }) => {
  const minPage: number = 1;
  const maxPage: number = 10;
  const navigate: NavigateFunction = useNavigate();
  const [favorites, toggleFavoriteInStorage] = useFavorites();
  const [currentPage, setCurrentPage] = useState<number>(minPage);
  const { paintings, loading, error } = useFetchPaintings(
    currentPage,
    itemsPerPage,
    searchParam,
  );

  const handleCardClick: (id: number) => void = useCallback(
    (id: number): void => {
      navigate(`${ROUTES.PAINTING_INFO}/${id}`);
    },
    [navigate],
  );

  const toggleFavorite: (id: number) => void = useCallback(
    (id: number): void => {
      toggleFavoriteInStorage(id);
    },
    [toggleFavoriteInStorage],
  );

  const handlePrevPage = (): void => {
    setCurrentPage((prev) => Math.max(prev - 1, minPage));
  };

  const handleNextPage = (): void => {
    setCurrentPage((prev) => Math.min(prev + 1, maxPage));
  };

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <SectionTitle
        title="Our special gallery"
        note="Topics for you"
        align="center"
      />
      <GalleryContainer>
        {loading ? (
          <Loader />
        ) : paintings.length === 0 ? (
          <EmptyResult>No paintings found</EmptyResult>
        ) : (
          paintings.map((item: Painting) => (
            <ArtworkCard
              key={item.id}
              title={item.title}
              author={retrieveArtistName(item.artist_display)}
              publicDomain={item.is_public_domain}
              imageId={item.image_id}
              size={CardSize.LARGE}
              favorite={favorites.includes(item.id)}
              toggleFavorite={() => toggleFavorite(item.id)}
              handleClick={() => handleCardClick(item.id)}
            />
          ))
        )}
      </GalleryContainer>
      <PaginationBar
        currentPage={currentPage}
        minPage={minPage}
        maxPage={maxPage}
        onPrev={handlePrevPage}
        onNext={handleNextPage}
        setPage={setCurrentPage}
        pages={generatePageNumbers(currentPage, maxPage)}
        visibility={!searchParam}
      />
    </>
  );
};

export default React.memo(Gallery);
