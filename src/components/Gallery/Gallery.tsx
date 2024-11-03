import React from 'react';
import { usePagination } from '@hooks/usePagination';
import { Painting } from '@models/interfaces/painting.interface';
import { generatePageNumbers } from '@utils/generatePageNumbers';
import PaginationBar from '@components/PaginationBar/PaginationBar';
import ArtworkCard from '@components/ArtworkCard/ArtworkCard';
import { CardSize } from '@models/enums/cardSize.enum';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import './Gallery.scss';
import { NavigateFunction, useNavigate } from 'react-router-dom';

type GalleryProps = {
  data: Painting[];
  itemsPerPage: number;
};

const Gallery: React.FC<GalleryProps> = ({ data, itemsPerPage }) => {
  const navigate: NavigateFunction = useNavigate();
  const { getCurrentData, currentPage, maxPage, next, prev, setPage } =
    usePagination(data, itemsPerPage);
  const pages: number[] = generatePageNumbers(currentPage, maxPage);

  return (
    <>
      <SectionTitle title="Our special gallery" note="Topics for you" />
      <div className="gallery">
        {getCurrentData().map((item) => (
          <ArtworkCard
            key={item.id}
            title={item.title}
            author={item.artist_display}
            publicDomain={item.is_public_domain}
            imageId={item.image_id}
            size={CardSize.LARGE}
            handleClick={() => navigate(`/paintings/${item.id}`)}
          />
        ))}
      </div>
      <PaginationBar
        currentPage={currentPage}
        maxPage={maxPage}
        onPrev={prev}
        onNext={next}
        setPage={setPage}
        pages={pages}
      />
    </>
  );
};

export default Gallery;
