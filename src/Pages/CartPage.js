import React from 'react';
import NavBar from '../components/NavBar';
import CardProduct from '../components/CardProduct';
import CardTotal from '../components/CardTotal';
import '../styling/CardPage.css';
import Footer from '../components/Footer'

function CartPage() {
  return (
    <div className='card-f'>
      <div className='card-nav'>
        <NavBar />
      </div>
      <div className='card-frame'>
        <div className='card-product'>
          <CardProduct />
        </div>
        <div className='card-total'>
          <CardTotal />
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default CartPage;
