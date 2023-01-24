import React, { useState } from 'react'
import './NavBar.css'
import logo from '../Assets/logos/fixlogo.png'
import { FaBars } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, } from 'antd';

const NavBar = () => {
const [showBar, setShowBar] = useState(false);

const handleNavBar = () =>{
  setShowBar(!showBar)
}

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];


  return (
    <>
    <div className='hidden md:block '>
<div className='bg-black h-14 text-white flex items-center px-3 justify-between'>
    <div className=''><img src={logo} alt="" className='logo' /></div>

<div className=' lg:w-4/12 md:w-7/12  lg:mr-20 md:mr-5'>
    <ul className='flex justify-around w-full items-center text-1xl '>
        <li className='cursor-pointer list-none'>Service</li>
        <li className='cursor-pointer list-none'> <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
     
        Products
        <DownOutlined className=' ml-1'/>
      
    </a>
  </Dropdown></li>
        <li className='cursor-pointer list-none'>About us</li>

        <div className='flex gap-5 items-center '>
        <li className='cursor-pointer list-none'>Login</li>
        <li className='bg-white text-black w-20 list-none  flex justify-center p-2 rounded-lg cursor-pointer'>Sign up</li>
        </div>

    </ul>
</div>
</div>
</div>



{/* mobile nav bar */}
<div  className=' relative bg-black h-14 w-full md:hidden p-0 m-0 flex items-center'>
<div className=' flex items-center h-14'><img src={logo} alt="" className='mobile-logo' /></div>

<div className='flex  items-center w-11/12 gap-5'>
  <div className='flex gap-3 ml-5'>
  <li className=' text-white w-20 list-none flex justify-center p-1 rounded-lg cursor-pointer'>Login</li>
        <li className='bg-white text-black w-20 list-none flex justify-center p-1 rounded-lg cursor-pointer'>Sign up</li>
  </div> 
    <span className='text-xl text-white'> {showBar ? <FiX onClick={handleNavBar}/> : <FaBars onClick={handleNavBar}/> }</span>
        </div>
        
        <div className={showBar ? 'bg-white  w-full h-screen z-10 absolute top-14' : 'hidden'}>
          <div className='w-full  '>
            <ul className='text-3xl text-black font-medium ml-10 flex flex-col gap-10 mt-10'>
            <li className='cursor-pointer list-none'>Service</li>
        <li className='cursor-pointer list-none'>About us</li>
        <li className='cursor-pointer list-none'>
          <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
     
        Products
        <DownOutlined className='text-2xl ml-1'/>
      
    </a>
  </Dropdown></li>
            </ul>
          </div>
        </div>
</div>
    </>
  )
}

export default NavBar