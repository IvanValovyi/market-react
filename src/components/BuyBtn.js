import React, { useState } from "react"

function BuyBtn(){
    const [show, setShow] = useState(true)

    return(
        <div>
            {show 
            ? <button onClick={()=>{setShow(false)}} className="buy">Buy</button>
            : <p>Not Available.</p>
        }
        </div>
    )
}

export default BuyBtn