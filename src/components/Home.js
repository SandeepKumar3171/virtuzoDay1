import React from 'react'
import { FaCartPlus } from "react-icons/fa";

const Home = () => {
  return (
    <div>
        <div className='flex justify-end p-2 cursor-pointer'>
           <p className='text-3xl text-red-500 text-center'><FaCartPlus /></p>
        </div>
      <h1>Home Component</h1>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center'>
            <img className='w-1/2 h-fit' src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg" alt="" />
        </div>
        <div className='flex flex-col items-center m-1'>
            <p className='text-2xl font-semibold'>I-Phone</p>
            <p className='text-xl text-green-500'>Price: $1000.00</p>
        </div>
        <div>
            <button className=' bg-red-500 text-white p-1 rounded-md shadow-md shadow-red-700'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home
