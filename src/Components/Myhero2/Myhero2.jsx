import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Myhero2.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../Assets/hero2.3.webp'
import img2 from '../Assets/hero2.2.webp'
import img3 from '../Assets/hero_2.1.webp'

const Myhero2 = () => {
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide> <img src={img1} alt="" /> </SwiperSlide>
      <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
    </Swiper>
  </>
  )
}

export default Myhero2