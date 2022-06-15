import React, { useEffect, useState } from "react"

import sprite from '../../assets/sprite.svg'

import { useNavigate } from 'react-router-dom'

import { useDispatch } from "react-redux"
import { setInpVal } from '../../store/features/search/slice'
import { useSelector } from 'react-redux'

function Search({is_mobile, close_func}){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const input_val = useSelector((state)=>state.search.input_val)

    const [search_menu_class, setSearchMenuClass] = useState('search_menu')

    function inputChange(e){
        dispatch(setInpVal(e.target.value))
    }

    function search(){
        if (!is_mobile) {
            setSearchMenuClass('search_menu')
        }
        if (input_val) {
            navigate(`/search`, ({replace:true}))
            if (close_func) {
                close_func()
            }
        }
    }

    useEffect(()=>{
        if (is_mobile) {
            setSearchMenuClass('search_menu active')
        }
    }, [])

    return(
        <div className="search">
            { !is_mobile &&
                <svg onClick={()=>{setSearchMenuClass('search_menu active')}}>
                    <use href={`${sprite}#search`}></use>
                </svg>
            }

            <div className={search_menu_class}>
                <input type='text' placeholder="Enter some text here..." onChange={inputChange} value={input_val}/>
                <button onClick={search}>{ input_val || is_mobile ? <span>Search</span> : <span>Close</span>}</button>
            </div>
        </div>
    )
}

export default Search