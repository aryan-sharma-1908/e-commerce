import React from "react";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
const BlogItem = () => {
  return (
    <div className="blogItem py-3 group">
      <div className="imageWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src="https://serviceapi.spicezgold.com/download/1750304462017_1000005912.jpg"
          alt="blog image"
          className="w-full transition-all group-hover:scale-105"
        />

        <span className="absolute right-[15px] bottom-[15px] flex justify-center items-center z-50 text-white text-md bg-primary rounded-md p-1 font-[500] gap-1">
          <IoMdTime className="text-xl" /> 31 July 2025
        </span>
      </div>
      <div className="info py-2">
        <h1 className="text-[16px] font-medium "><Link to='/' className="link">sustainable living through cutting-edge prefabricated homes</Link></h1>
        <p className="text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit... <Link className="link font-[500]">read more</Link></p>
      </div>
    </div>
  );
};

export default BlogItem;
