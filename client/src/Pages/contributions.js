import React from 'react'
// import Sidepane from '../Components/sidePane/sidepane'
import Header from '../Components/header'
import Cards from '../Components/Contributions/cards'

const contributions = () => {
    const backgroundStyle = {
        // background: "linear-gradient(287.56deg, #00031A 0%, rgba(15, 23, 95, 0.96) 100%)"
        backgroundColor: '#14001E'
    }
  return (
    <div className='h-screen' style={backgroundStyle}>
        <div>
          {/* <Sidepane/> */}
          <Header/>
        </div>
        <div className='flex'>
            <Cards/>
        </div>
    </div>
  )
}

export default contributions