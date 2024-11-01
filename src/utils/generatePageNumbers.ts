export const generatePageNumbers = (
  currentPage: number,
  maxPage: number,
): number[] => {
  const pages: number[] = [];
  const displayCount: number = 5;
  let startPage: number = Math.max(
    1,
    currentPage - Math.floor(displayCount / 2),
  );
  const endPage: number = Math.min(maxPage, startPage + displayCount - 1);

  if (endPage - startPage < displayCount - 1) {
    startPage = Math.max(1, endPage - displayCount + 1);
  }

  for (let page: number = startPage; page <= endPage; page++) {
    pages.push(page);
  }

  return pages;
};
