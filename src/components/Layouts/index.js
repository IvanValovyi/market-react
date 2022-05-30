import React from "react"

import Header from '../Header'
import Footer from '../Footer'

function Layout({child}){
    return(
        <div>
            <Header/>
            <main>{child}</main>
            <Footer/>
        </div>
    )
}

export default Layout