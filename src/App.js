import React, { useState } from 'react';
import CustomThemeProvider from './Components/CustomThemeProvider';
import CartPage from './Components/Pages/CartPage';
import HomePage from './Components/Pages/HomePage';
import ShoppingCartProvider from './context/shoppingCartContext';

function App() {
  const [page, setPage] = useState('homePage');

  return (
    <CustomThemeProvider>
      <ShoppingCartProvider>
        <button type="button" onClick={() => setPage('homePage')}>Home Page</button>
        <button type="button" onClick={() => setPage('cartPage')}>Cart Page</button>
        {page === 'homePage' ? <HomePage /> : <CartPage />}
      </ShoppingCartProvider>
    </CustomThemeProvider>
  );
}

export default App;
