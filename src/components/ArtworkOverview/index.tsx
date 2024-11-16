import React from 'react';

import DescriptionItem from '@components/ui/DescriptionItem';
import SectionTitle from '@components/ui/SectionTitle';
import { STATIC_TEXTS } from '@constants/staticTexts';
import {
  retrieveArtistName,
  retrieveArtistNationality,
} from '@utils/retrieveArtistInfo';

import { ArtistInfo, DateInfo, OverviewContainer } from './styled';

type ArtworkOverviewProps = {
  title: string;
  artist_display: string;
  date_display: string | undefined;
  dimensions: string | undefined;
  credit_line: string | undefined;
  is_public_domain: boolean;
};

const ArtworkOverview: React.FC<ArtworkOverviewProps> = ({
  title,
  artist_display,
  date_display,
  dimensions,
  credit_line,
  is_public_domain,
}) => {
  const artistName: string = retrieveArtistName(artist_display);
  const artistNationality: string = retrieveArtistNationality(artist_display);
  const publicDomainText: string = is_public_domain
    ? STATIC_TEXTS.artworkCard.publicDomain
    : STATIC_TEXTS.artworkCard.notPublicDomain;

  return (
    <OverviewContainer>
      <div>
        <SectionTitle title={title} align="left" />
        <ArtistInfo>{artistName}</ArtistInfo>
        <DateInfo>{date_display}</DateInfo>
      </div>
      <div>
        <SectionTitle title="Overview" align="left" />
        <DescriptionItem
          category="Artist nationality:"
          value={artistNationality}
        />
        <DescriptionItem category="Dimensions: Sheet:" value={dimensions} />
        <DescriptionItem category="Credit Line:" value={credit_line} />
        <DescriptionItem value={publicDomainText} />
      </div>
    </OverviewContainer>
  );
};

export default React.memo(ArtworkOverview);
