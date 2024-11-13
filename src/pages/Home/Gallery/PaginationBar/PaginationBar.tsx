import React from 'react';

import PaginationButton from '@pages/Home/Gallery/PaginationBar/PaginationButton/PaginationButton';
import ArrowLeft from '@svg/arrow-left.svg';
import ArrowRight from '@svg/arrow-right.svg';

import './PaginationBar.scss';

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
      <PaginationButton
        content={<img src={ArrowLeft} alt="prev" />}
        handleClick={onPrev}
        hidden={currentPage === 1}
      />
      {pages.map((page: number) => (
        <PaginationButton
          key={page}
          content={page}
          handleClick={() => setPage(page)}
          active={currentPage === page}
        />
      ))}
      <PaginationButton
        content={<img src={ArrowRight} alt="next" />}
        handleClick={onNext}
        hidden={pages.length === 0 || currentPage === maxPage}
      />
    </div>
  );
};

export default PaginationBar;
