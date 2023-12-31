import React from 'react'
import {HashRouter as Router , Routes, Route} from "react-router-dom"

import Home from './components/Home'
import Footer from './components/Footer';
import Header from './components/Header.jsx';
import Contact from './components/Contact';
import Services from './components/Services';
import Shop from './components/Shop';
import Cart from './components/Cart';

import  "./styles/styles.scss";
import  "./styles/footer.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/contact.scss";
import "./styles/services.scss";
import "./styles/shop.scss";

import "./styles/mediaquery.scss"
import ShopContextProvider from './context/shop-context';



const App = () => {
  return (
    <ShopContextProvider>
    <Router>
        <Header />
        
        <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/Contact' element={<Contact />}/>
           <Route path='/Services' element={<Services />}/>
           <Route path='/Shop' element={<Shop />}/>
           <Route path='/Cart' element={<Cart />}/>
           <Route path= '*' element={<div>Page Not Found</div>}/>
        </Routes>
        
      <Footer />

      
           
    </Router>
    
    </ShopContextProvider>
  )
}

export default App