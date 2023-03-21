import React from 'react'

const Logout = ({ show , close}) => {
    if(!show){
        console.log("clicked");
        return null;
    };
    
    const handleClose = (e) => {
        if(e.target.id==='logout-popup') close()
    }

    return (
        <div id='logout-popup' onClick={handleClose} className='fixed flex justify-center items-center transition duration-1000 ease-in-out inset-0 bg-opacity-30 backdrop-blur-sm bg-black z-20'>
            <div className='border-indigo-700 border-2 rounded-lg px-24 py-16 bg-slate-900'>
                <div className=''>
                    ARE YOU SURE WANTED TO LOGOUT?
                </div>
                <div className='mt-10'>
                    <button type="button"
                        className="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={close}
                        >

                        Close
                    </button>
                    <button type="button"
                        className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-10">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Logout