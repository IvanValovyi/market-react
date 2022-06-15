import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){
    let navigate = useNavigate()
    let [input_val, setInputVal] = useState('')

    function change_input(e){
        setInputVal(e.target.value)
    }

    async function logIn(){
        if (input_val) {
            let res = await fetch(`https://market-api-ivan.herokuapp.com/auth?password=${input_val}&id=${localStorage.getItem('auth_id')}`)
            let data = await res.json()
            console.log(data);
            if (data) {
                localStorage.setItem('auth_password', input_val)
                navigate('/admin', ({replace: true}))
            }
        }
    }

    return(
        <div className="login_page">
            <div className="form">
                <input type='text' onChange={change_input}/>
                <button className="send" onClick={logIn}>Log In</button>
            </div>
        </div>
    )
}

export default Login