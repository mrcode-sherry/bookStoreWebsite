import React from 'react'
import { Link } from 'react-router-dom'

function Cards({item}) {
  console.log(item)
  return (
    <>

<div className="card bg-base-100 w-auto m-3 cursor-pointer mb-10 rounded-lg shadow-xl hover:scale-105 duration-300">
  <Link to='/fullcard'>
    <img
      src={item.image}
      alt="Shoes"
      className='rounded-t-lg shadow-sm border' />
  </Link>
  <div className="card-body p-5">
    <div className='flex items-center'>
      <Link to='/fullcard' className="card-title hover:underline duration-200 mr-4 md:font-bold font-semibold text-xl md:text-xl">
        {item.name}
      </Link>
      <div className="border text-md rounded-full px-2 text-center bg-pink-500 hover:bg-pink-600 duration-300 text-white">
        {item.category}
      </div>
    </div>
    <p className="mt-4 text-gray-800 md:text-md text-sm">{item.title}</p>
    <div className="card-actions flex justify-between items-center mt-4">
      <div className="badge badge-outline text-lg border text-gray-800 py-1 rounded-full px-3 hover:bg-pink-700 duration-300 hover:text-white">${item.price}</div>
      <Link to='/fullcard' className="btn btn-primary border hover:bg-pink-700 px-3 rounded-full text-gray-800 py-1 duration-300 hover:text-white">Buy Now</Link>
    </div>
  </div>
</div>

    </>
  )
}

export default Cards 