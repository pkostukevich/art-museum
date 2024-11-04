import { fetchPaintingById } from '@api/fetchPaintings';
import PageTitle from '@components/PageTitle/PageTitle';
import { useFavorites } from '@hooks/useSessionStorage';
import { Painting } from '@models/interfaces/painting.interface';
import React, { useEffect, useState } from 'react';

const Favorites: React.FC = () => {
  const [favoriteIds] = useFavorites();
  const [favorites, setFavorites] = useState<Painting[]>([]);

  useEffect(() => {
    const fetchFavorites = async (): Promise<void> => {
      const favoritePaintings: Painting[] = [];
      for (const id of favoriteIds) {
        const painting: Painting = await fetchPaintingById(id.toString());
        if (!favoritePaintings.some((p) => p.id === painting.id)) {
          favoritePaintings.push(painting);
        }
      }
      setFavorites(favoritePaintings);
    };
    fetchFavorites();
  }, [favoriteIds]);

  return (
    <div>
      <PageTitle text="Here are your favorites" highlightedText="favorites" />
      {favorites.map((painting) => (
        <div key={painting.id}>
          <img src={painting.image_id} alt={painting.title} />
          <h3>{painting.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
