import React, { useEffect, useState } from 'react';
import { fetchPaintings } from '@api/fetchPaintings';
import { Painting } from '@models/interfaces/painting.interface';
import Gallery from '@components/Gallery/Gallery';
import './Home.scss';
import PageTitle from '@components/PageTitle/PageTitle';
import Grid from '@components/Grid/Grid';
import SectionTitle from '@components/SectionTitle/SectionTitle';

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
      <section className="section">
        <PageTitle text="Let's find some art here!" highlightedText="art" />
      </section>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <section className="section">
            <Gallery data={paintings.slice(0, 30)} itemsPerPage={3} />
          </section>
          <section className="section">
            <SectionTitle
              title="Other works for you"
              note="Here some more"
              align="center"
            />
            <Grid items={paintings.slice(30)} />
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
