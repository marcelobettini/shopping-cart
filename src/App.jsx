import './App.css';
import { ProductContextProvider } from './context/ProductsContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './pages/Home';
import ProductsList from './pages/ProductsList';

function App() {

  return (
    <BrowserRouter>
      <ProductContextProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/products' element={<ProductsList />}></Route>
        </Routes>
      </ProductContextProvider>
    </BrowserRouter>
  );
}
export default App;
