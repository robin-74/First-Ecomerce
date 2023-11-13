import React from 'react';
import '../styling/ProductT.css';
import { Link } from 'react-router-dom';

function ProductT() {
  return (
    <div className='ProductFrame1'>
      <div>
        <img src='https://shinola-m2.imgix.net/media/wysiwyg/Holiday-23/HP/watches2.jpg?auto=format,compress&w=1920&h=1920&fit=max&q=90' alt='watches' />
        <Link to='/product' className='sectionButton'>
          Go to Watches Section
        </Link>
      </div>
 
      <div>
        <Link to='/product'>
          <img src='https://shinola-m2.imgix.net/media/wysiwyg/Holiday-23/HP/leather.jpg?auto=format,compress&w=1920&h=1920&fit=max&q=90'  alt='bag'/>
        </Link>
        <Link to='/Product' className='sectionButton'>
          Go to Bags Section
        </Link>
      </div>
    </div>
  );
}

export default ProductT;
