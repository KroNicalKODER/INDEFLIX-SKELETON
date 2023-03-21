import React from 'react'
import GadgetImg from '../../images/LandingPage/Gadgets.png'

const BecomeContributor = () => {
    const styles ={
        background: "linear-gradient(99.78deg, rgba(217, 217, 217, 0.18) 4.09%, rgba(217, 217, 217, 0.08) 104.19%)",
        boxShadow: "7px 11px 17px 9px rgba(0, 0, 0, 0.25)",
        width: "59rem",
        height: "24rem",
        borderRadius: "1.6rem",
        marginLeft: "30rem"
    }
    const bgstyle={
        background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(252.9deg, #000000 0%, rgba(1, 9, 78, 0.83) 106.28%)"
        // background : "none"
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
    const GadgetSize={
        width: "35rem",
        zIndex: "100"
    }
  return (
    <div className= 'h-1/2 w-full' style={bgstyle}>
        <div className='h-3 bg-gray-500'/>
        <div className='absolute h-14 ml-96 mt-24' style={styles}></div>
        <div className='flex justify-between mt-32 px-20 pr-40'>

            <img className='' src={GadgetImg} style={GadgetSize} alt=""/>

            <div className='flex items-end flex-col w-fit self-center'>
                <div style={ContributeSize}>BECOME A CONTRIBUTOR</div>
                <div className='text-xl' style={purpleFont}>Let this world see your imagination</div>
                <div style={fontUbuntu} className=''>Ever found problem of where to SHOW OFF your animation skills....
                    <br/>You are here in the right place.
                    <br/><br/>Become a CONTRIBUTOR now and get featured
                    <br/>Also get a chance to earn money and make some dozens of fans.
                </div>
                <br/><button className='flex self-start bg-indigo-700 px-3 py-1 rounded-lg'>Click Here</button>
            </div>
        </div>
        <div className='mt-32 h-3 bg-gray-500 shadow-3xl'/>
    </div>
  )
}

export default BecomeContributor