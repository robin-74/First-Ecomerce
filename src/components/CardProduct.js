

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styling/CardProduct.css'
import CardInfo from './CardInfo';

function CardProduct() {
    const dataCart = useSelector((state) => state.Products.cart);
    const dispatch = useDispatch();
    console.log(dataCart)
    
  return (
    <div className='c-p-frame1' >


      {dataCart.map((user) => {
        return (
            <>
            <CardInfo user={user}/></>
        )
      })}
        
       
    </div>
  )
}

export default CardProduct