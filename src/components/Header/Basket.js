import React, { useEffect, useState } from "react"
import sprite from '../../assets/sprite.svg'

import { useSelector } from 'react-redux'

import { useDispatch } from "react-redux"
import { minus } from '../../store/features/basket/slice'

import BuyBtn from "../BuyBtn"

function Basket(){
    const dispatch = useDispatch()

    const bask_count = useSelector((state)=>state.basket.value)

    const [basket_data, setBasketData] = useState(JSON.parse(localStorage.getItem('basket')) || false)

    const [basket_menu_class, setBasketMenuClass] = useState('basket_menu')

    const [basket_count_class, setBaskCountClass] = useState('count')
    
    function show_basket(){
        if (basket_menu_class == 'basket_menu') {
            document.body.classList.add('hidden')
            window.scrollTo(0, 0)
            return setBasketMenuClass('basket_menu active')
        }
        document.body.classList.remove('hidden')
        setBasketMenuClass('basket_menu')
    }

    function delete_basket_el(url){
        let all_basket_el = JSON.parse(localStorage.getItem('basket'))
        all_basket_el.forEach(el => {
            if (el.url == url) {
                all_basket_el.splice(all_basket_el.indexOf(el), 1)
            }
        })
        localStorage.setItem('basket', JSON.stringify(all_basket_el))
        dispatch(minus())
        setBasketData(all_basket_el)
    }

    useEffect(()=>{
        let local_data = localStorage.getItem('basket')
        if (local_data) {
            setBasketData(JSON.parse(local_data))
        } else {
            setBasketData(false)
        }

        if (bask_count >= 10) {
            setBaskCountClass('count ten')
        } else if (basket_count_class!='count') {
            setBaskCountClass('count')
        }
    } ,[bask_count])

    return(
    <div className="basket">
        <div className="icon" onClick={show_basket}>
            <svg>
                <use href={`${sprite}#basket`}/>
            </svg>
            <p className={basket_count_class}>{bask_count}</p>
        </div>

        <div className={basket_menu_class}>
            <h3 className="title">Basket</h3>
            <svg className="close" onClick={show_basket}>
                <use href={`${sprite}#close`}/>
            </svg>
            
            <div className="basket_list">
            { basket_data && basket_data.length >= 1
                ?
                basket_data.map(el=>{
                    return(
                        <div className="basket_el" key={basket_data.indexOf(el)}>
                            <img src={require(`../../assets/images/${el.src}`)}/>
                            <div className="info">
                                <p className="name">{el.name}</p>
                                <p className="price">Price: {el.price}$</p>
                                <BuyBtn/>
                            </div>

                            <button className="delete" onClick={()=>{delete_basket_el(el.url)}}>Delete</button>
                        </div>
                    )
                })
                :
                <p>Basket is empty</p>
            }
            </div>
        </div>
    </div>
    )
}

export default Basket