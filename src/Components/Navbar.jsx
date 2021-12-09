import React from 'react'
import logo from '../Images/logo.jpg'

function Navbar() {
    return (
        <div className='w-full h-40 bg-white'>
            <img src={logo} alt="logo" className="mx-2 w-32"/>
        </div>
    )
}

export default Navbar