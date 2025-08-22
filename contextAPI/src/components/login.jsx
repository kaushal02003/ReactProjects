import React from "react";
import { useState , useContext } from "react";
import UserContext from "../context/userContext";

function Login (){

    const [username , setusername ] = useState('')
    const [password , SetPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit= (e) => {
        e.preventDefault();
        setUser({username , password})
    }

    return (
        <>
        <input type="text" 
        value={username}
        onChange={(e)=> setusername(e.target.value)}
        placeholder="username"/>
        <input type="text"
        value={password}
        onChange={(e)=> SetPassword(e.target.value)}
        placeholder="Password" />
        <button onClick={handleSubmit}>Login</button>
        </>
    )
}

export default Login;