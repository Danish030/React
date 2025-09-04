// import React, { useState } from 'react'
// import { useEffect } from 'react'
import { useLoaderData } from "react-router"

function Github() {

    const data = useLoaderData()
//     const [data,setData]= useState([])
// useEffect(() => {
// fetch('https://api.github.com/users/Danish030')
// .then(response=>response.json())
// .then(data=>{
//     console.log(data);
//     setData(data)
// })
// }, [])




  return (
    <div 
      className='text-center m-4 bg-blue-200'
    >
      Github Followers: {data.followers !== undefined ? data.followers : "Loading..."}
      <img src={data.avatar_url !== undefined ? data.avatar_url : ""} alt="Github Avatar" />
    </div>
  )
}

export default Github

 // eslint-disable-next-line react-refresh/only-export-components
 export const githubInfo = async ()=>{
    const res = await fetch("https://api.github.com/users/Danish030")
    return res.json()
}

