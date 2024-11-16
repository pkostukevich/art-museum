import { FETCH_PAINTINGS_BASE_URL } from '@constants/fetchPaintingsData';
import { Painting } from '@models/interfaces/painting.interface';

export async function fetchPaintings(
  page: number,
  limit: number,
  searchParam?: string,
): Promise<Painting[]> {
  try {
    const query: string = searchParam
      ? `/search?query[term][title]=${searchParam}&`
      : '?';
    const url: string = `${FETCH_PAINTINGS_BASE_URL}${query}page=${page}&limit=${limit}&classification_title=painting&fields=id,title,artist_display,image_id,is_public_domain`;
    const response: Response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data }: { data: Painting[] } = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export async function fetchPaintingById(id: string): Promise<Painting> {
  try {
    const response: Response = await fetch(`${FETCH_PAINTINGS_BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data }: { data: Painting } = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
