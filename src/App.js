import { Routes , Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';

import CartPage from './Pages/CartPage';


function App() {
  return (
  
    
    <div className="App">
    
            <Routes>
            
            <Route path='/' element={<HomePage/>} />
            <Route path='/Product' element={<ProductPage/>} />
            <Route path='/cart' element={<CartPage/>} />
            </Routes>
             
            
            
    </div>
   
  );
}

export default App;
