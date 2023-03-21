import React from 'react'

const Login = ({show, handleCloseLogin}) => {

    const montFont = {
        fontFamily: 'Montserrat',
        borderRadius: '7px'
    }

    const bgg = {
        backgroundColor: '#0C0C30',
        width: 'auto'
    }

    
    const handleLogin = () => {
        
    }
    const handleClose = (e) => {
        if(e.target.id === 'login-popup') handleCloseLogin()
    }
    if(!show) {
        return null;
     }
    return (
        <div id='login-popup' onClick={handleClose} className='fixed flex justify-center items-center transition duration-1000 ease-in-out inset-0 bg-opacity-30 backdrop-blur-sm bg-black z-20'>
            <div className='border-indigo-700 border-2 rounded-lg px-24 py-10 bg-slate-900'>
                <div className='w-full flex flex-col'>
                    <div className='mb-3'>LOGIN</div>
                    <form className='w-full flex flex-col'>
                        <input
                            type='text'
                            placeholder='Enter Username / Email'
                            style={{...montFont,...bgg}}
                            className='text-white w-full px-4 py-1 border-indigo-700 border-2'
                        />
                        <input
                            type='password'
                            placeholder='Enter Password'
                            style={{...montFont,...bgg}}
                            className='text-white w-full mt-5 px-4 py-1 border-indigo-700 border-2'
                        />
                    </form>
                </div>
                <div className='mt-10'>
                    <button type="button"
                        className="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={handleCloseLogin}
                        >

                        Close
                    </button>
                    <button type="button"
                        className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-10"
                        onClick={handleLogin}
                        >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login