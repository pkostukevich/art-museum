import React, { useMemo } from 'react';

import { HighlightedText, Title } from './styled';

interface PageTitleProps {
  text: string;
  highlightedText?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ text, highlightedText }) => {
  const words: string[] = useMemo(() => text.split(' '), [text]);

  return (
    <Title>
      {words.map((word: string, index: number) =>
        word === highlightedText ? (
          <HighlightedText key={index}>{word} </HighlightedText>
        ) : (
          <span key={index}>{word} </span>
        ),
      )}
    </Title>
  );
};

export default React.memo(PageTitle);
