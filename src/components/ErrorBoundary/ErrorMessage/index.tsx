import React from 'react';

import PageTitle from '@components/PageTitle';
import SectionTitle from '@components/SectionTitle';
import { STATIC_TEXTS } from '@constants/staticTexts';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <>
      <PageTitle
        text={STATIC_TEXTS.error.title}
        highlightedText={STATIC_TEXTS.error.highlightedText}
      ></PageTitle>
      <SectionTitle note={message} align="center" title="" />
    </>
  );
};

export default ErrorMessage;
