import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Favorites from '@pages/Favorites/Favorites';
import Painting from '@pages/PaintingInfo/PaintingInfo';
import Layout from '@components/Layout/Layout';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import '@styles/common.scss';

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paintings/:id" element={<Painting />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ErrorBoundary>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
);
