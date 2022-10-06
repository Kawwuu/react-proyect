import './App.css';

import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer texto='GamesWorld' />
    <ItemDetailContainer   />
    </>
  );
}

export default App;
