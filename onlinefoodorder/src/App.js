import React, { Fragment ,useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown,setCartIsShown] = useState(false);

  const hideCardHandler=()=>{
     setCartIsShown(false);
  }
  const showCardHandler=()=>{
    setCartIsShown(true);
 }

  return <CartProvider>
        
        {cartIsShown && <Cart onClose = {hideCardHandler}/>}
        
        <Header onShow={showCardHandler}/>
        
        <main>
          <Meals/>
        </main>

      </CartProvider>
}

export default App;
