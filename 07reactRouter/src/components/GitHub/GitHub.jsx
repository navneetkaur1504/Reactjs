import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
      const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/navneetkaur1504')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Followers: {data.followers} 
    <img src={data.avatar_url} alt="Git Profile" width={300}></img>
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/navneetkaur1504')
    return response.json()
}