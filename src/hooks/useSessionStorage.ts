import { useEffect, useState } from 'react';

import { FAVORITES_STORAGE_KEY } from '@constants/favoritesStorageKey';
import SessionStorageManager from '@utils/sessionStorageManager';

export function useFavorites(): [number[], (id: number) => () => void] {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const item: number[] | null = SessionStorageManager.getItem(
      FAVORITES_STORAGE_KEY,
    );
    return item || [];
  });

  const toggleFavoriteInStorage =
    (id: number): (() => void) =>
    () => {
      const isFavorite: boolean = favorites.includes(id);

      setFavorites((prev: number[]) => {
        const updatedFavorites: number[] = isFavorite
          ? prev.filter((itemId: number) => itemId !== id)
          : [...prev, id];

        SessionStorageManager.setItem(FAVORITES_STORAGE_KEY, updatedFavorites);
        return updatedFavorites;
      });
    };

  useEffect(() => {
    SessionStorageManager.setItem(FAVORITES_STORAGE_KEY, favorites);
  }, [favorites]);

  return [favorites, toggleFavoriteInStorage];
}
