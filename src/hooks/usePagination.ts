import { useState } from 'react';
import { Painting } from '@models/interfaces/painting.interface';

export function usePagination(
  data: Painting[],
  itemsPerPage: number,
): {
  next: () => void;
  prev: () => void;
  setPage: (page: number) => void;
  getCurrentData: () => Painting[];
  currentPage: number;
  maxPage: number;
} {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const maxPage: number = Math.ceil(data.length / itemsPerPage);

  function getCurrentData(): Painting[] {
    const begin: number = (currentPage - 1) * itemsPerPage;
    const end: number = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next(): void {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev(): void {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function setPage(page: number): void {
    const pageNumber: number = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  }

  return { next, prev, setPage, getCurrentData, currentPage, maxPage };
}
