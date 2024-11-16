import React from 'react';

import Footer from '@components/Footer';
import Header from '@components/Header';

import { ContentWrapper } from './styled';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </>
  );
};

export default Layout;
