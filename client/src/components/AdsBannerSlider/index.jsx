import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper/modules";
import BannerBox from '../BannerBox';

const AdsBannerSlider = ({items}) => {
  return (
    <div className='pb-2 w-full'>
       <Swiper
                slidesPerView={items}
                spaceBetween={10}
                navigation={true}
                loop={true}
                autoplay={{
                  delay:2500,
                  disableOnInteraction: false
                }}
                modules={[Navigation, Autoplay]}
                className="adBanners"
              >
            <SwiperSlide>
                <BannerBox img='https://www.jiomart.com/images/cms/aw_rbslider/slides/1753455397_4.jpg?im=Resize=(768,448)'/>
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox img='https://www.jiomart.com/images/cms/aw_rbslider/slides/1753712311_4.jpg?im=Resize=(768,448)'/>
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox img='https://www.jiomart.com/images/cms/aw_rbslider/slides/1753712379_6.jpg?im=Resize=(768,448)'/>
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox img='https://www.jiomart.com/images/cms/aw_rbslider/slides/1753712345_5.jpg?im=Resize=(768,448)'/>
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox img='https://www.jiomart.com/images/cms/aw_rbslider/slides/1753712153_1.jpg?im=Resize=(768,448)'/>
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox img='https://www.jiomart.com/images/cms/aw_rbslider/slides/1753712552_10.jpg?im=Resize=(768,448)'/>
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox img='https://www.jiomart.com/images/cms/aw_rbslider/slides/1753712273_3.jpg?im=Resize=(768,448)'/>
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox img='https://www.jiomart.com/images/cms/aw_rbslider/slides/1753712454_8.jpg?im=Resize=(768,448)'/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default AdsBannerSlider
