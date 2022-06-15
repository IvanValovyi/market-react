import React, { useEffect, useState } from "react"

import sprite from '../../assets/sprite.svg'

import { Link } from "react-router-dom"

import { useParams } from "react-router-dom"
import { get_data } from "../../fetch"

import AddToBasketBtn from '../AddToBasketBtn'
import BuyBtn from "../BuyBtn"

function DetailProdInfo(){
    let sizes = ['L', 'M', 'XL', 'XXL']
    
    let productId = useParams().productId

    const [product, setProduct] = useState([])

    useEffect(()=>{
        get_data(`https://market-api-ivan.herokuapp.com/products/${productId}`, setProduct)
    },[])

    return(
        <div className="detail_prod_info">
            { product.length != 0 ?
            <div className="show">
                <div className="content">
                    <img src={require(`../../assets/images/${product.src}`)}/>

                    <div className="text_blok">
                        

                        <div className="main_info">
                            <div className="goods_name">
                                <h2 className="name">{product.name}</h2>

                                <div className="verified">
                                    <svg>
                                        <use href={`${sprite}#tick`}/>
                                    </svg>
                                    <p>Verified Goods</p>
                                </div>
                            </div>
                            
                            <div className="price_blok">
                                <p className="price">Price: <b>{product.price}$</b></p>
                                <BuyBtn/>
                            </div>
                        </div>

                        <div className="sizes">
                            <h3>Available Sizes</h3>
                            <div className="sizes_list">
                                {
                                    sizes.map(el=>{
                                        return(
                                            <div className="size" key={sizes.indexOf(el)}>{el}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="description">
                            <h3>Description</h3>
                            <p className="text">{product.description}</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>

                <div className="buttons">
                    <AddToBasketBtn product={product}/>
                    <BuyBtn/>
                    <Link to='/shop' className="to_shop">To Shop</Link>
                </div>
            </div>
            :
            <div>Sorry, we can't show you this product.</div>
            }
        </div>
    )
}

export default DetailProdInfo