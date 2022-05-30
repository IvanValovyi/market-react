import React from "react"

function Product({product}){
    return(
        <div className="product">
            <p className="name">{product.name}</p>
        </div>
    )
}

export default Product