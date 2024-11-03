import React from 'react';
import './App.css';
import './styles/common.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Favourites from '@pages/Favorites/Favourites';
import Painting from '@pages/PaintingInfo/PaintingInfo';
import Layout from './components/Layout/Layout';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paintings/:id" element={<Painting />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
