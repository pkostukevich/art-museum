import { useEffect, useState } from 'react';

import { fetchPaintings } from '@api/fetchPaintings';
import { Painting } from '@models/interfaces/painting.interface';
import { checkItemsPerPage } from '@utils/checkItemsPerPage';

const useFetchPaintings = (
  page: number,
  itemsPerPage: number,
  searchParam: string,
): { paintings: Painting[]; loading: boolean; error: string | null } => {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      const itemsCount: number = checkItemsPerPage();
      if (searchParam) {
        page = 1;
      }
      fetchPaintings(page, itemsCount, searchParam)
        .then((data: Painting[]) => {
          setPaintings(data);
        })
        .catch((error: Error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, [page, itemsPerPage, searchParam]);

  return { paintings, loading, error };
};

export default useFetchPaintings;
