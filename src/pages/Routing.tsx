import { createBrowserRouter } from 'react-router-dom';
import { IndexPage } from '@src/pages/Index';

export const createRouter = () => {
  return createBrowserRouter([
    { path: '/', element: <IndexPage /> },
    { path: 'cart', element: <></> },
    { path: '*', element: <IndexPage /> },
  ]);
};
