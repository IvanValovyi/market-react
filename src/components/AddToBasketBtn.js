import React, {useEffect, useState} from "react"

import { useDispatch } from "react-redux"
import { plus, minus } from '../store/features/basket/slice'
import { useSelector } from 'react-redux'

function AddToBasketBtn({product}){
    let dispatch = useDispatch()

    const count = useSelector((state)=>state.basket.value)

    const [is_in_basket, setIsInBasket] = useState(false)

    async function add_to_basket(){
        let basket = localStorage.getItem('basket')
        if (basket) {
            basket = await JSON.parse(basket)
            await basket.forEach(el => {
                if (el._id == product._id) {
                    basket.splice(basket.indexOf(el), 1)
                    dispatch(minus())
                }
            })
            basket.push(product)
            setIsInBasket(true)
            dispatch(plus())
            let new_basket = JSON.stringify(basket)
            localStorage.setItem('basket', new_basket)
        } else {
            localStorage.setItem('basket', JSON.stringify([product]))
            dispatch(plus())
            setIsInBasket(true)
        }
    }

    useEffect(()=>{
        if(localStorage.getItem('basket')){
            let basket = localStorage.getItem('basket')
            basket = JSON.parse(basket)
            let in_basket = basket.filter(el => el._id == product._id) || []
            in_basket.length>=1 ? setIsInBasket(true) : setIsInBasket(false)
        }
    }, [count])

    return (
        <button onClick={add_to_basket} className="to_basket">{!is_in_basket ? <span>Add To Basket</span> : <span>In Basket</span>}</button>
    )
}

export default AddToBasketBtn