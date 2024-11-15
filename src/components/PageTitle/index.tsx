import React from 'react';

import { HighlightedText, Title } from './styled';

interface PageTitleProps {
  text: string;
  highlightedText?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ text, highlightedText }) => {
  return (
    <Title>
      {text
        .split(' ')
        .map((word, index) =>
          word === highlightedText ? (
            <HighlightedText key={index}>{word} </HighlightedText>
          ) : (
            <span key={index}>{word} </span>
          ),
        )}
    </Title>
  );
};

export default PageTitle;
