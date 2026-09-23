import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router';


function HeroSlider() {
  return (
    <div className='w-[80%] mx-auto py-2'>
         <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide className=''>
                
                <img src='/src/img/banner_home1.png' alt='img' className=''/>
            </SwiperSlide>
            <SwiperSlide>
                
                <img src='/src/img/banner_home2.png' alt='img' className=''/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default HeroSlider
