import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ProductList from '../components/ProductList';
import ProductSort from '../components/ProductSort';
import '../styling/ProductPage.css';

function ProductPage() {
  return (
    <div className='product-page'>
      <NavBar />
      <div className='product-list-container'>
        <div className='ProductSort'>

        <ProductSort  />
        </div>
        
        <div className='ProductList'>
         
        <ProductList  />
        </div>
        <br/>
       <br/>
      </div>
      <br/>
       <br/>
       <br/>
      <Footer />
    </div>
  );
}

export default ProductPage;
