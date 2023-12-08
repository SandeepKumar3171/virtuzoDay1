import React from 'react'
import { FaCartPlus } from "react-icons/fa";

const Home = (props) => {
  console.log("Home",props.data)
  return (
    <div>
        <div className='flex flex-col justify-end p-2 cursor-pointer'>
          <p className='pl-5 text-end '><span className=' bg-red-500 pl-2 pr-2 rounded-3xl font-semibold text-lg text-white'>{props.data.length}</span></p>
           <p className='text-4xl text-red-500 flex justify-end mt-[-14px] mr-3'><FaCartPlus /></p>
        </div>
      <h1 className='text-3xl font-bold text-center'>Home Component</h1>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center'>
            <img className='w-1/2 h-fit' src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg" alt="" />
        </div>
        <div className='flex flex-col items-center m-1'>
            <p className='text-2xl font-semibold'>I-Phone</p>
            <p className='text-xl text-green-500'>Price: $1000.00</p>
        </div>
        <div>
            <button onClick={()=>props.addToCartHandler({price:1000,name:"iphone 11"})} className=' bg-red-500 text-white p-1 rounded-md shadow-md shadow-red-700'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home
