import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const ProductZoom = () => {
  const [slideIndex,setSlideIndex] = useState(0);
  const zoomSliderSml = useRef();
  const zoomSliderBig = useRef();
  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderBig.current.swiper.slideTo(index);
    zoomSliderSml.current.swiper.slideTo(index);
  }
  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[15%]">
          <Swiper
            ref={zoomSliderSml}
            direction={"vertical"}
            slidesPerView={5}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductSliderThumbs h-[500px] overflow-hidden"
          >
            
            <SwiperSlide>
              <div className="item rounded-md overflow-hidden cursor-pointer group" onClick={() => goto(0)}>
                <img
                  src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
                  alt=""
                  className={`w-full transition-all group-hover:scale-105 ${slideIndex === 0 ? "opacity-100" : "opacity-30"}`}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-md overflow-hidden cursor-pointer group" onClick={() => goto(1)}>
                <img
                  src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-3-202208221207.jpeg?im=Resize=(150,150)"
                  alt=""
                  className={`w-full transition-all group-hover:scale-105 ${slideIndex === 1 ? "opacity-100" : "opacity-30"}`}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-md overflow-hidden cursor-pointer group" onClick={() => goto(2)}>
                <img
                  src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-1-202208221207.jpeg?im=Resize=(150,150)"
                  alt=""
                  className={`w-full transition-all group-hover:scale-105 ${slideIndex === 2 ? "opacity-100" : "opacity-30"}`}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-md overflow-hidden cursor-pointer group" onClick={() => goto(3)}>
                <img
                  src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-2-202208221207.jpeg?im=Resize=(150,150)"
                  alt=""
                  className={`w-full transition-all group-hover:scale-105 ${slideIndex === 3 ? "opacity-100" : "opacity-30"}`}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-md overflow-hidden cursor-pointer group" onClick={() => goto(4)}>
                <img
                  src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-4-202208221207.jpeg?im=Resize=(150,150)"
                  alt=""
                  className={`w-full transition-all group-hover:scale-105 ${slideIndex === 4 ? "opacity-100" : "opacity-30"}`}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
        <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
            ref={zoomSliderBig}
          >
            <SwiperSlide>
              <InnerImageZoom
                src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
                zoomType="hover"
                zoomScale={1.5}
                className="rounded-md overflow-hidden"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
                zoomType="hover"
                zoomScale={1.5}
                className="rounded-md overflow-hidden"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-1-202208221207.jpeg?im=Resize=(420,420)"
                zoomType="hover"
                zoomScale={1.5}
                className="rounded-md overflow-hidden"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-2-202208221207.jpeg?im=Resize=(420,420)"
                zoomType="hover"
                zoomScale={1.5}
                className="rounded-md overflow-hidden"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-4-202208221207.jpeg?im=Resize=(420,420)"
                zoomType="hover"
                zoomScale={1.5}
                className="rounded-md overflow-hidden"
              />
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
