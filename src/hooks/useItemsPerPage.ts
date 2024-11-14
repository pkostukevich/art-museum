import { useEffect, useState } from 'react';

import { ITEMS_PER_PAGE, SCREEN_BREAKPOINTS } from '@constants/itemsPerPage';
import { useMediaQuery } from '@hooks/useMediaQuery';

export function useItemsPerPage(): number {
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE.LARGE);

  const isLargeScreen: boolean = useMediaQuery(
    `(min-width: ${SCREEN_BREAKPOINTS.LARGE}px)`,
  );
  const isMediumScreen: boolean = useMediaQuery(
    `(min-width: ${SCREEN_BREAKPOINTS.MEDIUM}px) and (max-width: ${SCREEN_BREAKPOINTS.LARGE - 1}px)`,
  );
  const isSmallScreen: boolean = useMediaQuery(
    `(max-width: ${SCREEN_BREAKPOINTS.MEDIUM - 1}px)`,
  );

  useEffect(() => {
    if (isLargeScreen) {
      setItemsPerPage(ITEMS_PER_PAGE.LARGE);
    } else if (isSmallScreen) {
      setItemsPerPage(ITEMS_PER_PAGE.SMALL);
    } else {
      setItemsPerPage(ITEMS_PER_PAGE.MEDIUM);
    }
  }, [isLargeScreen, isMediumScreen, isSmallScreen]);

  return itemsPerPage;
}

export default useItemsPerPage;
