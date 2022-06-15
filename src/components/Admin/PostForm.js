import React, { useState } from "react"

function PostForm(){
const [name, setName] = useState('')
const [price, setPrice] = useState('')
const [url, setUrl] = useState('')
const [src, setSrc] = useState('')
const [description, setDescription] = useState('')

const myHeaders = new Headers
myHeaders.append('Content-Type', 'application/json')

const [error, setError] = useState(false)

function change_input(e, func){
    func(e.target.value)
}

async function post(e){
    e.preventDefault()
    let data = {password:localStorage.getItem('auth_password'), id:localStorage.getItem('auth_id'), content:{name, price, url, src, description}}
    data = JSON.stringify(data)
    if (name && price && url && src && description) {
        fetch('https://market-api-ivan.herokuapp.com/products', {
            method:"POST",
            mode:"cors",
            cache:'default',
            headers:myHeaders,
            body:JSON.stringify({
                password:localStorage.getItem('auth_password'),
                id:localStorage.getItem('auth_id'),

                content:{ name, price, src, description, url }
            })
        })
        
        .then((res)=>{
            console.log(res);
        })
    } else {
        console.log('Error');
        setError(true)
    }
}

return(
    <form className="post_product">
        <input type='text' placeholder="Name..." onChange={(e)=>{change_input(e, setName)}}/>
        <input type='text' placeholder="Price..." onChange={(e)=>{change_input(e, setPrice)}}/>
        <input type='text' placeholder="Image src..." onChange={(e)=>{change_input(e, setSrc)}}/>
        <input type='text' placeholder="Description..." onChange={(e)=>{change_input(e, setDescription)}}/>
        <input type='text' placeholder="Url..." onChange={(e)=>{change_input(e, setUrl)}}/>
        <button className="post" onClick={post}>POST</button>
    </form>
)
}

export default PostForm