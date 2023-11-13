

import React from 'react'
import '../styling/CardTotal.css'
import { useSelector } from 'react-redux'
function CardTotal() {
  const data = useSelector((state) => state.Products.cart)
  let total = 0;

  data.map((product) => {
    total += product.price * product.quantity;
    return null; 
  });
  const handleIncrement = () => {
    
  };
  
  return (
    <div className='cardt-frame1'>
        <div className='tit-1'><h1>
            <strong>
            ORDER SUMMARY
            </strong>
            <hr/>
          </h1>
          </div>
        <div>
          {data.map((product) => {
            return (
              <div style={{backgroundColor:'whitesmoke' , margin:'10px' , borderRadius:'5px'}}>
                {product.name} <br/>
                amount: x{product.quantity}
              </div>
            )
          })}
        </div>
        
        <br/>
        <h2>Total in usd: {total} $</h2>
        <h2>Total in lbp : LBP: {(total * 99340).toLocaleString() } </h2>
        <br/>
        
        
        <button>CheckOut</button>
    </div>
  )
}

export default CardTotal