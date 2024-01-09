import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styling/CardP.css';
import { setCart } from '../Store/Slice/ProductSlice';

function CardP({ product }) {
  const dispatch = useDispatch();
  const [isJumping, setIsJumping] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleAddToCart = () => {
    dispatch(setCart(product));
    setIsJumping(true);

    // Hide the item after the jump animation completes
    setTimeout(() => {
      setIsHidden(true);
    }, 500);
  };

  return (
    <div className={`Cardp-frame1 ${isJumping ? 'jump' : ''} ${isHidden ? 'hide' : ''}`}>
      <div className="card" style={{ width: '18rem', height: '30rem', borderRadius: '10px' }}>
        <img style={{ height: '11rem', objectFit: 'cover' }} src={product.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}$</p>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default CardP;
