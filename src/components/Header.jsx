import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { AiOutlineShoppingCart }  from "react-icons/ai"



const Header = () => {
  return (
    <nav>
       <h1>Lil things</h1>
      <main>
      <HashLink to={"/#Home"}>Home</HashLink>
      <HashLink to={"/Contact"}>Contact</HashLink>
      <HashLink to={"/#About"}>About</HashLink>
      <HashLink to={"/#Brands"}>Brands</HashLink>
      <HashLink to={"/Services"}>Services</HashLink>
      <HashLink to={"/Shop"}>Shop</HashLink>
      <HashLink to={"/Cart"}><AiOutlineShoppingCart size={30}/></HashLink>
      </main>
    </nav>
  )
}

export default Header