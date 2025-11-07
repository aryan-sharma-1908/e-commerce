import React, {useContext} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { BsArrowsFullscreen } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";
import { MyContext } from "../../App";

const ProductItem = (props) => {
  const {setOpenProductDetailsModel} = useContext(MyContext);

  return (
    <div className="productItem mt-5 shadow-lg rounded-md overflow-hidden border-1 border-gray-200 w-[260px] h-[390px]">
      <div className="imageWrapper w-[100%] group h-[250px] overflow-hidden rounded-md relative">
        <div className="onHoverDisplay  flex justify-between items-start absolute w-full">
          <div className="leftHoverDisplay transition-all duration-300 flex flex-col gap-1 p-2 -translate-x-15 group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
            <span className="discount flex items-center z-50 bg-primary rounded-lg text-white text-[12px] px-2 font-medium">
              -10%
            </span>
            <span className="flex items-center z-50 bg-green-600 rounded-lg text-white text-[12px] px-2 font-medium">
              NEW
            </span>
          </div>
          <div className="rightHoverDisplay transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 flex flex-col gap-1 p-2 opacity-0 scale-0">
            <span className="flex items-center justify-center text-center rounded-full bg-white border-1 border-gray-300 p-2 hover:text-white hover:bg-primary cursor-pointer">
              <Tooltip title="Add to wishlist" placement="right-end">
                <FaRegHeart />
              </Tooltip>
            </span>
            <span className="flex items-center justify-center text-center rounded-full bg-white border-1 border-gray-300 p-2 hover:text-white hover:bg-primary rotate-270  cursor-pointer">
              <Tooltip title="Compare" placement="right-end">
                <IoIosGitCompare className="text-xl" />
              </Tooltip>
            </span>
            <span className="flex items-center justify-center text-center rounded-full bg-white border-1 border-gray-300 p-2 hover:text-white hover:bg-primary rotate-270  cursor-pointer">
              <BsArrowsFullscreen onClick={() => setOpenProductDetailsModel(true)}/>
            </span>
          </div>
        </div>
        <div className="image-container relative w-full"></div>
        <img src={props.img} alt="" className="w-full" />
      </div>
      <div className="info px-6 py-3">
        <h6 className="text-[13px] text-gray-500 ">
          <Link to="/" className="link transition-all">
            {props.brandName}
          </Link>
        </h6>
        <h4 className="text-[14px] title leading-5 mt-2  transition-all">
          <Link to="/" className="link">
            {props.productName}
          </Link>
        </h4>
        <Stack spacing={1} className="my-1">
          <Rating name="size-small" defaultValue={2} size="small" readOnly />
        </Stack>
        <div className="price flex gap-2">
          <h3 className="line-through text-gray-400">{props.oldPrice}</h3>
          <h3 className="text-[var(--color-primary)] font-bold">
            {props.newPrice}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
