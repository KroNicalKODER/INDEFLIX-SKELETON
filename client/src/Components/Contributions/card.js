import React from 'react'
import { Link } from 'react-router-dom'

const card = () => {
  const montFont = {
    fontFamily: 'Ubuntu',
    borderRadius: '7px'
  }
  return (
    <Link to={"video/test"}>
    <div className='cursor-pointer flex flex-col w-64 py-4 my-2 px-5 mx-3 overflow-hidden border-slate-800 border-[1px] transition duration-500 rounded-2xl hover:bg-slate-900 hover:ease-in-out shadow-2xl drop-shadow-xl'>
      <div className='overflow-hidden'>
      <img src='https://static.tvtropes.org/pmwiki/pub/images/the_stockholms.jpg' alt='noe' className='rounded-lg h-[180px] object-none'/>
      </div>
      <div className='flex flex-col'>
        <div className='mt-2 text-lg text-slate-300' style={montFont}>The Stockholmes</div>
        <div className='text-sm text-slate-600' style={montFont}>Contributed- Animator_xyz</div>
        <div className='text-sm text-slate-400' style={montFont}>1.5m views</div>
        <div className='text-sm text-slate-400' style={montFont}>Posted 10hr ago</div>
        {/* <div>desc</div> */}
      </div>
    </div>
    </Link>
  )
}

export default card