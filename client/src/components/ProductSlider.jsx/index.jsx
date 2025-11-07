import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem";

const ProductSlider = ({ items }) => {
  return (
    <section className="productSlider py-3">
      <Swiper
        slidesPerView={items}
        navigation={true}
        modules={[Navigation]}
        className="adBanners"
      >
        <SwiperSlide>
          <ProductItem
            img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/53-home_default/today-is-a-good-day-framed-poster.jpg"
            brandName="Aristocrat"
            productName="13L Nova 3 Compartment Laptop Backpack"
            oldPrice="$58.00"
            newPrice="$51.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-home_default/brown-bear-printed-sweater.jpg"
            brandName="Initech space"
            productName="Apple Smart Watch / Midnight Aluminum"
            oldPrice="$65.00"
            newPrice="$54.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
            brandName="Soylent Green"
            productName="Men cotton casual full sleeve T-shirt"
            oldPrice="$90.00"
            newPrice="$86.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/86-home_default/hummingbird-cushion.jpg"
            brandName="Lemonala"
            productName="Multi coloured open knitted mufflar"
            oldPrice="$45.00"
            newPrice="$35.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/105-home_default/brown-bear-vector-graphics.jpg"
            brandName="Aristocrat"
            productName="13L Nova 3 Compartment Laptop Backpack"
            oldPrice="$58.00"
            newPrice="$51.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/130-home_default/customizable-mug.jpg"
            brandName="Aristocrat"
            productName="13L Nova 3 Compartment Laptop Backpack"
            oldPrice="$58.00"
            newPrice="$51.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/119-home_default/brown-bear-notebook.jpg"
            brandName="Aristocrat"
            productName="13L Nova 3 Compartment Laptop Backpack"
            oldPrice="$58.00"
            newPrice="$51.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem
            img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/97-home_default/pack-mug-framed-poster.jpg"
            brandName="The Simpsons"
            productName="Smart Speaker & Google Assistant, Light Grey
"
            oldPrice="$58.00"
            newPrice="$51.00"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductSlider;
