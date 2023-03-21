import React from 'react'
import indeLogo from '../images/logos/Indeflix LOGO (1).png'

const Copyright = () => {
  return (
    <div className='bg-black'>
        <div className='flex justify-around items-center'>
          <div>Indeflix.pvt.ltd</div>
          <img src= {indeLogo} alt='' className='w-40'/>
          <div>Copyright 2022-2045</div>
        </div>
    </div>
  )
}

export default Copyright