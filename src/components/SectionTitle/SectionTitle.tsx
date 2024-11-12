import './SectionTitle.scss';

import React from 'react';

type SectionTitleProps = {
  title: string;
  align: 'left' | 'center';
  note?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, note, align }) => {
  return (
    <div className={`section-title section-title--${align}`}>
      <p className="section-title__note">{note}</p>
      <p className="section-title__main">{title}</p>
    </div>
  );
};

export default SectionTitle;
