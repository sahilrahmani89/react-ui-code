import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='p-4 '>
        <div> <Link to={'/'}>Home</Link></div>
        <div><Link to={'/box'}>Box As per 2d array o & 1</Link></div>
        <div><Link to={'/comment-widget'}>Comment Widget</Link></div>
        <div><Link to={'/create-circle'}>Create Circle</Link></div>
        <div><Link to={'/bar'}>Bar</Link></div>


    </div>
  )
}

export default Homepage