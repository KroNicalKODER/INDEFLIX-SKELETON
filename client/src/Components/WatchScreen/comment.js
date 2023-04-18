import React from 'react'
import img from '../../images/logos/Indeflix LOGO (1).png'

const comment = () => {
    const ubuntuFont = {
        fontFamily: 'Ubuntu',
        borderRadius: '7px'
      }
  return (
    <div className='flex mt-4 border-2 border-gray-700 px-3 py-4 rounded-lg' style={ubuntuFont}>
        <img 
            src={img}
            className='w-9 h-9 rounded-[50%]' 
        />
        <div
            className='flex-[10] ml-4'
        >
            <span className='text-sm'>commentor name</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam delectus, autem ea nihil tempora ratione aliquid quaerat architecto aliquam! Distinctio asperiores, reiciendis quidem quos ab totam assumenda molestias vitae laborum!</p>
        </div>
    </div>
  )
}

export default comment