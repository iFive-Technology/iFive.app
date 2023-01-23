import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Hero.css'
import enginner from '../Assets/icons/engineer.png'
import customer from '../Assets/icons/customer.png'
import imgBcg from '../Assets/images/background.jfif'

const Hero = () => {
  return (
    <>
    <div className=" w-full Hero" style={{
backgroundImage: `url(${imgBcg})`,
backgroundRepeat: 'no-repeat',
backgroundSize: 'cover',
backgroundPosition: 'center',
boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.219)',
    }}>
        <NavBar />
<div className='h-full flex items-center'>
{/* small cont inside the hero section */}
<div className='bg-white w-5/12 cus-triger ml-40'>
    {/* small nav  start */}
          <div className='w-full flex justify-between  items-center h-20 bg-pink-200'>
<div className='flex justify-center w-full h-full items-center flex-col customer'><img src={customer} alt="" className='w-8'/> <p>Book Repair</p></div>
<div className='w-full h-full flex justify-center items-center flex-col enginner'><img src={enginner} alt="" className='w-10'/> <p>Join Enginner Team</p></div>
          </div>
          {/* small nav end */}

<div className=' h-full w-full flex flex-col items-center '>
    <div className='h-72 flex flex-col justify-around items-center '>
    <h1 className='text-4xl font-bold w-10/12 '>
Get in the Enginner seat and get paid
</h1>
<p className='text-xl'>Drive on the platform with the largest network of active riders.</p>
    </div>
    {/* text wrapper */}
<div className='w-10/12 h-40 flex flex-col justify-between'>
    <div>    <button className='bg-green-400 text-1xl p-3 cursor-pointer text-white rounded-lg'>Sign up to repair</button></div>
    <div><p className='text-lg'>Learn more about being our enginner</p></div>
</div>

</div>

        </div>
</div>
{/*  small cont inside the hero section ends here */}
 

    </div>
    </>
  )
}

export default Hero