import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'



function Course() {
  return (
    <>
     <div className='max-w-screen-2xl container mx-auto px-20'>
       <div className='justify-center text-center'>
        <h1 className='text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
        <p className='mt-10 text-gray-900'> Books offer a slower, more immersive experience compared to the fast-paced consumption of digital media. This encourages deep reading and reflection, which can lead to better understanding and personal growth. Books are a treasure trove of information and can help readers acquire new skills, deepen their knowledge, and broaden their perspectives on various subjects.
        </p>
        <Link to="/">
        <button className='bg-pink-500 py-2 px-4 mt-5 hover:bg-pink-700 text-white duration-300 rounded-lg'>Back</button>
        </Link>
       </div>
       <div className='mt-10 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item) => (<Cards key={item.id} item={item}/>))
        }
       </div>
     </div>
    </>
  )
}

export default Course