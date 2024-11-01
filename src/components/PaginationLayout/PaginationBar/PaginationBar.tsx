import React from 'react';

type PaginationBarProps = {
  currentPage: number;
  maxPage: number;
  onPrev: () => void;
  onNext: () => void;
  setPage: (page: number) => void;
  pages: number[];
};

const PaginationBar: React.FC<PaginationBarProps> = ({
  currentPage,
  maxPage,
  onPrev,
  onNext,
  setPage,
  pages,
}) => {
  return (
    <div className="pagination-bar">
      <button onClick={onPrev} disabled={currentPage === 1}>
        {'<'}
      </button>
      {pages.map((page: number, index: number) => (
        <button
          key={index}
          onClick={() => setPage(page)}
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}
      <button onClick={onNext} disabled={currentPage === maxPage}>
        {'>'}
      </button>
    </div>
  );
};

export default PaginationBar;
