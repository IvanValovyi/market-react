import React from "react"

import { Link } from "react-router-dom"

import AddToBasketBtn from "../AddToBasketBtn"
import BuyBtn from "../BuyBtn"

function Product({product, index}){
    return(
        <div className="product">
            <Link to={`/shop/${product.url}`} key={index} className='product_link'>
                <div className="image" style={{backgroundImage:`url(${require(`../../assets/images/${product.src}`)})`}}></div>
                <p className="name">{product.name}</p>
                <p className="price">Price: <b>{product.price}$</b></p>
            </Link>

            <div className="buttons">
                <AddToBasketBtn product={product}/>
                <BuyBtn/>
            </div>
        </div>
    )
}

export default Product