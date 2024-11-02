import { FETCH_PAINTINGS_URL } from '@constants/fetchPaintingsUrl';
import { Painting } from '@models/interfaces/painting.interface';

export async function fetchPaintings(): Promise<Painting[]> {
  try {
    const response: Response = await fetch(FETCH_PAINTINGS_URL);

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
