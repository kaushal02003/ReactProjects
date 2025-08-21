import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userId} = useParams();
    return (
        <div className="flex justify-center items-center font-bold p-3 bg-gray-500">
            User: {userId}
        </div>
    )
}

export default User;