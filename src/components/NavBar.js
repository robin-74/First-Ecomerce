import { AiFillShopping, AiFillCustomerService } from 'react-icons/ai';
import { CiMenuBurger } from 'react-icons/ci';
import '../styling/NavBar.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetSearch } from '../Store/Slice/ProductSlice';
import { Link } from 'react-router-dom';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [ InputUser , setInputUser]  = useState('');
  const [backgroundColor, setBackgroundColor] = useState('black');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleChange = (e) => {
    setInputUser(e.target.value)
    console.log(InputUser)
  }
  const dispatch = useDispatch();
  useEffect(() => {dispatch(SetSearch(InputUser))} , [InputUser])
  const data = useSelector((state) => state.Products.cart)
  useEffect(() => {
    const intervalId = setInterval(() => {
      const colors = ['black', 'grey', 'rgb(113, 31, 31)'];
      const currentIndex = colors.indexOf(backgroundColor);
      const nextIndex = (currentIndex + 1) % colors.length;
      setBackgroundColor(colors[nextIndex]);
    }, 3000);

    return () => clearInterval(intervalId); //  
  }, [backgroundColor]);

  return (
    <div className='head'>
      <div className='Rate-nav' style={{ backgroundColor }}>Leb Rate $:99 000L.L</div>
      <div className='header-nav'>
        <span className='burger' onClick={toggleMenu}>
          <CiMenuBurger className='burger' />
        </span>
        <h1 className='hithub-logo'>Hithub_lb
</h1> <br/>   
        <p><input name='inputUser' onChange={handleChange} placeholder='Search' /></p>
        <p >
         
          <AiFillCustomerService className='customerServce' size={30} />
        </p>
         
        <p>
        <Link to='/cart'>   <AiFillShopping  size={40} ></AiFillShopping> <span className='cartcard'>
        {data.length}</span>       </Link>
          
          <p></p>
        </p>
        <div>
        
        </div>
       
      </div>
      <div className='nav-type1'>
          <p>WATCHES</p>
          <p>BAGS & ACCESSORIES</p>
          <p>JEWELRY</p>
          <p>SEASON DISCOUNT</p>
        </div> 
      {showMenu &&
        <div className='nav-type'>
          <Link to='/' >
          <p >Home</p>
          </Link>
          <Link to='/product' >
          <p >Items</p>
          </Link>
          
          <Link to='/cart' >
          <p >Cart</p>
          </Link>
          
          <Link to='/' >
          <p >FAQ</p>
          </Link>
          
        </div> 
       
      }
    </div>
  );
}

export default NavBar;