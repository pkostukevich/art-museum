export const FETCH_PAINTINGS_BASE_URL: string =
  'https://api.artic.edu/api/v1/artworks';
export const FETCH_ALL_PAINTINGS_URL: string = `${FETCH_PAINTINGS_BASE_URL}?page=1&limit=39&classification_title=painting&fields=id,title,artist_display,image_id,is_public_domain`;
