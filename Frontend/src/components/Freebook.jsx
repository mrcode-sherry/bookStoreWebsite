import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import Slider from "react-slick";
import list from '../../public/list.json'

function Freebook() {
    const filterData = list.filter((data) => data.category === "Free")
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
     <div className='px-20'>
        <div className='my-5'>
        <h1 className='text-2xl font-semibold mb-3'>Free Offered Courses</h1>
        <p className=''>Books are our true best friends. They are full of information we need for our education and daily life. There are different types of books for a variety of knowledge that we seek, including science, history, mathematics, biology, fantasy, and anything else we need.</p>
        </div>

     <div className='flex flex-col justify-between'>
     <Slider {...settings}>
        {
          filterData.map((item) => (
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