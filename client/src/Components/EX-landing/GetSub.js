import React from 'react'

const GetSub = () => {
    const fontUbuntu={
        fontFamily: "'Ubuntu', sans-serif",
        fontSize: "1.1rem"
    }
    const purpleFont={
        color: '#A381EB'
    }
    const styles ={
        background: "linear-gradient(99.78deg, rgba(217, 217, 217, 0.18) 4.09%, rgba(217, 217, 217, 0.08) 104.19%)",
        boxShadow: "7px 11px 17px 9px rgba(0, 0, 0, 0.25)",
        width: "59rem",
        height: "24rem",
        borderRadius: "1.6rem",
        marginLeft: "30rem"
    }
    const scrSize={
        background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(252.9deg, #000000 0%, rgba(1, 9, 78, 0.83) 106.28%)",
        height: "36rem",
    }
  return (
    <>
    <div style={scrSize}>
        <div className='absolute h-14 ml-96 mt-24' style={styles}></div>
        <div className='float-right mr-48 mt-48'>
            <div className='text-4xl'>Get your subscription and</div>
            <div className='text-4xl'>dive in</div>
            <div style={purpleFont} className='float-right block'>Start watching the animations now</div>
            <br/><div style={fontUbuntu}>Get on rent or take a subscription or watch in for<br/>free.</div>
            <div style={fontUbuntu}>To know About your subscription choices<br/></div>
            <button className='bg-indigo-700 px-2 py-1 mt-5 rounded-lg w-auto'>click here</button>
        </div>
    </div>
    <div className='h-3 bg-gray-500'/>
    </>
  )
}

export default GetSub