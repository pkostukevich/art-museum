import './Layout.scss';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="wrapper content__wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
