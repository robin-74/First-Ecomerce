import React, { useEffect, useState } from 'react';
import '../styling/CardInfo.css';
import { setAmount , setDelete } from '../Store/Slice/ProductSlice';
import { useDispatch } from 'react-redux';
 
function CardInfo({ user }) {
  const [number, setNumber] = useState(1);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  const dispatch = useDispatch() ; 
 

  const handleRemove = (productId) => {
    dispatch(setDelete(productId))
  }

  useEffect(() => {
    dispatch(setAmount({ id: user.id, quantity: number }));
  }, [number, user.id, dispatch]);



console.log(user.quantity)
  return (
    <div className='frameframeframe1'>
      <div className="container py-3">
        <div className="card">
          <div className="row">
            <div className="col-md-7 px-3">
              <div className="card-block px-6">
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">{user.description}</p>
                <br />
                <div>
                  <input
                    name="number"
                    value={number}
                    onChange={(e) => handleChange(e)}
                    max="15"
                    min="1"
                    type="range"
                  />
                  <h1>Quantity: {number}</h1>
                  <h2>Adjust Quantity</h2> {/* Updated label */}
                </div>
              </div>
              <br/>
              <br/>
              <button onClick={() => handleRemove(user.id)} className='buttonremove'>Remove item</button>
            </div>
            <div className="col-md-5">
              {/* Remove or update the carousel based on your requirements */}
              <img className="d-block" src={user.image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default CardInfo;
