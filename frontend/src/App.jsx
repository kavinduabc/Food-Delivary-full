import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Placeholder from './Pages/Placeholder/Placeholder';
import Footer from './Components/Footer/Footer';
import Cart from './Pages/Cart/Cart';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signin/Signup';



function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ccc'element={<Cart/>}/>
        <Route path='/order' element={<Placeholder />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
