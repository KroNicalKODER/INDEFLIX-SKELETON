import React from 'react'
import GetOtp from '../Components/GetOtp'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import BecomeContributor from '../Components/EX-landing/BecomeContributor'
import WatchAnywhere from '../Components/EX-landing/WatchAnywhere'
import GetSub from '../Components/EX-landing/GetSub'
import Copyright from '../Components/Copyright'
import Login from '../Components/Login'

const LandingPage = () => {
  
  return (
    <>
    <div className='h-screen'>
        <Navbar/>
        <Login/>
        <GetOtp/>
        <Title/>
    </div>
      <BecomeContributor/>
      <WatchAnywhere/>
      <GetSub/>
      <Copyright/>
    </>
  )
}

export default LandingPage