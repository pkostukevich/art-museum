import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { STATIC_TEXTS } from '@constants/staticTexts';
import BackIcon from '@svg/arrow-left.svg';

import { BackButtonWrapper } from './styled';

const BackButton: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleBackClick = (): void => {
    navigate(-1);
  };

  return (
    <BackButtonWrapper onClick={handleBackClick}>
      <img src={BackIcon} alt={STATIC_TEXTS.backButton.label} />
      <span>{STATIC_TEXTS.backButton.label}</span>
    </BackButtonWrapper>
  );
};

export default React.memo(BackButton);
