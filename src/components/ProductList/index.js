import React, {useEffect, useState} from "react"

import { Outlet, useParams } from "react-router-dom"

import ProductListComponent from "./ProductList"

import { get_data } from "../../fetch"

function ProductList(){
    let productId = useParams().productId
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        get_data('https://market-api-ivan.herokuapp.com/products', setProducts)
    },[])

    return(
        <div className="product_blok">
            { !productId 
                ?
                <ProductListComponent products={products}/>
                :
                <Outlet/>
            }
        </div>
    )
}

export default ProductList