import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {id} = useParams()
  return (
    <div
    className='bg-blue-400 text-xl'
    >User:{id}</div>
  )
}

export default User