import React from 'react'
import './NavBar.css'
import logo from '../Assets/logos/fixlogo.png'
const NavBar = () => {
  return (
    <>
<div className='bg-black h-14 text-white flex items-center px-3 justify-between'>
    <div className=''><img src={logo} alt="" className='logo' /></div>

<div className=' w-4/12 mr-20'>
    <ul className='flex justify-around w-full items-center text-1xl '>
        <li className='cursor-pointer'>Service</li>
        <li className='cursor-pointer'>Product</li>
        <li className='cursor-pointer'>About us</li>

        <div className='flex gap-5 items-center '>
        <li className='cursor-pointer'>Login</li>
        <li className='bg-white text-black w-20  flex justify-center p-2 rounded-lg cursor-pointer'>Sign up</li>
        </div>

    </ul>
</div>
</div>
    </>
  )
}

export default NavBar