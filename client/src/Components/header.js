import React from 'react'

const header = () => {
  const backgroundNone = {
    background: 'none'
  }
  const montFont = {
    fontFamily: 'Montserrat',
    borderRadius: '7px'
  }
  const backgroundStyle = {
    // background: "linear-gradient(287.56deg, #00031A 0%, rgba(15, 23, 95, 0.96) 100%)"
    backgroundColor: '#14001E'
}
  return (
    <div className='fixed flex ml-80 w-[70%] z-10 border-slate-700 border-b-2 py-7' style={backgroundStyle}> 
        <input type='search' placeholder='Search' className='w-[87%] py-2 px-3 border-white border-[1px] mr-1' style={{...backgroundNone,...montFont}} />
        <button className='bg-indigo-500 border-slate-400 border-2 px-7 mx-2 transition duration-500 hover:bg-indigo-400' style={montFont}>Search</button>
        <hr className=''/>
    </div>
  )
}

export default header