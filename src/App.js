import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';  

import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar texto='GameWorld' />
        <Routes>
          <Route path='/' element={<ItemListContainer  texto='GameWorld'/>} />
          <Route path='shop' element={<ItemListContainer />} />
          <Route path='aboutus' element={<ItemDetailContainer  />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
