import React from "react"

import { store } from "../../store"
import { Provider } from 'react-redux'

import Header from '../Header'
import Footer from '../Footer'

import '../../assets/sass/main.sass'

function Layout({child}){
    return(
        <div className="default_layout">
            <Provider store={store}>
                <Header/>
                <main>{child}</main>
                <Footer/>
            </Provider>
        </div>
    )
}

export default Layout