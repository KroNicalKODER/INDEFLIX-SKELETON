import React from 'react'

const Signup = () => {

    const montFont = {
        fontFamily: 'Montserrat',
        borderRadius: '7px'
    }
    
    const bgText = {
        backgroundColor: '#20204D'
    }

    const bgg = {
        backgroundColor: '#0C0C30',
        width: 'auto'
    }

    const handleSignup = () => {

    }
    return (
        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="Signup-User" tabindex="-1" aria-labelledby="exampleModalCenteredScrollable" aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current">
                    <div style={bgg} className='rounded-3xl'>
                        <h1 className='pt-5 pl-20 text-lg'>Register</h1>
                        <form onSubmit={handleSignup} className='mx-20'>
                            <input
                                className='px-2 py-2 w-80 text-sm my-3'
                                style={{...montFont,...bgText}}
                                type="text"
                                placeholder='Name'
                            />
                            <input
                                className='px-2 py-2 w-80 text-sm my-3'
                                style={{...montFont,...bgText}}
                                type="text"
                                placeholder='Username'
                            />
                            <input
                                className='px-2 py-2 w-80 text-sm my-3'
                                style={{...montFont,...bgText}}
                                type="Number"
                                placeholder='Mobile Number'
                            />
                            <input
                                className='px-2 py-2 w-80 text-sm my-3'
                                style={{...montFont,...bgText}}
                                type="text"
                                placeholder='E-mail'
                            />
                            <input
                                className='my-3 px-2 py-2 w-80 text-sm'
                                type="password"
                                style={{...montFont,...bgText}}
                                placeholder='Password'
                            />
                            <input
                                className='my-3 px-2 py-2 w-80 text-sm'
                                type="password"
                                style={{...montFont,...bgText}}
                                placeholder='Confirm Password'
                            />
                        </form>
                        <div className="modal-footer mt-2 flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button"
                                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button"
                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-10">
                                Register
                            </button>
                        </div>
                        <h2 style={montFont} className='bg-none text-sm text-gray-700 pl-8 pb-7'>Login using</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup