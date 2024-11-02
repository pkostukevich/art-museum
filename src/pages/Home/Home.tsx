import React, { useEffect, useState } from 'react';
import { fetchPaintings } from '../../api/fetchPaintings';
import { Painting } from '../../interfaces/painting.interface';
import PaginationComponent from '../../components/Gallery/Gallery';
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
      <h1>Home</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PaginationComponent data={paintings} itemsPerPage={3} />
      )}
    </div>
  );
};

export default Home;
