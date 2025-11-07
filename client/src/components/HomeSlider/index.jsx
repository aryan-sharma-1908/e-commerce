import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider my-4">
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          modules={[Navigation, Autoplay]}
          className="sliderHome !overflow-visible"
        >
          <SwiperSlide>
            <div className="item rounded-2xl overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg"
                alt=""
                className="w-full cursor-pointer"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-2xl overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg"
                alt=""
                className="w-full cursor-pointer"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-2xl overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg"
                alt=""
                className="w-full cursor-pointer"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-2xl overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg"
                alt=""
                className="w-full cursor-pointer"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-2xl overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg"
                alt=""
                className="w-full cursor-pointer"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-2xl overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg"
                alt=""
                className="w-full cursor-pointer"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
