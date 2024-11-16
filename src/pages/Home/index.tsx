import React, { useEffect, useState } from 'react';

import { fetchPaintings } from '@api/fetchPaintings';
import ErrorMessage from '@components/ErrorBoundary/ErrorMessage';
import Gallery from '@components/Gallery';
import Grid from '@components/Grid';
import Loader from '@components/ui/Loader';
import PageTitle from '@components/ui/PageTitle';
import SearchForm from '@components/ui/SearchForm';
import SectionTitle from '@components/ui/SectionTitle';
import {
  RECOMMENDED_PAINTINGS_LIMIT,
  RECOMMENDED_PAINTINGS_PAGE,
} from '@constants/fetchPaintingsData';
import { STATIC_TEXTS } from '@constants/staticTexts';
import useItemsPerPage from '@hooks/useItemsPerPage';
import { Painting } from '@models/interfaces/painting.interface';
import { Section } from '@styles/common';

const Home: React.FC = () => {
  const [recommendedPaintings, setRecommendedPaintings] = useState<Painting[]>(
    [],
  );
  const itemsPerPage: number = useItemsPerPage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (searchValue: string): void => {
    setSearchTerm(searchValue);
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchPaintings(RECOMMENDED_PAINTINGS_PAGE, RECOMMENDED_PAINTINGS_LIMIT)
      .then((data: Painting[]) => {
        setRecommendedPaintings(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <Section>
        <PageTitle text={`Let's find some art here!'`} highlightedText="art" />
        <SearchForm
          onSearch={handleSearch}
          placeholder={STATIC_TEXTS.searchForm.placeholder}
        />
      </Section>
      <Section>
        <Gallery itemsPerPage={itemsPerPage} searchParam={searchTerm} />
      </Section>
      <Section>
        <SectionTitle
          title="Other works for you"
          note="Here some more"
          align="center"
        />
        {loading ? <Loader /> : <Grid items={recommendedPaintings} />}
      </Section>
    </>
  );
};

export default React.memo(Home);
