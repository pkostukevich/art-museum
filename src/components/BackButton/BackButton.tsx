import './BackButton.scss';

import BackIcon from '@svg/arrow-left.svg';
import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="back-button" onClick={() => navigate(-1)}>
      <img src={BackIcon} alt="back" />
      <span>Back</span>
    </div>
  );
};

export default BackButton;
