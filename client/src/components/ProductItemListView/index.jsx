import React, { useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { BsArrowsFullscreen } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import { IoMdCart } from "react-icons/io";
import { MyContext } from "../../App";
const ProductItemListView = (props) => {
  const { setOpenProductDetailsModel } = useContext(MyContext);

  return (
    <div className="productItemListView">
      <div className="productItem mt-5 shadow-lg rounded-md overflow-hidden border-1 border-gray-200 h-[320px] flex items-center">
        <div className="imageWrapper w-[25%] group h-[250px] overflow-hidden rounded-md relative">
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
                <BsArrowsFullscreen
                  onClick={() => setOpenProductDetailsModel(true)}
                />
              </span>
            </div>
          </div>
          <div className="image-container relative w-full"></div>
          <Link to="/product/:id" className="link transition-all">
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
              alt=""
              className="w-full"
            />
          </Link>
        </div>
        <div className="info w-[75%] px-8 flex flex-col items-start justify-center">
          <h6 className="text-[15px] mb-2 text-gray-500">
            <Link to="/" className="link transition-all">
              Soylent Green
            </Link>
          </h6>
          <h4 className="text-[18px] title leading-5  transition-all mb-3">
            <Link to="/product/:id" className="link">
              Men cotton casual full sleeve T-shirt
            </Link>
          </h4>
          <p className="text-[14px] mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Stack spacing={1} className="mb-2">
            <Rating name="size-small" defaultValue={2} size="small" readOnly />
          </Stack>
          <div className="price flex gap-2 mb-2">
            <h3 className="line-through text-gray-400">$90.00</h3>
            <h3 className="text-[var(--color-primary)] font-bold">$80.00</h3>
          </div>
          <Button className="btn-org gap-1">
            <IoMdCart className="text-[20px]" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItemListView;
