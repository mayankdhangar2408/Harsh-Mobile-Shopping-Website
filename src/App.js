
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import mobiles_banner from './Components/Assets/banner_mens.png'
import audio_banner from './Components/Assets/banner_women.png'
import chargers_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mobiles' element={<ShopCategory banner={mobiles_banner} category="mobiles"/>}/>
        <Route path='/audio' element={<ShopCategory banner={audio_banner} category="audio"/>}/>
        <Route path='/chargers' element={<ShopCategory banner={chargers_banner} category="chargers"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=":productID" element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
