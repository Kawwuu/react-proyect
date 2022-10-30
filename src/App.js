import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import CartProvider from "./context/CartContext";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer texto='GameWorld'/>} />
					<Route
						path="/categoria/:categoriaId"
						element={<ItemListContainer />}
					/>
					<Route path="/cart" element={<Cart />} />
					<Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
				</Routes>
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;