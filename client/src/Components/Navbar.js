import React from 'react'
import 'tw-elements'
import Login from './Login'
import Signup from './signup'

const Navbar = () => {
  return (
    <div className='flex space-x-6 align-middle py-8 text-2xl justify-end px-14 '>
      <span>Community</span>
      <button type="button" class="inline-block bg-none active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#Login-User">
        Sign In
      </button>
      <Login/>
      <button type="button" class="inline-block bg-none active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#Signup-User">
        Sign Up
      </button>
      <Signup/>
    </div>
  )
}

export default Navbar