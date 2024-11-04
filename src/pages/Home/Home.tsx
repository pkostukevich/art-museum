import React, { useEffect, useState } from 'react';
import { fetchPaintings } from '@api/fetchPaintings';
import { Painting } from '@models/interfaces/painting.interface';
import Gallery from '@components/Gallery/Gallery';
import './Home.scss';

const Home: React.FC = () => {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPaintings()
      .then((data: Painting[]) => setPaintings(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Gallery data={paintings} itemsPerPage={3} />
      )}
    </div>
  );
};

export default Home;
