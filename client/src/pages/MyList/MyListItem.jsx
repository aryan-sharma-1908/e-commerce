import { Button, Menu, MenuItem, Rating } from "@mui/material";
import React,{useState} from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const MyListItem = (props) => {
  return (
    <div className="MyListItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[120px] rounded-md overflow-hidden">
        <Link to="/product/231" className="group">
          <img
            src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[85%] relative">
        <IoClose className="cursor-pointer absolute top-[0px] right-[0px] link transition-all text-[20px] font-[600]" />
        <span className="text-[13px] text-[rgba(0,0,0,0.6)] font-[500]">
          Apple
        </span>
        <h3 className="text-[16px]">
          <Link to="/product/231" className="link font-[500]">
            Apple iPhone 13 128 GB, Midnight (Black)
          </Link>
        </h3>

        <Rating name="size-small" defaultValue={2} size="small" readOnly />
   
        <div className="price flex gap-2  mt-2">
          <h3 className=" font-bold text-[14px]">$45.00</h3>
          <h3 className="line-through text-gray-400 text-[14px]">$51.00</h3>
          <span className="text-[var(--color-primary)] font-bold text-[14px]">
            55% off
          </span>
        </div>

        <Button className="btn-org btn-sm !mt-2">Add to Cart</Button>
      </div>
    </div>
  );
};

export default MyListItem;
