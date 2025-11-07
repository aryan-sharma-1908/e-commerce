import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { Button } from "@mui/material";
const CartPanel = ({ toggleCartPanel }) => {
  return (
    <>
      <div className="flex items-center justify-between py-3 px-4 gap-10 border-b border-b-[rgba(0,0,0,0.1)]">
        <h1 className="font-[600] px-2">Shopping Cart</h1>
        <IoClose
          className="!font-[500] !text-[20px] cursor-pointer"
          onClick={toggleCartPanel(false)}
        />
      </div>
      <div className="flex flex-col justify-between items-center h-full pb-3">
        <div className="scroll w-full max-h-[330px] overflow-y-scroll overflow-x-hidden">
          <div className="cartItem w-full flex items-center py-3 px-4 gap-4 border-b border-b-[rgba(0,0,0,0.1)]">
            <div className="img w-[25%] overflow-hidden h-[85px] rounded-md">
              <Link to="/product/231" className="block group">
                <img
                  src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
                  alt=""
                  className="w-full group-hover:scale-105"
                />
              </Link>
            </div>
            <div className="info w-[75%] pr-5 relative">
              <h5 className="text-[14px] font-[500]">
                <Link className="link cursor-pointer" to="/product/231">
                  Apple iPhone 13 128 GB, Midnight (Black)
                </Link>
              </h5>
              <p className="flex items-center gap-2 my-2">
                <span> Qty : </span>
                <span>2</span>
                <span className="text-primary font-bold">price : $25</span>
              </p>

              <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
            </div>
          </div><div className="cartItem w-full flex items-center py-3 px-4 gap-4 border-b border-b-[rgba(0,0,0,0.1)]">
            <div className="img w-[25%] overflow-hidden h-[85px] rounded-md">
              <Link to="/product/231" className="block group">
                <img
                  src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
                  alt=""
                  className="w-full group-hover:scale-105"
                />
              </Link>
            </div>
            <div className="info w-[75%] pr-5 relative">
              <h5 className="text-[14px] font-[500]">
                <Link className="link cursor-pointer" to="/product/231">
                  Apple iPhone 13 128 GB, Midnight (Black)
                </Link>
              </h5>
              <p className="flex items-center gap-2 my-2">
                <span> Qty : </span>
                <span>2</span>
                <span className="text-primary font-bold">price : $25</span>
              </p>

              <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
            </div>
          </div><div className="cartItem w-full flex items-center py-3 px-4 gap-4 border-b border-b-[rgba(0,0,0,0.1)]">
            <div className="img w-[25%] overflow-hidden h-[85px] rounded-md">
              <Link to="/product/231" className="block group">
                <img
                  src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
                  alt=""
                  className="w-full group-hover:scale-105"
                />
              </Link>
            </div>
            <div className="info w-[75%] pr-5 relative">
              <h5 className="text-[14px] font-[500]">
                <Link className="link cursor-pointer" to="/product/231">
                  Apple iPhone 13 128 GB, Midnight (Black)
                </Link>
              </h5>
              <p className="flex items-center gap-2 my-2">
                <span> Qty : </span>
                <span>2</span>
                <span className="text-primary font-bold">price : $25</span>
              </p>

              <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
            </div>
          </div>
          <div className="cartItem w-full flex items-center py-3 px-4 gap-4 border-b border-b-[rgba(0,0,0,0.1)]">
            <div className="img w-[25%] overflow-hidden h-[85px] rounded-md">
              <Link to="/product/231" className="block group">
                <img
                  src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
                  alt=""
                  className="w-full group-hover:scale-105"
                />
              </Link>
            </div>
            <div className="info w-[75%] pr-5 relative">
              <h5 className="text-[14px] font-[500]">
                <Link className="link cursor-pointer" to="/product/231">
                  Apple iPhone 13 128 GB, Midnight (Black)
                </Link>
              </h5>
              <p className="flex items-center gap-2 my-2">
                <span> Qty : </span>
                <span>2</span>
                <span className="text-primary font-bold">price : $25</span>
              </p>

              <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
            </div>
          </div>
        </div>

        <div className="bottomSec w-full">
          <div className="bottomInfo w-full border-t border-t-[rgba(0,0,0,0.1)] py-3 px-4 flex items-center justify-between flex-col">
            <div className="flex items-center justify-between w-full">
              <span className="text-[14px] font-[600]">1 item</span>
              <span className="text-primary font-bold">$25.00</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-[14px] font-[600]">Shipping</span>
              <span className="text-primary font-bold">$8.00</span>
            </div>
          </div>
          <div className="bottomInfo w-full border-t border-t-[rgba(0,0,0,0.1)] py-3 px-4 flex items-center justify-between flex-col">
            <div className="flex items-center justify-between w-full">
              <span className="text-[14px] font-[600]">Total (tax excl.)</span>
              <span className="text-primary font-bold">$93.00</span>
            </div>
          </div>

          <div className="flex items-center justify-between w-full px-2 gap-5">
            <Button className="btn-org btn-lg w-[50%]">
              <Link to="/cart">View Cart</Link>
            </Button>
            <Button className="btn-org btn-border btn-lg w-[50%]">
              <Link to="/checkout">Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
