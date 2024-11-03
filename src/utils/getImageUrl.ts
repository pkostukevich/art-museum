import { canFetchImage } from '@api/canFetchImage';

export const getImageUrl = async (imageId: string): Promise<string> => {
  const url: string = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
  const canFetch: boolean = await canFetchImage(url);
  return canFetch ? url : '';
};
