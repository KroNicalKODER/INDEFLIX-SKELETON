import React from 'react'
import AnimChar from '../../images/LandingPage/anime-char.png'

const WatchAnywhere = () => {
    const imgStyle = {
        marginLeft : "58rem",
        height: "calc(100vh - 100px)",
        zIndex : "10"
    }
    const texStyle = {
        marginLeft: "11rem",
        height: "calc(100vh - 100px)",
        zIndex : "10"
    }
    const styles ={
        background: "linear-gradient(99.78deg, rgba(217, 217, 217, 0.18) 4.09%, rgba(217, 217, 217, 0.08) 104.19%)",
        boxShadow: "7px 11px 17px 9px rgba(0, 0, 0, 0.25)",
        width: "59rem",
        height: "24rem",
        borderRadius: "1.6rem",
        marginRight: "30rem"
    }
    const fontUbuntu={
        fontFamily: "'Ubuntu', sans-serif",
        fontSize: "1.1rem"
    }
    const purpleFont={
        color: '#A381EB'
    }
    const ContributeSize={
        fontSize : "2.8rem",
    }
    const bgStyle = {
        background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(252.9deg, #000000 0%, rgba(1, 9, 78, 0.83) 106.28%)"

    }
  return (
    <div style={bgStyle}>
        <img className='absolute' style={imgStyle} src={AnimChar} alt=""/>
        <div className='absolute h-14 ml-64 mt-32' style={styles}></div>
        <div style={texStyle} className='flex flex-col justify-center'>
            <div style={ContributeSize}>Watch Anywhere, Anytime</div>
            <div style={purpleFont} className='ml-20'>Watch on your phone, smart TV, Laptop<br/> or the Tablet</div>
            <div style={fontUbuntu}><br/>Enjoy uninterrupted entertainment and watch your<br/> favourite animation anytime or anywhere.</div>
        </div>
        <div className='h-3 bg-gray-500'/>
    </div>
  )
}

export default WatchAnywhere