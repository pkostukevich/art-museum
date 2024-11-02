import React from 'react';
import { usePagination } from '../../hooks/usePagination';
import { Painting } from '../../interfaces/painting.interface';
import { generatePageNumbers } from '../../utils/generatePageNumbers';
import PaginationBar from '../PaginationBar/PaginationBar';
import ArtworkCard from '../ArtworkCard/ArtworkCard';
import { CardSize } from '../../interfaces/enum/cardSize.enum';

type GalleryProps = {
  data: Painting[];
  itemsPerPage: number;
};

const Gallery: React.FC<GalleryProps> = ({ data, itemsPerPage }) => {
  const { getCurrentData, currentPage, maxPage, next, prev, setPage } =
    usePagination(data, itemsPerPage);
  const pages: number[] = generatePageNumbers(currentPage, maxPage);

  return (
    <>
      <div>
        {getCurrentData().map((item) => (
          <ArtworkCard
            key={item.id}
            title={item.title}
            author={item.artist_display}
            publicDomain={item.is_public_domain}
            imageId={item.image_id}
            size={CardSize.LARGE}
          />
        ))}
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
