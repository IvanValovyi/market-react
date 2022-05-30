import React from "react"

import { useParams } from "react-router-dom"

function DetailProdInfo(){
    let productId = useParams().productId

    function add_to_basket(index){
        let basket = localStorage.getItem('basket')
        if (basket) {
            basket = JSON.parse(basket)
            let new_basket = JSON.stringify(basket.push(index))
            return localStorage.setItem('basket', new_basket)
        }
        localStorage.setItem('basket', [index])
    }

    return(
        <div className="detail_prod_info">
            <p className="params">{productId}</p>
            <button className="add_to_basket" onClick={add_to_basket(productId)}>Add To Basket</button>
        </div>
    )
}

export default DetailProdInfo