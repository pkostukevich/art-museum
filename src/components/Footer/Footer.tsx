import './Footer.scss';

import ModsenLogo from '@svg/modsen-logo.svg';
import MuseumLogo from '@svg/museum-logo-dark.svg';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper content__wrapper">
        <img src={MuseumLogo} alt="Museum of Art logo" />
        <img src={ModsenLogo} alt="Modsen logo" />
      </div>
    </div>
  );
};

export default Footer;
