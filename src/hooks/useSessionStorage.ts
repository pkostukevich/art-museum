import { useEffect, useState } from 'react';

import { FAVORITES_STORAGE_KEY } from '@constants/favoritesStorageKey';

export function useFavorites(): [number[], (id: number) => () => void] {
  const [favorites, setFavorites] = useState(() => {
    const item: string | null = window.sessionStorage.getItem(
      FAVORITES_STORAGE_KEY,
    );
    if (item) return JSON.parse(item);
    else return [];
  });

  const toggleFavoriteInStorage =
    (id: number): (() => void) =>
    () => {
      const isFavorite: boolean = favorites.includes(id);
      if (isFavorite) {
        setFavorites((prev: number[]) => prev.filter((b) => b !== id));
      } else setFavorites((prev: number[]) => [...prev, id]);
    };

  useEffect(() => {
    window.sessionStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(favorites),
    );
  }, [favorites]);

  return [favorites, toggleFavoriteInStorage];
}
