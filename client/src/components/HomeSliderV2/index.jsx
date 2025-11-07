import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "@mui/material";

const HomeBannerV2 = () => {
  return (
    <div className="homeBannerV2">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homeSliderV2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src="https://serviceapi.spicezgold.com/download/1742439896581_1737036773579_sample-1.jpg" />
            <div className="info absolute top-0 -right-[100%] opacity-0  w-[50%] z-50 p-8 text-left h-[100%] flex items-center justify-center flex-col transition-all duration-700">
              <h4 className="text-[20px] font-[400] w-full relative  duration-1000">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] py-4 font-[700] w-full relative ">
                Buy New Trend Women Black Cotton Blend Top | top for women |
                women top...
              </h2>
              <h3 className="text-[20px] font-[400] w-full relative ">
                Starting At Only{" "}
                <span className="text-primary text-[35px] font-[700] pl-2">
                  $59.00
                </span>
              </h3>
              <div className="sliderButton w-full relative">
                <Button className="btn-org flex justify-start items-center text-left">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden">
            <img src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg" />
            <div className="info absolute top-0 -right-[100%] opacity-0  w-[50%] z-50 p-8 text-left h-[100%] flex items-center justify-center flex-col transition-all duration-700">
              <h4 className="text-[20px] font-[400] w-full relative ">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] py-4 font-[700] w-full relative ">
                Apple iPhone 12 128gb, Pink
              </h2>
              <h3 className="text-[20px] font-[400] w-full relative ">
                Starting At Only{" "}
                <span className="text-primary text-[35px] font-[700] pl-2">
                  $268.00
                </span>
              </h3>
              <div className="sliderButton w-full relative">
                <Button className="btn-org flex justify-start items-center text-left">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBannerV2;
