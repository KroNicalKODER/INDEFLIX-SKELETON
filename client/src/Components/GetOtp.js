import React from 'react'
import Zeus from '../images/LandingPage/zeus-landing.png'

const GetOtp = () => {
  const mystyle = {
    background: "linear-gradient(99.78deg, rgba(217, 217, 217, 0.42) 4.09%, rgba(217, 217, 217, 0) 104.19%)",
    boxShadow: "7px 11px 17px 9px rgba(0, 0, 0, 0.25)",
    // border: "2px solid red"
  };
  const imgSize = {
    width: '40rem'
  }
  return (
    <>
    <div className='absolute w-screen flex justify-end'>
      <img src={Zeus} style={imgSize} alt=""/>
    </div>
    <div className='ml-14 mt-8 w-fit px-12 pr-60 backdrop-blur-sm rounded-2xl py-4' style={mystyle}>
        <div className='text-xl mt-4'>Get Started Now</div>
        <input type="email" class="peer ..." placeholder="Enter mobile" className='text-black w-96 px-4 py-1 my-4 rounded-xl' />
        <button className='bg-indigo-600 block rounded-xl px-5 py-1 text-m'>GetOtp</button>
        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
        Please provide a valid email address.
        </p>
    </div>
    </>
  )
}

export default GetOtp