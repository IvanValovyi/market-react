import React from "react"

import { Link, Outlet, useParams } from "react-router-dom"

import Product from "./Product"

function ProductList(){
    let productId = useParams().productId
    let products = [{name:'Prod one'}, {name:'Prod two'}, {name:'Prod three'}]

    return(
        <div className="product_blok">
            { !productId 
                ?
                <div className="product_list">
                    <p>Product List</p>

                    <div>{
                        products.map(el=>{
                            return(
                                <Link to={`/shop/${products.indexOf(el)+1}`} key={products.indexOf(el)}>
                                    <Product product={el}/>
                                </Link>
                            )
                        })
                    }</div>
                </div>
                :
                <Outlet/>
            }
        </div>
    )
}

export default ProductList