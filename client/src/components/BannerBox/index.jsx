import {Link} from "react-router-dom";
import React from "react";

const BannerBox = ({ img }) => {
  return (
    <div className="box bannerBox overflow-hidden rounded-lg group">
      <Link to='/'>
        <img src={img} alt="" className="w-full group-hover:scale-105 group-hover:rotate-2 transition-all" />
      </Link>
    </div>
  );
};

export default BannerBox;
