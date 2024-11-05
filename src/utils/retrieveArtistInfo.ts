const parseArtistDisplay = (artistDisplay: string): string[] => {
  return artistDisplay.includes('(')
    ? artistDisplay.split('(')
    : artistDisplay.split('\n');
};

export const retrieveArtistName = (artistDisplay: string): string => {
  return parseArtistDisplay(artistDisplay)[0].trim();
};

export const retrieveArtistNationality = (artistDisplay: string): string => {
  return parseArtistDisplay(artistDisplay)[1]?.split(',')[0].trim() || '-';
};
