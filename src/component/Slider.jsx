import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProfilePic from '../assest/profile.webp'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='d-flex'>
            <div><img src={ProfilePic} alt="Profile" /></div>
              <div>
                <h3 className='text-start'>hellohello hello hello</h3>
                <span>ajay tiwari</span>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='d-flex'>
            <div><img src={ProfilePic} alt="Profile" /></div>
              <div>
                <h3 className='text-start'>hellohello hello hello</h3>
                <span>ajay tiwari</span>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='d-flex'>
            <div><img src={ProfilePic} alt="Profile" /></div>
              <div>
                <h3 className='text-start'>hellohello hello hello</h3>
                <span>ajay tiwari</span>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='d-flex'>
            <div><img src={ProfilePic} alt="Profile" /></div>
              <div>
                <h3 className='text-start'>hellohello hello hello</h3>
                <span>ajay tiwari</span>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='d-flex'>
            <div><img src={ProfilePic} alt="Profile" /></div>
              <div>
                <h3 className='text-start'>hellohello hello hello</h3>
                <span>ajay tiwari</span>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='d-flex'>
            <div><img src={ProfilePic} alt="Profile" /></div>
              <div>
                <h3 className='text-start'>hellohello hello hello</h3>
                <span>ajay tiwari</span>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='d-flex'>
            <div><img src={ProfilePic} alt="Profile" /></div>
              <div>
                <h3 className='text-start'>hellohello hello hello</h3>
                <span>ajay tiwari</span>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='d-flex'>
            <div><img src={ProfilePic} alt="Profile" /></div>
              <div>
                <h3 className='text-start'>hellohello hello hello</h3>
                <span>ajay tiwari</span>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='d-flex'>
            <div><img src={ProfilePic} alt="Profile" /></div>
              <div>
                <h3 className='text-start'>hellohello hello hello</h3>
                <span>ajay tiwari</span>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
