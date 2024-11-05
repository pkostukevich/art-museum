import React from 'react';
import './App.css';
import './styles/common.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Favorites from '@pages/Favorites/Favorites';
import Painting from '@pages/PaintingInfo/PaintingInfo';
import Layout from './components/Layout/Layout';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

function App(): React.ReactElement {
  return (
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
  );
}

export default App;
