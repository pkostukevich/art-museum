import React from 'react';
import './PageTitle.scss';

interface PageTitleProps {
  text: string;
  highlightedText?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ text, highlightedText }) => {
  return (
    <h1 className="page-title">
      {text.split(' ').map((word, index) => (
        <span
          key={index}
          className={word === highlightedText ? 'page-title--highlighted' : ''}
        >
          {word}{' '}
        </span>
      ))}
    </h1>
  );
};

export default PageTitle;
