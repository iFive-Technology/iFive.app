import React from 'react'
import './NavBar.css'
import logo from '../Assets/logos/whiteLogo.png'
const NavBar = () => {
  return (
    <>
<div className='bg-black h-14 text-white flex items-center px-3 justify-between'>
    <div className='mt-5'><img src={logo} alt="" className='logo' /></div>

<div className=' w-4/12 mr-20'>
    <ul className='flex justify-around w-full items-center text-1xl '>
        <li>Service</li>
        <li>Product</li>
        <li>About us</li>

        <div className='flex gap-5 items-center '>
        <li>Login</li>
        <li className='bg-white text-black w-20  flex justify-center p-1 rounded-lg'>Sign up</li>
        </div>

    </ul>
</div>
</div>
    </>
  )
}

export default NavBar