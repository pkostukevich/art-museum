import React, { useCallback } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import ArtworkCard from '@components/ArtworkCard';
import { ROUTES } from '@constants/routes';
import { useFavorites } from '@hooks/useSessionStorage';
import { CardSize } from '@models/enums/cardSize.enum';
import { Painting } from '@models/interfaces/painting.interface';
import { retrieveArtistName } from '@utils/retrieveArtistInfo';

import { EmptyResult, GridContainer } from './styled';

type GridProps = {
  items: Painting[];
  noItemsMessage?: string;
};

const Grid: React.FC<GridProps> = ({ items, noItemsMessage }) => {
  const navigate: NavigateFunction = useNavigate();
  const [favorites, toggleFavoriteInStorage] = useFavorites();

  const handleCardClick = (id: number): void => {
    navigate(`${ROUTES.PAINTING_INFO}/${id}`);
  };

  const toggleFavorite: (id: number) => void = useCallback(
    (id: number) => {
      toggleFavoriteInStorage(id);
    },
    [toggleFavoriteInStorage],
  );

  return items.length === 0 ? (
    <EmptyResult>{noItemsMessage}</EmptyResult>
  ) : (
    <GridContainer>
      {items.map((item) => (
        <ArtworkCard
          key={item.id}
          title={item.title}
          author={retrieveArtistName(item.artist_display)}
          publicDomain={item.is_public_domain}
          imageId={item.image_id}
          size={CardSize.SMALL}
          favorite={favorites.includes(item.id)}
          toggleFavorite={() => toggleFavorite(item.id)}
          handleClick={() => handleCardClick(item.id)}
        />
      ))}
    </GridContainer>
  );
};

export default React.memo(Grid);
