import React, { useCallback } from 'react';

import PaginationButton from '@components/ui/PaginationBar/PaginationButton';
import ArrowLeft from '@svg/arrow-left.svg';
import ArrowRight from '@svg/arrow-right.svg';

import { PaginationBarWrapper } from './styled';

type PaginationBarProps = {
  currentPage: number;
  minPage: number;
  maxPage: number;
  onPrev: () => void;
  onNext: () => void;
  setPage: (page: number) => void;
  pages: number[];
  visibility: boolean;
};

const PaginationBar: React.FC<PaginationBarProps> = ({
  currentPage,
  minPage,
  maxPage,
  onPrev,
  onNext,
  setPage,
  pages,
  visibility,
}) => {
  const handlePaginationClick: (page: number) => void = useCallback(
    (page: number): void => {
      setPage(page);
    },
    [setPage],
  );

  return (
    <PaginationBarWrapper>
      {visibility && (
        <>
          <PaginationButton
            content={<img src={ArrowLeft} alt="prev" />}
            handleClick={onPrev}
            hidden={currentPage === minPage}
          />
          {pages.map((page: number) => (
            <PaginationButton
              key={page}
              content={page}
              handleClick={() => handlePaginationClick(page)}
              active={currentPage === page}
            />
          ))}
          <PaginationButton
            content={<img src={ArrowRight} alt="next" />}
            handleClick={onNext}
            hidden={pages.length === 0 || currentPage === maxPage}
          />
        </>
      )}
    </PaginationBarWrapper>
  );
};

export default React.memo(PaginationBar);
