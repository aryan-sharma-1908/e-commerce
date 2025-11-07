import React, {useState} from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoMdArrowDropdown } from "react-icons/io";
import { Button, Rating } from "@mui/material";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import CartItem from "./CartItem";
const CartPage = () => {
    
  return (
    <section className="section py-10">
      <div className="container w-[80%] max-w-[70%] flex gap-5">
        <div className="leftPart w-[70%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="pt-2 pb-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-0 mb-3">
                There are <span className="font-bold text-primary ">2 </span>
                Products in your cart
              </p>
            </div>
            <CartItem size='S' qty={1}/>
            <CartItem size='S' qty={1}/>
          </div>
        </div>
        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md bg-white p-5">
            <h3 className="text-[20px] font-[600] pb-3 uppercase">Cart Totals</h3>
            <hr className="text-[rgba(0,0,0,0.1)]" />

            <p className="flex items-center justify-between pt-2">
              <span className="text-[14px] font-[500]">SubTotal</span>
              <span className="text-primary font-bold">$45.00</span>
            </p>
            <p className="flex items-center justify-between pt-2">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className=" font-bold">Free</span>
            </p>
            <p className="flex items-center justify-between pt-2">
              <span className="text-[14px] font-[500]">Estimate for</span>
              <span className=" font-bold">United Kingdom</span>
            </p>
            <p className="flex items-center justify-between pt-2 pb-2">
              <span className="text-[14px] font-[500]">Total</span>
              <span className="text-primary font-bold">$45.00</span>
            </p>

            <Button className="btn-org btn-lg w-full gap-2">
              <MdOutlineShoppingCartCheckout className="text-[20px]" />
              Checkout{" "}
            </Button>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
