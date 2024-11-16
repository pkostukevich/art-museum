import { ITEMS_PER_PAGE, SCREEN_BREAKPOINTS } from '@constants/itemsPerPage';

export const checkItemsPerPage = (): number => {
  const width: number = window.innerWidth;

  if (width >= SCREEN_BREAKPOINTS.LARGE) {
    return ITEMS_PER_PAGE.LARGE;
  } else if (width >= SCREEN_BREAKPOINTS.MEDIUM) {
    return ITEMS_PER_PAGE.MEDIUM;
  } else {
    return ITEMS_PER_PAGE.SMALL;
  }
};
