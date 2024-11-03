import React from 'react';
import './SectionTitle.scss';

type SectionTitleProps = {
  title: string;
  note?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, note }) => {
  return (
    <div className="section-title">
      <p className="section-title__note">{note}</p>
      <h2 className="section-title__main">{title}</h2>
    </div>
  );
};

export default SectionTitle;
