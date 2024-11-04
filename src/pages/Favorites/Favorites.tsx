import { fetchPaintingById } from '@api/fetchPaintings';
import Grid from '@components/Grid/Grid';
import PageTitle from '@components/PageTitle/PageTitle';
import SectionTitle from '@components/SectionTitle/SectionTitle';
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
      <section className="section">
        <PageTitle text="Here are your favorites" highlightedText="favorites" />
      </section>
      <section className="section">
        <SectionTitle
          title="Your favorites list"
          note="Saved by you"
          align="center"
        />
        <Grid items={favorites} />
      </section>
    </div>
  );
};

export default Favorites;
