import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <div className='conatiner'>
        <div className='row'>
          <div className='col-md py-5 text-center'>
            <h2 className=' py-5'>Page Not Found || 404 Not Found</h2>
            <button className='error-btn'><NavLink to='/'>Go To Home</NavLink></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorPage