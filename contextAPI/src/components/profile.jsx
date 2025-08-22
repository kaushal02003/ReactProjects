import React from "react";
import UserContext from "../context/userContext";
import { useContext } from "react";

function Profile () {
    const {user} = useContext(UserContext)
        if(!user){
            return <h1>Please Login.</h1>
        }
    return (
        <h1>username: {user.username}</h1>
    )    
}

export default Profile