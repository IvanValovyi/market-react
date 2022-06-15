import React, { useState } from "react"

import { Link } from "react-router-dom"

import Basket from './Basket'
import MobileMenu from "./MobileMenu"
import Search from "./Search"

function Header(){
    

    return(
        <header>
            <h1 className="logo">Quality Closes</h1>

            <nav className="desctop">
                <Link to='/'>HOME</Link>
                <Link to='/shop'>SHOP</Link>
                <Link to='/about'>ABOUT</Link>
            </nav>
            
            <div className="buttons">
                <Search is_mobile={false}/>
                <Basket/>
                <MobileMenu/>
            </div>
        </header>
    )
}

export default Header