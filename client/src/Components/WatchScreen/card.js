import React from 'react'


const card = () => {
    const ubuntuFont = {
        fontFamily: 'Ubuntu',
        borderRadius: '7px'
      }
  return (
    <div style={ubuntuFont} className='flex border-[1px] border-white my-2 mr-2 rounded-md px-4 py-3'>
        <div className='w-44 h-20 bg-slate-600 '>
        </div>
        <div className='ml-2 flex justify-between w-full'>
            <div>
                <p>Title</p>
                <p className='text-sm'>Creator</p>
            </div>
            <div className='flex flex-col'>
                <span>views:100k</span>
                <span>likes:10k</span>
            </div>
        </div>
    </div>
  )
}

export default card