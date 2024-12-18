import React from 'react'
import download from '../../public/download.png'
import { Link } from 'react-router-dom'


function Banner() {
  return (
    <>
    <div className='bg-base-100 md:mx-20 mx-10 flex md:mb-12 mb-10 flex-col md:flex-row'>
        <div className='md:w-1/2 order-2 md:order-1 w-full'>
             <div className=' md:space-y-10 space-y-3 order-2'>
             <h1 className='md:text-4xl text-xl font-bold'>Hello, welcomes here to learn something 
             <span className='text-pink-500'> new everyday!!!</span></h1>
             <p className='text-md'>Books are synonymous with learning and education, and have been a concrete source of information and knowledge for many generations. Books are an authentic source of knowledge for everyone.</p>
             </div>
             <div className='md:mt-10 mt-8'>
      <Link to='/signup' className="border text-md text-white hover:bg-pink-700 duration-300 bg-pink-500 rounded-md cursor-pointer py-2 px-3">
        Signup
      </Link>
    </div>
        </div>
        <div className='md:w-1/2 w-full order-1'>
          <img src={download} alt="" className='m-auto min-h-full'/>
        </div>
    </div>
    </>
  )
}

export default Banner