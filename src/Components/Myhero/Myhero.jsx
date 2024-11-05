import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Myhero.css';

// import required modules
import { FreeMode } from 'swiper/modules';
import img1 from '../Assets/j1.avif'
import img2 from '../Assets/j2.avif'
import img3 from '../Assets/j3.avif'
import img4 from '../Assets/j4.avif'
import img5 from '../Assets/j5.avif'



const Myhero = () => {
    const [setSwiperRef] = useState(null);

    
  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}            // Optional: free mode for smooth scrolling
        loop={true}                // Enable looping for continuous scroll effect
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide> <div className='carousel-container'> <img className='hero1img' src={img1} alt="" /> </div> </SwiperSlide>
        <SwiperSlide><div className='carousel-container'> <img className='hero1img' src={img2} alt="" /> </div></SwiperSlide>
        <SwiperSlide><div className='carousel-container'> <img className='hero1img' src={img3} alt="" /> </div></SwiperSlide>
        <SwiperSlide><div className='carousel-container'> <img className='hero1img' src={img4} alt="" /> </div></SwiperSlide>
        <SwiperSlide><div className='carousel-container'> <img className='hero1img' src={img5} alt="" /> </div></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Myhero