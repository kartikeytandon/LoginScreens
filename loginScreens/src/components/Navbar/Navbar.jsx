import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from "react-icons/cg";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div id='companyLogo'></div>
        <div id='searchBar'>
            <input type="text" />
        </div>
        <div id='sellerApp'>
            <p>Become a Seller</p>
        </div>
        <div id='utilityBtn'>
            <AiOutlineShoppingCart id='btn' />
            <AiOutlineHeart id='btn' />
            <CgProfile id='btn' />
        </div>
    </div>
  )
}

export default Navbar