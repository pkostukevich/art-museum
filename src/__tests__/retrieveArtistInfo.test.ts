import {
  retrieveArtistName,
  retrieveArtistNationality,
} from '@utils/retrieveArtistInfo';

describe('retrieveArtistName function', () => {
  it('should return artist name with parentheses', () => {
    const artistDisplay: string = 'Artist Name (Nationality)';
    expect(retrieveArtistName(artistDisplay)).toBe('Artist Name');
  });

  it('should return artist name with newline character', () => {
    const artistDisplay: string = 'Edward Hopper\nAmerican, 1882–1967';
    expect(retrieveArtistName(artistDisplay)).toBe('Edward Hopper');
  });

  it('should return artist name with parentheses and newline character', () => {
    const artistDisplay: string =
      'Designed by Sidney B. Waugh (American, 1904–1963)\nSteuben Division, Corning Glass Works (American, 1918–2008)\nCorning, New York';
    expect(retrieveArtistName(artistDisplay)).toBe(
      'Designed by Sidney B. Waugh',
    );
  });

  it('should return empty string for empty input', () => {
    const artistDisplay: string = '';
    expect(retrieveArtistName(artistDisplay)).toBe('');
  });
});

describe('retrieveArtistNationality function', () => {
  it('should return nationality when it is on a new line', () => {
    const artistDisplay: string = 'Edward Hopper\nAmerican, 1882–1967';
    expect(retrieveArtistNationality(artistDisplay)).toBe('American');
  });

  it('should return nationality when it is in parentheses', () => {
    const artistDisplay: string =
      'Designed by Sidney B. Waugh (American, 1904–1963)\nSteuben Division, Corning Glass Works (American, 1918–2008)\nCorning, New York';
    expect(retrieveArtistNationality(artistDisplay)).toBe('American');
  });

  it('should return "-" when there is no nationality', () => {
    const artistDisplay: string = 'Artist unknown, 18th century';
    expect(retrieveArtistNationality(artistDisplay)).toBe('-');
  });
});
