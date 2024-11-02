import React from 'react';
import PaginationButton from './PaginationButton/PaginationButton';
import ArrowRight from '../../../assets/svg/arrow-right.svg';
import ArrowLeft from '../../../assets/svg/arrow-left.svg'

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
      <PaginationButton content={<img src={ArrowLeft}/>} handleClick={onPrev} hidden={currentPage === 1}/>
      {pages.map((page: number) => (
        <PaginationButton key={page} content={page} handleClick={() => setPage(page)}  active={currentPage === page}/>
      ))}
      <PaginationButton content={<img src={ArrowRight}/>} handleClick={onNext} hidden={currentPage === maxPage}/>
    </div>
  );
};

export default PaginationBar;
