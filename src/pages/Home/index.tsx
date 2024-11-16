import React, { useCallback, useEffect, useState } from 'react';

import { fetchPaintings } from '@api/fetchPaintings';
import ErrorMessage from '@components/ErrorBoundary/ErrorMessage';
import Gallery from '@components/Gallery';
import Grid from '@components/Grid';
import Loader from '@components/ui/Loader';
import PageTitle from '@components/ui/PageTitle';
import SearchForm from '@components/ui/SearchForm';
import SectionTitle from '@components/ui/SectionTitle';
import { ITEMS_LIMIT } from '@constants/itemsPerPage';
import { STATIC_TEXTS } from '@constants/staticTexts';
import useItemsPerPage from '@hooks/useItemsPerPage';
import { Painting } from '@models/interfaces/painting.interface';
import { Section } from '@styles/common';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [recommendedPaintings, setRecommendedPaintings] = useState<Painting[]>(
    [],
  );
  const [filteredPaintings, setFilteredPaintings] = useState<Painting[]>([]);
  const itemsPerPage: number = useItemsPerPage();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchPaintings()
      .then((data: Painting[]) => {
        const paintings: Painting[] = data.slice(0, ITEMS_LIMIT);
        setPaintings(paintings);
        setFilteredPaintings(paintings);
        setRecommendedPaintings(data.slice(ITEMS_LIMIT));
      })
      .catch((error) => {
        setError(error.message);
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

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <Section>
        <PageTitle text="Let's find some art here!" highlightedText="art" />
        <SearchForm
          onSearch={handleSearch}
          placeholder={STATIC_TEXTS.searchForm.placeholder}
        />
      </Section>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Section>
            <Gallery data={filteredPaintings} itemsPerPage={itemsPerPage} />
          </Section>
          <Section>
            <SectionTitle
              title="Other works for you"
              note="Here some more"
              align="center"
            />
            <Grid items={recommendedPaintings} />
          </Section>
        </>
      )}
    </>
  );
};

export default Home;