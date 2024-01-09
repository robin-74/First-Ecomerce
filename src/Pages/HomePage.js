


import React from 'react'
import NavBar from '../components/NavBar'
import '../styling/HomePage.css'
 
import ProductT from '../components/ProductT'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

import { useGetProductsQuery } from '../thunk/ProductApi'
function HomePage() {
  const {data } = useGetProductsQuery();
  console.log(data)
  return (
    <div >
            <header   >
                <div className='navbar' >
                <NavBar />

                </div>
                    
                      
                      
            </header>
            <ProductT/>
            <div className='Carousel'>
            <Carousel/> 
            </div>
          
            <span className='footer'>
        <br/>
        <div>ᅠᅠ</div>
        <div>ᅠᅠ</div>
        <div>ᅠᅠ</div>
        <div>ᅠᅠ</div>
        <div>ᅠᅠ</div>
        <div>ᅠᅠ</div>
        <div>ᅠᅠ</div>
        <div>ᅠᅠ</div>
      
            <Footer/>
            </span>
        
            
           

            
    </div>
  )
}

export default HomePage