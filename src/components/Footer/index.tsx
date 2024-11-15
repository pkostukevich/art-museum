import React from 'react';

import ModsenLogo from '@svg/modsen-logo.svg';
import MuseumLogo from '@svg/museum-logo-dark.svg';

import { FooterContainer, FooterWrapper } from './styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <img src={MuseumLogo} alt="Museum of Art logo" />
        <img src={ModsenLogo} alt="Modsen logo" />
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
