import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ErrorBoundary from '@components/ErrorBoundary';
import Layout from '@components/Layout';
import router from '@router/router';
import GlobalStyles from '@styles/global';

const AppRouter: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <ErrorBoundary>
          <Routes>
            {router.map((route: { path: string; element: React.ReactNode }) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </ErrorBoundary>
      </Layout>
    </>
  );
};

export default AppRouter;
