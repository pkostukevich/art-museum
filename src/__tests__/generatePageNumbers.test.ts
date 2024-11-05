import { generatePageNumbers } from '@utils/generatePageNumbers';

describe('generatePageNumbers', () => {
  it('returns an array of page numbers ending at maxPage when currentPage is close to border value', () => {
    const currentPage: number = 18;
    const maxPage: number = 20;
    const expected: number[] = [16, 17, 18, 19, 20];
    expect(generatePageNumbers(currentPage, maxPage)).toEqual(expected);
  });

  it('returns an array of page numbers with a length of maxPage when maxPage is less than displayCount', () => {
    const currentPage: number = 1;
    const maxPage: number = 3;
    const expected: number[] = [1, 2, 3];
    expect(generatePageNumbers(currentPage, maxPage)).toEqual(expected);
  });

  it('returns an empty array when maxPage is 0', () => {
    const currentPage: number = 1;
    const maxPage: number = 0;
    const expected: number[] = [];
    expect(generatePageNumbers(currentPage, maxPage)).toEqual(expected);
  });
});
