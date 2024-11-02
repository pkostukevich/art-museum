import React from 'react';
import { usePagination } from '../../hooks/usePagination';
import { Painting } from '../../interfaces/painting.interface';
import { generatePageNumbers } from '../../utils/generatePageNumbers';
import PaginationBar from '../PaginationBar/PaginationBar';

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
          <div key={item.id}>
            <h5>{item.title}</h5>
            <p>{item.artist_display}</p>
          </div>
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
