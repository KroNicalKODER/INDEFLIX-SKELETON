import React from 'react'
// import Sidepane from '../Components/sidePane/sidepane'

const Profile = () => {
    
    const montFont = {
        fontFamily: 'Montserrat',
        borderRadius: '7px'
    }
    const textBgStyle = {
        backgroundClip: 'text',
        textFillColor: 'transparent',
        fontSize: '10rem',
        opacity: '0.02'
    }

    return (
        <div className='h-screen'>
            <div className='absolute ml-44 mt-24' style={textBgStyle}>
                MRADUL
            </div>
            <div className='absolute ml-[35rem] mt-[30rem]' style={textBgStyle}>
                ANIMATOR
            </div>
            <div className='ml-[27rem] pt-32 flex'>
                <div className='flex-1'  style={montFont}>
                    <ul className='text-slate-500 leading-10'>
                        <li>Nickname :</li>
                        <li>Channel Name :</li>
                        <li>Fans :</li>
                        <li>Liked Genre :</li>
                        <li>Speciality :</li>
                        <li>Likes :</li>
                        <li>Views :</li>
                        <li>Likes/Dislikes :</li>
                        <li>Content Count :</li>
                        <li>Hours Produced :</li>
                        <li>Last Active :</li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <ul className='leading-10'  style={montFont}>
                        <li>Krisped_h__mrd</li>
                        <li>LivE FoR AnimE</li>
                        <li>321,534</li>
                        <li>Action/Fighting</li>
                        <li>Animation and VFX</li>
                        <li>10,423,964</li>
                        <li>99,423,964</li>
                        <li>100.213</li>
                        <li>213</li>
                        <li>10,000</li>
                        <li>1 day ago</li>
                    </ul>
                </div>
                <div className='flex-1 -mt-16'>
                    <h1 className='flex text-[1.7rem]'>MRADUL
                    </h1>
                    <div class="relative ml-20 flex justify-center w-48 h-24 rounded-tl-full rounded-tr-full bg-slate-700">
                        <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" className='mt-5 w-32 absolute' alt="none" />
                    </div>
                    <div className='flex flex-col mt-24 ml-[4.5rem]'>
                        <button className='bg-blue-700 mt-5 w-fit px-4 py-2 rounded-xl'>Show Content</button>
                        <button className='bg-red-600 mt-5 w-fit px-4 py-2 rounded-xl'>Add Content +</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile