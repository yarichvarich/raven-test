import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IndexPage } from '@src/pages/Index';
import { CartPage } from '@src/pages/Cart';
import { Layout } from '@src/components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="*" element={<IndexPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
