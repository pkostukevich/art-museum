import React, { useCallback, useEffect, useState } from 'react';
import { fetchPaintings } from '@api/fetchPaintings';
import { Painting } from '@models/interfaces/painting.interface';
import Gallery from '@pages/Home/Gallery/Gallery';
import './Home.scss';
import PageTitle from '@components/PageTitle/PageTitle';
import Grid from '@components/Grid/Grid';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import Loader from '@components/Loader/Loader';
import SearchForm from '@components/SearchForm/SearchForm';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [recommendedPaintings, setRecommendedPaintings] = useState<Painting[]>(
    [],
  );
  const [filteredPaintings, setFilteredPaintings] = useState<Painting[]>([]);

  useEffect(() => {
    setLoading(true);
    fetchPaintings()
      .then((data: Painting[]) => {
        setPaintings(data.slice(0, 30));
        setFilteredPaintings(data.slice(0, 30));
        setRecommendedPaintings(data.slice(30));
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSearch: (searchValue: string) => void = useCallback(
    (searchValue: string) => {
      if (searchValue) {
        const filtered: Painting[] = paintings.filter((painting) => {
          return painting.title
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        });
        setFilteredPaintings(filtered);
      } else {
        setFilteredPaintings(paintings);
      }
    },
    [paintings],
  );

  return (
    <div className="home">
      <section className="section">
        <PageTitle text="Let's find some art here!" highlightedText="art" />
        <SearchForm onSearch={handleSearch} />
      </section>
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="section">
            <Gallery data={filteredPaintings} itemsPerPage={3} />
          </section>
          <section className="section">
            <SectionTitle
              title="Other works for you"
              note="Here some more"
              align="center"
            />
            <Grid items={recommendedPaintings} />
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
