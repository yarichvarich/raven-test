import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, CartPage } from '@src/pages';
import { Layout } from '@src/components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
