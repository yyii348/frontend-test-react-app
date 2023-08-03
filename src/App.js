import './App.css';
import Navbar from './components/Navbar.js';
import ItemDescription from './components/ItemDescription';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState([]);
  const getCartItems = (getItemCount, getCartItems) => {
    setCartItems(getCartItems);
    setItemCount(getItemCount);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Navbar itemCount={itemCount} cartItems={cartItems}/>
      </div>

      <div className="Item-content">
        <ItemDescription onClick={getCartItems}/>
      </div>
    </div>

    
  );
}

export default App;
