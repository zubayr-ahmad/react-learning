import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(
    //     ()=>{
    //         fetch('https://api.github.com/users/zubayr-ahmad')
    //         .then(res=>res.json())
    //         .then(data=>{
    //             console.log(data)
    //             setData(data)
    //         })
    //     }
    //     ,[])
  return (
    <div>
      Github followers: {data.followers}
          <img src={data.avatar_url} alt="github image" />
    </div>
  )
}

export default Github

export const getGithubUserInfo = async () =>{
    const res = await fetch('https://api.github.com/users/zubayr-ahmad')
    return res.json()
}
