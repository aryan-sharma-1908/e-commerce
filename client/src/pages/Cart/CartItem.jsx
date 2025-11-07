import { Menu, MenuItem, Rating } from "@mui/material";
import React,{useState} from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartItem = (props) => {
  const [anchorSizeEl, setAnchorSizeEl] = useState(null);
  const [selectedSize,setSelectedSize] = useState(props.size);
  const [selectedQty,setSelectedQty] = useState(props.qty);
  const [anchorQtyEl, setAnchorQtyEl] = useState(null);
  const openSize = Boolean(anchorSizeEl);
  const openQty = Boolean(anchorQtyEl);
  const handleSizeClick = (event) => {
    setAnchorSizeEl(event.currentTarget);
  };
  const handleSizeClose = (value) => {
    setAnchorSizeEl(null)
    if(value !== null) {
        setSelectedSize(value);
    }
  };
  const handleQtyClick = (event) => {
    setAnchorQtyEl(event.currentTarget);
  };
  const handleQtyClose = (value) => {
    setAnchorQtyEl(null);
    if(value !== null) {
        setSelectedQty(value);
    }
  };
  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[15%] rounded-md overflow-hidden">
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

        <div className="flex items-center gap-4 my-2">
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] font-[600] py-1 rounded-md text-[13px] cursor-pointer gap-1 px-2"
              onClick={handleSizeClick}
            >
              Size {selectedSize}
              <IoMdArrowDropdown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={anchorSizeEl}
              open={openSize}
              onClose={() => handleSizeClose(null)}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <MenuItem onClick={() => handleSizeClose('M')}>S</MenuItem>
              <MenuItem onClick={() => handleSizeClose('M')}>M</MenuItem>
              <MenuItem onClick={() => handleSizeClose('L')}>L</MenuItem>
              <MenuItem onClick={() => handleSizeClose('XL')}>XL</MenuItem>
              <MenuItem onClick={() => handleSizeClose('XXL')}>XXL</MenuItem>
            </Menu>
          </div>
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] font-[600] py-1 rounded-md text-[13px] cursor-pointer gap-1 px-2"
              onClick={handleQtyClick}
            >
              Qty : {selectedQty}
              <IoMdArrowDropdown />
            </span>
            <Menu
              id="qty-menu"
              anchorEl={anchorQtyEl}
              open={openQty}
              onClose={() => handleQtyClose(null)}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <MenuItem onClick={() => handleQtyClose(1)}>1</MenuItem>
              <MenuItem onClick={() => handleQtyClose(2)}>2</MenuItem>
              <MenuItem onClick={() => handleQtyClose(3)}>3</MenuItem>
              <MenuItem onClick={() => handleQtyClose(4)}>4</MenuItem>
              <MenuItem onClick={() => handleQtyClose(5)}>5</MenuItem>
              <MenuItem onClick={() => handleQtyClose(6)}>6</MenuItem>
              <MenuItem onClick={() => handleQtyClose(7)}>7</MenuItem>
              <MenuItem onClick={() => handleQtyClose(8)}>8</MenuItem>
              <MenuItem onClick={() => handleQtyClose(9)}>9</MenuItem>
              <MenuItem onClick={() => handleQtyClose(10)}>10</MenuItem>
            </Menu>
          </div>
        </div>
        <div className="price flex gap-2  mt-2">
          <h3 className=" font-bold text-[14px]">$45.00</h3>
          <h3 className="line-through text-gray-400 text-[14px]">$51.00</h3>
          <span className="text-[var(--color-primary)] font-bold text-[14px]">
            55% off
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
