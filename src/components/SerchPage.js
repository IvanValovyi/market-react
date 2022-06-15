import React, { useEffect, useState } from "react"
import { get_data } from "../fetch"

import { useSelector } from 'react-redux'
import ProductListComponent from "./ProductList/ProductList"


function SearchPage(){
    const input_val = useSelector((state)=>state.search.input_val)
    const [search_result, setSearchResult] = useState(false)

    useEffect(()=>{
        if(input_val){
            get_data(`https://market-api-ivan.herokuapp.com/search/${input_val}`, setSearchResult)
        }
    }, [input_val])

    return(
        <div className="search_page">
            { search_result 
            ? <ProductListComponent products={search_result}/>
            : <div className="error">Error</div>
            }
        </div>
    )
}

export default SearchPage