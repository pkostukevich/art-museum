import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { STATIC_TEXTS } from '@constants/staticTexts';
import BackIcon from '@svg/arrow-left.svg';

import './BackButton.scss';

const BackButton: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="back-button" onClick={() => navigate(-1)}>
      <img src={BackIcon} alt={STATIC_TEXTS.backButton.label} />
      <span>{STATIC_TEXTS.backButton.label}</span>
    </div>
  );
};

export default BackButton;
