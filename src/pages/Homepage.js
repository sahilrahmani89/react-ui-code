import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='p-4 '>
        <div> <Link to={'/'}>Home</Link></div>
        <div><Link to={'/box'}>Box</Link></div>
    </div>
  )
}

export default Homepage