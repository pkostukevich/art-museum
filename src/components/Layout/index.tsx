import React from 'react';

import Footer from '@components/Footer';
import Header from '@components/Header';

import { ContentWrapper, LayoutContainer } from './styled';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
