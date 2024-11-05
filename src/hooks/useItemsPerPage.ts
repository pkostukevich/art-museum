import { useState, useEffect } from 'react';
import { useMediaQuery } from '@hooks/useMediaQuery';

export function useItemsPerPage(): number {
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const isLargeScreen: boolean = useMediaQuery('(min-width: 1320px)');
  const isMediumScreen: boolean = useMediaQuery(
    '(min-width: 900px) and (max-width: 1319px)',
  );
  const isSmallScreen: boolean = useMediaQuery('(max-width: 899px)');

  useEffect(() => {
    if (isLargeScreen) {
      setItemsPerPage(3);
    } else if (isSmallScreen) {
      setItemsPerPage(1);
    } else {
      setItemsPerPage(2);
    }
  }, [isLargeScreen, isMediumScreen, isSmallScreen]);

  return itemsPerPage;
}

export default useItemsPerPage;
