import React, { useRef, useState } from 'react';
import line from "../Assets/catalog-line-img.svg";
import img1 from '../Assets/g1.webp'
import img2 from '../Assets/g2.webp'
import img3 from '../Assets/g3.jpg'
import img4 from '../Assets/g4.jpg'
import img5 from '../Assets/g5.jpg'
import img6 from '../Assets/g6.webp'
import img7 from '../Assets/g7.webp'
import img8 from '../Assets/g8.webp'
import img9 from '../Assets/g9.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Photogallery.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Photogallery = () => {
  return (
    <>
    <div className="gallery-page">
     <div className="data-section">
          <div className="heading">
            <h2 className="cata-heading">New For You!</h2>
          </div>
          <div className="para">
            <p className="para-text">
            Our latest releases, just for you !
            </p>
          </div>
          <img src={line} alt="line" />
        </div>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
      <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
    </Swiper>
    </div>
  </>
  )
}

export default Photogallery