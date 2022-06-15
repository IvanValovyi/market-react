import React, { useEffect, useState } from "react"

import {get_data} from '../../fetch'

function DeleteList(){
    const [all_prod, setAllProd] = useState([])

    const myHeaders = new Headers
    myHeaders.append('Content-Type', 'application/json')

    useEffect(()=>{
        get_data('https://market-api-ivan.herokuapp.com/products', setAllProd)
    }, [])

    function delete_product(url){
        fetch(`https://market-api-ivan.herokuapp.com/products/${url}`, {method:"DELETE"})
    }

    return(
        <div className="product_list">
            {
                all_prod.map(el=>{
                    return(
                        <div className="product" key={all_prod.indexOf(el)}>
                            {el.name}
                            <button onClick={()=>{delete_product(el.url)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DeleteList