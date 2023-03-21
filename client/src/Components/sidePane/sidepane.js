import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {GoThreeBars} from 'react-icons/go'
import Logout from '../../Pages/Logout'
import Login from '../Login'

const Sidepane = () => {
  const [mobile, setMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
  useEffect(() => {
    window
    .matchMedia("(max-width: 768px)")
    .addEventListener('change', e => setMobile( e.matches ));
  }, []);
  const montFont = {
    fontFamily: 'Montserrat',
    borderRadius: '7px'
  }

  const [showLogout,setShowLogout] = useState(false);
  const [showLogin,setShowLogin] = useState(false);
  const handleShowClick = () => {
    setShowLogout(true);
  }
  const handleClose = () => {
    setShowLogout(false);
  }
  const handleShowClickLogin = () => {
    setShowLogin(true);
  }
  const handleCloseLogin = () => {
    setShowLogin(false);
  }

  return (
    <div className='select-none'>
    <button className={`${mobile ? "block" : "hidden"} fixed py-8 px-8`}><GoThreeBars className='text-3xl'/></button>
    <div className= {`fixed ${mobile ? "hidden" : "flex"} mt-7 flex-col ml-10 w-[15%] h-[90%] border-slate-700 border-r-[1px]`} >
      <h1 className='text-[1.8rem]'>INDEFLIX</h1>
      <ul className='mt-11 -ml-3 w-[100%]' style={montFont}>
        <Link to='/premium'>
          <li className='rounded-md cursor-pointer py-3 pl-3 transition duration-500 ease-out hover:bg-slate-400 hover:ease-in-out '>
            Premium
          </li>
        </Link>
        <Link to='/global'>
          <li className='rounded-md cursor-pointer py-3 pl-3 transition duration-500 ease-out hover:bg-slate-400 hover:ease-in-out'>
            Global
          </li>
        </Link>
        <Link to='/'>
          <li className='cursor-pointer py-3 pl-3 transition rounded-md duration-500 ease-out hover:bg-slate-400 hover:ease-in-out'>
            Contributions
          </li>
        </Link>
        <Link to='/About'>
          <li className='cursor-pointer py-3 pl-3 rounded-md transition duration-500 ease-out hover:bg-slate-400 hover:ease-in-out'>
            About
          </li>
        </Link>
        <Link to='/profile'>
          <li className='cursor-pointer rounded-md py-3 pl-3 transition duration-500 ease-out hover:bg-slate-400 hover:ease-in-out'>
            Profile
          </li>
        </Link>
        <div>
        <li onClick={handleShowClick} className='border-slate-700 rounded-md border-b-[0.1rem] cursor-pointer py-3 pl-3 transition duration-500 ease-out hover:bg-slate-400 hover:ease-in-out'>
          Logout
        </li>
        <li onClick={()=>setShowLogin(true)} className='border-slate-700 rounded-md border-b-[0.1rem] cursor-pointer py-3 pl-3 transition duration-500 ease-out hover:bg-slate-400 hover:ease-in-out'>
          Login
        </li>
        </div>        
      </ul>
      <ul className='mt-5 w-[100%] text-slate-500' style={montFont}>
        <li className='flex justify-between'>
          <div className='text-white'>Filter</div>
          <div className='cursor-pointer text-sm text-blue-600 underline mr-4'>More Filters</div>
        </li>
        <li className='mt-5 flex'>
          <input type="radio" name='money' className='w-3' /><div className='ml-1 text-sm'> Free only</div>
        </li>
        <li className='mt-1 flex'>
          <input type="radio" name='money' className='w-3' /><div className='ml-1 text-sm'> Premium only</div>
        </li>
        <li className='mt-1 flex'>
          <input type="radio" name='money' className='w-3' /><div className='ml-1 text-sm'> Both</div>
        </li>
        <li className='mt-5 flex'>
          <input type="radio" name='animType' className='w-3' /><div className='ml-1 text-sm'> Teen animations</div>
        </li>
        <li className='mt-1 flex'>
          <input type="radio" name='animType' className='w-3' /><div className='ml-1 text-sm'> Kids animations</div>
        </li>
        <li className='mt-1 flex'>
          <input type="radio" name='animType' className='w-3' /><div className='ml-1 text-sm'> All</div>
        </li>
        <li className='mt-5 flex'>
          <input type="radio" name='vdoType' className='w-3' /><div className='ml-1 text-sm'> Most relevant</div>
        </li>
        <li className='mt-1 flex'>
          <input type="radio" name='vdoType' className='w-3' /><div className='ml-1 text-sm'> Most Watched</div>
        </li>
        <li className='mt-1 flex'>
          <input type="radio" name='vdoType' className='w-3' /><div className='ml-1 text-sm'> Newest first</div>
        </li>

      </ul>
    
    </div>
    <Logout show = {showLogout} close = {handleClose}/>
    <Login show = {showLogin} handleCloseLogin = {handleCloseLogin}/>
    </div>
  )
}

export default Sidepane