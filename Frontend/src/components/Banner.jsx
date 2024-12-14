import React from 'react'
import download from '../../public/download.png'
import { Link } from 'react-router-dom'


function Banner() {
  return (
    <>
    <div className='bg-base-100 mx-20 flex mb-12'>
        <div className='w-1/2'>
             <div className='space-y-10'>
             <h1 className='text-4xl font-bold'>Hello, welcomes here to learn something 
             <span className='text-pink-500'> new everyday!!!</span></h1>
             <p className='text-md'>Books are synonymous with learning and education, and have been a concrete source of information and knowledge for many generations. Books are an authentic source of knowledge for everyone.</p>
             </div>
             <div className='mt-10'>
      <Link to='/signup' className="border text-md text-white hover:bg-pink-700 duration-300 bg-pink-500 rounded-md cursor-pointer py-2 px-3">
        Signup
      </Link>
    </div>
        </div>
        <div className='w-1/2'>
          <img src={download} alt="" className='m-auto min-h-full'/>
        </div>
    </div>
    </>
  )
}

export default Banner