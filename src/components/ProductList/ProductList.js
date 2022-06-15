import React from "react"

import Product from './Product'

function ProductListComponent({products}){
    return(
        <div className="product_list">
             {
                products.map(el=>{
                    return(
                        <Product product={el} index={products.indexOf(el)} key={products.indexOf(el)}/>                            
                    )
                })
            }
        </div>
    )
}

export default ProductListComponent