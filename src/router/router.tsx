import React from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import Favorites from '@pages/Favorites/Favorites';
import Home from '@pages/Home/Home';
import Painting from '@pages/PaintingInfo/PaintingInfo';

interface Route {
  path: string;
  element: React.ReactNode;
}

const router: Route[] = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.PAINTING_INFO + '/:id', element: <Painting /> },
  { path: ROUTES.FAVORITES, element: <Favorites /> },
  { path: ROUTES.NOT_FOUND, element: <Navigate to={ROUTES.HOME} /> },
];

export default router;
