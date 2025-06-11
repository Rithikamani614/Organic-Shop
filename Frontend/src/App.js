import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import One from './Nav'
import Home from './Home';
import About from './About';
import Services from './Services';
import Products from './Products';
import Contact from './Contact';
import Cart from './Cart';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductDetail from './ProductDetails';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from './Form';
import LoginForm from './LoginForm';
import OrderSummary from './OrderSummary';
import AdminLogin from './admin/AdminLogin';
import Sidebar from './admin/Sidebar';
import Dashboard from './admin/AdminDashboard';

function App() {

  const [cartItems, setCartItems] = useState([]);

  return (
     <div>
    <Router>
      <div>
      <Header />
      </div>
      <div className='ten'>
        <ToastContainer theme='dark' position="top-center"/>
      <One cartItems={cartItems}/>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>}/>
         <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
         <Route path='/register' element={<RegisterForm/>}/>
         <Route path='/login' element={<LoginForm/>}/>
         <Route path='/order-summary' element={<OrderSummary cartItems={cartItems} setCartItems={setCartItems}/>}/>
         <Route path='/admin/login' element={<AdminLogin/>}/>
         <Route path="/admin/sidebar" element={< Sidebar />} />
         <Route path="/admin/dashboard" element={< Dashboard />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;


