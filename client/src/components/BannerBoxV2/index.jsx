import React from "react";
import { Link } from "react-router-dom";
const BannerBoxV2 = ({ img , info, h2, span }) => {
  return (
    <div className="overflow-hidden w-full rounded-md ml-5 h-[220px] group relative">
        <img
          src={img}
          alt="banner_img"
          className="w-full transition-all duration-150 group-hover:scale-105"
        />
        <div className={`info absolute top-0 ${info === 'left' ? 'left-0' : 'right-0'} w-[60%] h-[100%] p-8 flex justify-center flex-col`}>
            <h2 className="text-[20px] font-[500]">{h2}</h2>
            <span className="text-[25px] text-primary font-[600] w-full">{span}</span>
            <Link to='/' className="!underline link font-medium">SHOP NOW</Link>
        </div>
    </div>
  );
};

export default BannerBoxV2;
