import React, { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

import PostForm from "./PostForm"
import DeleteList from "./DeleteList"

function AdminPage(){
    let navigate = useNavigate()

    async function check_auth(){
        let res = await fetch(`https://market-api-ivan.herokuapp.com/auth?password=${localStorage.getItem('auth_password')}&id=${localStorage.getItem('auth_id')}`)
        let data = await res.json()

        if (!data) {
            return navigate('/login', ({replace:true}))
        }
        // localStorage.removeItem('auth_password')
    }

    useEffect(()=>{
        check_auth()
    }, [])

    return(
        <div className="admin_page">
            Admin Page
            <PostForm/>
            <DeleteList/>
        </div>
    )
}

export default AdminPage