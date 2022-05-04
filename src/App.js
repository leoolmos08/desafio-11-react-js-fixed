import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <div className='espacio'></div>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path ='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
