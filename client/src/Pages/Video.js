import React from 'react'
import Header from '../Components/header'
import img from '../images/logos/Indeflix LOGO (1).png'
import Cards from '../Components/WatchScreen/cards'
import Comment from '../Components/WatchScreen/comment'

const Video = () => {
  const ubuntuFont = {
    fontFamily: 'Ubuntu',
    borderRadius: '7px'
  }
  const backgroundNone = {
    background: 'none'
  }
  return (
    <div className=''>
      <Header position='flow'/>
      <div className='flex ml-[19rem] pt-10'>
        <div className='flex-[5] flex flex-col'>
          <div className='flex flex-col w-full h-[34rem]'>
            <iframe
              className='flex-[1]'
              width="100%"
              title='vdo player'
              height='500'
              src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
              allowFullScreen
              allow='accelerometer; autoplay; gyroscope; picture-in-picture encrypted-media; clipboard-write;'
              >
            </iframe>
            <div className='flex justify-between my-3 text-sm' style={ubuntuFont}>
              <div>
                <p className='text-lg'>The Best Youtube Video</p>
                <div className='flex items-center mt-1'>
                  <img src={img} alt='' className='w-10 rounded-[50%]'
                  ></img>
                  <p className='px-4'>The Best YouTube Creater</p>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex justify-between' >
                  <span className='px-4'>Likes </span> 
                  <span className=''>12k</span>
                  <span className='ml-3'>|</span>
                  <span className='px-4'>Comments </span>
                  <span className=''>2k</span>
                  <span className='ml-3'>|</span>
                  <span className='px-4'>Views </span>
                  <span className=''>200k </span>
                </div>
                <div className='flex justify-around'>
                  <button className='border-2 border-white bg-none mt-4 py-1 px-3 rounded-xl hover:bg-blue-600 transition-all ease-in-out '>Follow +</button>
                  <button className='border-2 border-white bg-none mt-4 py-1 px-3 rounded-xl hover:bg-blue-600 transition-all ease-in-out '>Download</button>
                  <button className='border-2 border-white bg-none mt-4 py-1 px-3 rounded-xl hover:bg-red-600 transition-all ease-in-out '>Report</button>
                </div>
              </div>
            </div>
          </div>
            <div>
              <div className='flex items-center'>
                <img className='flex-[0.75] rounded-[50%] mx-2 h-12 border-none' src={img}/>
                <input type='text' placeholder='ADD COMMENT' className='mx-2 flex-[10] h-8 px-2  border-[1px] border-white rounded-sm' style={backgroundNone}/>
                <button type='submit' className='h-8  mx-2 bg-blue border-2 px-2 rounded-md hover:bg-amber-700 transition-all border-white'>Submit</button>
              </div>
              <Comment/>
              <Comment/>
              <Comment/>
              <Comment/>
              <Comment/>
              <Comment/>
              <Comment/>
            </div>
        </div>
        <div className='ml-6 flex-[2]'>
          Recommendations
          <div>
            <Cards/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video