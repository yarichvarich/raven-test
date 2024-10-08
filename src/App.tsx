import { RouterProvider } from 'react-router-dom';
import { createRouter } from './pages/Routing';
import { Header } from './components/Header';

const router = createRouter();

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} fallbackElement={<div>Initital loading...</div>} />
    </>
  );
};

export default App;
