import React from 'react';

import { MainTitle, Note, SectionTitleWrapper } from './styled';

type SectionTitleProps = {
  title: string;
  align: 'left' | 'center';
  note?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, note, align }) => {
  return (
    <SectionTitleWrapper align={align}>
      <Note>{note}</Note>
      <MainTitle>{title}</MainTitle>
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
