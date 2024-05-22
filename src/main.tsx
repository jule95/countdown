import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import AppState from './state/AppState.tsx';
import './i18n.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page1 from './pages/Page1/Page1.tsx';
import Page2 from './pages/Page2/Page2.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';
import config from './config.ts';

// https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
  {
    children: [{
      element: <Page1 />,
      path: config.routes.home,
    }, {
      element: <Page2 />,
      path: config.routes.page2,
    }],
    element: <App />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById(`root`)!).render(
  <AppState>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AppState>
);
