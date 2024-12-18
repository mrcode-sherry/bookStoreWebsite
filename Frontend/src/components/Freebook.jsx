import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import Cards from './Cards';
import Slider from "react-slick";

function Freebook() {
  const [book,setBook] = useState([])
  useEffect(() =>{
    const getBook = async ()=>{
      try {
        const res = await axios.get('http://localhost:3000/book')
        console.log(res.data)
        setBook(res.data.filter((data) => data.category === "Free"))
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  }, [])

  var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
     <div className='md:px-20 px-10'>
        <div className='space-y-3'>
        <h1 className='md:text-2xl text-xl font-semibold'>Free Offered Courses</h1>
        <p className=' '>Books are our true best friends. They are full of information we need for our education and daily life. There are different types of books for a variety of knowledge that we seek, including science, history, mathematics, biology, fantasy, and anything else we need.</p>
        </div>

     <div className='flex flex-col justify-between mt-5'>
     <Slider {...settings}>
        {
          book.map((item) => (
            <Cards item={item} key={item.id}/>
          ))
        }
      </Slider>
     </div>
     </div>
    </>
  )
}

export default Freebook