// import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
// import { Link } from 'react-router';


function HeroSlider() {
  return (
    <div className='w-[80%] mx-auto py-2'>
         <Swiper pagination={true} loop={true} modules={[Pagination, Autoplay]} autoplay={{
            delay:2500,
            disableOnInteraction:false,
         }} className="mySwiper">
            <SwiperSlide className=''>
                
                <img src='/src/img/banner_home1.png' alt='img' className='w-full '/>
            </SwiperSlide>
            <SwiperSlide>
                
                <img src='/src/img/banner_home2.png' alt='img' className='w-full '/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default HeroSlider
