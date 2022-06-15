import React, {useState} from "react"
import { Link } from "react-router-dom"

import sprite from '../../assets/sprite.svg'

import Search from './Search'

function MobileMenu(){
    const [menu_class, setMenuClass] = useState('')

    function show_menu(){
        if (menu_class=='') {
            setMenuClass('active')
            document.body.classList.add('hidden')
            window.scrollTo(0, 0)
            return
        }
        setMenuClass('')
        document.body.classList.remove('hidden')
    }

    return(
        <div className="mob_menu_blok">
        <button className="mob_menu_btn" onClick={show_menu}>
            <svg>
                <use href={`${sprite}#menu`}></use>
            </svg>
        </button>

        <div className={`mobile_menu ${menu_class}`}>
            <h2>Quality Closes</h2>
            <svg className="close" onClick={show_menu}>
                <use href={`${sprite}#close`}></use>
            </svg>

            <nav>
                <Link to='/' onClick={show_menu}>HOME</Link>
                <Link to='/shop' onClick={show_menu}>SHOP</Link>
                <Link to='/about' onClick={show_menu}>ABOUT</Link>
            </nav>

            <Search is_mobile={true} close_func={show_menu}/>
            
        </div>
        </div>
    )
}

export default MobileMenu