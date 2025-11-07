import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductSlider from "../../components/ProductSlider.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem/index.jsx";
import HomeBannerV2 from "../../components/HomeSliderV2/index.jsx";
import BannerBoxV2 from "../../components/BannerBoxV2/index.jsx";
const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <HomeSlider />

      <HomeCatSlider />

      <section className="bg-white pt-4 pb-2 my-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-xl font-medium">POPULAR PRODUCTS</h2>
              <p className="text-sm font-mediurm">
                Do not miss the current offers until the end of March.
              </p>
            </div>
            <div className="rightSec">
              <Box
                sx={{
                  maxWidth: { xs: 320, sm: 480 },
                  bgcolor: "background.paper",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Fashion" className="tab" />
                  <Tab label="Electronics" className="tab" />
                  <Tab label="Bags" className="tab" />
                  <Tab label="Footwear" className="tab" />
                  <Tab label="Groceries" className="tab" />
                  <Tab label="Beauty" className="tab" />
                  <Tab label="Wellness" className="tab" />
                </Tabs>
              </Box>
            </div>
          </div>
          <ProductSlider items={5} />
        </div>
      </section>

      <section className="pt-4 pb-2 my-4 bg-white">
        <div className="pb-8">
          <div className="container flex pl-5">
            <div className="part1 w-[70%]">
              <HomeBannerV2 />
            </div>
            <div className="part2 flex flex-col justify-between w-[30%]">
              <BannerBoxV2
                img="https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"
                info="right"
                h2="Buy Men's Footwear with low price"
                span="$20"
              />
              <BannerBoxV2
                img="https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg"
                info="left"
                h2="Buy Apple Iphone"
                span="$260"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="freeShipping w-[90%] m-auto py-6
            border-2 border-primary rounded-md  flex justify-between px-10 items-center mb-6"
          >
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="rotate-y-180 text-4xl scale-x-150" />
              <h1 className="text-3xl font-[500] ">FREE SHIPPING</h1>
            </div>

            <div className="col2">
              <span className="mb-0 tracking-wide">
                Free Delivery Now On Your First Order and over $200
              </span>
            </div>

            <div className="col3">
              <span className="text-3xl font-[600]">- ONLY $200*</span>
            </div>
          </div>
          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="pt-4 pb-2 my-4 bg-white">
        <div className="container">
          <h2 className="text-2xl font-medium">Latest Products</h2>
          <ProductSlider items={5} />
        </div>
      </section>

      <section className="pt-4 pb-2 my-4 bg-white">
        <div className="container">
          <h2 className="text-2xl font-medium">Featured Products</h2>
          <ProductSlider items={5} />
        </div>
      </section>

      <section className="pt-4 pb-2 bg-white">
        <div className="container">
          <h2 className="text-2xl font-medium">From the blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider "
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Home;
