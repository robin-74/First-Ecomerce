import React, { useEffect, useState } from 'react';
import '../styling/ProductSort.css';
import { SortDesc, SortDesc2 } from '../Store/Slice/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

// ProductSort.js
function ProductSort() {
  const [price, setPrice] = useState(50);
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state) => state.Products.cathegory);

  const handleSliderChange = (event) => {
    setPrice(event.target.value);
    dispatch(SortDesc({  price: event.target.value }));
  };

  const handleCheckboxChange = (category) => {
    dispatch(SortDesc({ cathegory: category, price }));
  };

  return (
    <div className='ProductSort-frame1'>
       <h2>PRODUCT CATEGORY</h2>
      <button onClick={() => dispatch(SortDesc2(''))}>Reset Filter</button>
      <ul>
        <input
          type='checkbox'
          onClick={() => dispatch(SortDesc2('Watch'))}
          checked={selectedCategories.includes('Watch')}
        />{' '}
        Watches
      </ul>
      <ul>
        <input className='wallet1'
          type='checkbox'
          onClick={() => dispatch(SortDesc2('Wallet'))}
          checked={selectedCategories.includes('Wallet')}
        />{' '}
        Wallet
      </ul>
      <p>_____________</p>
      <h1>Price Range</h1>
      <p className='price2'>--{price} $</p>
      <input
        type='range'
        id='price'
        name='price'
        min='0'
        max='900'
        value={price}
        onChange={handleSliderChange}
      />
    </div>
  );
}
export default ProductSort