import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards'
import {Link} from 'react-router-dom'



function Course() {
  const [book,setBook] = useState([])
  useEffect(() =>{
    const getBook = async ()=>{
      try {
        const res = await axios.get('http://localhost:3000/book')
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  }, [])

  return (
    <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-10'>
       <div className='md:space-y-6 space-y-4 justify-center text-center'>
        <h1 className='md:text-4xl text-2xl mt-16'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
        <p className=' text-gray-900'> Books offer a slower, more immersive experience compared to the fast-paced consumption of digital media. This encourages deep reading and reflection, which can lead to better understanding and personal growth. Books are a treasure trove of information and can help readers acquire new skills, deepen their knowledge, and broaden their perspectives on various subjects.
        </p>
        <Link to="/">
        <button className='bg-pink-500 py-2 px-4 mt-5 hover:bg-pink-700 text-white duration-300 rounded-lg'>Back</button>
        </Link>
       </div>
       <div className='mt-10 grid grid-cols-1 md:grid-cols-4'>
        {
          book.map((item) => (<Cards key={item.id} item={item}/>))
        }
       </div>
     </div>
    </>
  )
}

export default Course