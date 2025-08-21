import React from "react";
//import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data =  useLoaderData();

    //we can use this way but we also have a more optimized way
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("http://api.github.com/users/kaushal02003")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <>
    <div className="flex justify-center items-center p-3 bg-gray-500 font-bold">Github</div>
    <div className="flex flex-wrap justify-evenly bg-gray-400 p-4">
      <img className="h-32 w-32 rounded-full" src={data.avatar_url} />
      <div className="flex flex-col bg-gray-300 p-4">
      <div><b>Github accountName:</b> {data.name}</div>
      <div><b>Github repos:</b> {data.public_repos}</div>
      </div>
    </div>
    
    </>

  );
}

export default Github;

// This is the loader function for the Github component
// Always define these methods outside the component in a new file
 export const GithubLoader = async () => {
    const response = await fetch("http://api.github.com/users/kaushal02003");
    return response.json();
}