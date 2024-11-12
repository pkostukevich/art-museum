import './Grid.scss';

import ArtworkCard from '@components/ArtworkCard/ArtworkCard';
import { useFavorites } from '@hooks/useSessionStorage';
import { CardSize } from '@models/enums/cardSize.enum';
import { Painting } from '@models/interfaces/painting.interface';
import { retrieveArtistName } from '@utils/retrieveArtistInfo';
import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

type GridProps = {
  items: Painting[];
  noItemsMessage?: string;
};

const Grid: React.FC<GridProps> = ({ items, noItemsMessage }) => {
  const navigate: NavigateFunction = useNavigate();
  const [favorites, toggleFavoriteInStorage] = useFavorites();

  return items.length === 0 ? (
    <div className="grid__empty-result">{noItemsMessage}</div>
  ) : (
    <div className="grid">
      {items.map((item) => (
        <ArtworkCard
          key={item.id}
          title={item.title}
          author={retrieveArtistName(item.artist_display)}
          publicDomain={item.is_public_domain}
          imageId={item.image_id}
          size={CardSize.SMALL}
          favorite={favorites.includes(item.id)}
          toggleFavorite={() => toggleFavoriteInStorage(item.id)()}
          handleClick={() => navigate(`/paintings/${item.id}`)}
        />
      ))}
    </div>
  );
};

export default Grid;
