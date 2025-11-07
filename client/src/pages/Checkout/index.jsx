import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
const Checkout = () => {
  return (
    <section className="py-10">
      <div className="container flex gap-5">
        <div className="leftPart w-[70%]">
          <div className="card bg-white shadow-md p-5 rounded-md w-full">
            <h3 className="text-[20px] font-[600]">Billing Details</h3>
            <form className="w-full">
              <div className="flex items-center gap-3 my-6">
                <TextField
                  id="outlined-basic"
                  label="Full Name *"
                  variant="outlined"
                  className="w-[50%]"
                  size="small"
                  type="text"
                />
                <TextField
                  id="outlined-basic"
                  label="Email * "
                  variant="outlined"
                  className="w-[50%]"
                  size="small"
                  type="email"
                />
              </div>
              <h4 className="text-[14px] font-[500] mb-2">Street Address *</h4>
              <TextField
                id="outlined-basic"
                label="House Number and Street Name"
                variant="outlined"
                className="w-full !mb-5"
                size="small"
                type="text"
              />
              <TextField
                id="outlined-basic"
                label="Appartment, Suite, Unit, etc. (optional)"
                variant="outlined"
                className="w-full !mb-6"
                size="small"
                type="text"
              />
              <h4 className="text-[14px] font-[500] mb-2">Town/City *</h4>
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                className="w-full !mb-6"
                size="small"
                type="text"
              />
              <h4 className="text-[14px] font-[500] mb-1">State/Country *</h4>
              <TextField
                id="outlined-basic"
                label="State"
                variant="outlined"
                className="w-full !mb-6"
                size="small"
                type="text"
              />
              <h4 className="text-[14px] font-[500] mb-2">Postcode/ZIP *</h4>
              <TextField
                id="outlined-basic"
                label="ZIP Code"
                variant="outlined"
                className="w-full !mb-6"
                size="small"
                type="text"
              />
              <div className="flex items-center gap-3 mb-6">
                <TextField
                  id="outlined-basic"
                  label="Phone number"
                  variant="outlined"
                  className="w-[50%]"
                  size="small"
                  type="text"
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className="w-[50%]"
                  size="small"
                  type="text"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="rightPart w-[30%]">
          <div className="card shadow-md bg-white p-5 rounded-md ">
            <h1 className="text-[20px] font-[600] mb-4">Your Order</h1>
            <div className="flex items-center py-3 justify-between border-[rgba(0,0,0,0.1)] border-t border-b">
              <span className="text-[14px] font-[500] ">Product</span>
              <span className="text-[14px] font-[500] ">Subtotal</span>
            </div>
            <div className="scroll max-h-[260px] overflow-y-scroll overflow-x-hidden pr-2">
              <div className="flex items-center py-3 justify-between">
                <div className="part1 flex items-center gap-3 w-[50px] h-[50px] object-cover overflow-hidden group rounded-md cursor-pointer">
                  <img
                    src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
                    alt=""
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="info">
                  <h4 className="text-[14px] font-[500]">
                    Apple iPhone 13 128 GB, Midnight (Black)
                  </h4>
                  <span className="text-[13px]">Qty: 1</span>
                </div>
                <span className="text-[14px] font-[500]">$2100.00</span>
              </div>
              <div className="flex items-center py-3 justify-between">
                <div className="part1 flex items-center gap-3 w-[50px] h-[50px] object-cover overflow-hidden group rounded-md cursor-pointer">
                  <img
                    src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
                    alt=""
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="info">
                  <h4 className="text-[14px] font-[500]">
                    Apple iPhone 13 128 GB, Midnight (Black)
                  </h4>
                  <span className="text-[13px]">Qty: 1</span>
                </div>
                <span className="text-[14px] font-[500]">$2100.00</span>
              </div>
              <div className="flex items-center py-3 justify-between">
                <div className="part1 flex items-center gap-3 w-[50px] h-[50px] object-cover overflow-hidden group rounded-md cursor-pointer">
                  <img
                    src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
                    alt=""
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="info">
                  <h4 className="text-[14px] font-[500]">
                    Apple iPhone 13 128 GB, Midnight (Black)
                  </h4>
                  <span className="text-[13px]">Qty: 1</span>
                </div>
                <span className="text-[14px] font-[500]">$2100.00</span>
              </div>
              <div className="flex items-center py-3 justify-between">
                <div className="part1 flex items-center gap-3 w-[50px] h-[50px] object-cover overflow-hidden group rounded-md cursor-pointer">
                  <img
                    src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
                    alt=""
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="info">
                  <h4 className="text-[14px] font-[500]">
                    Apple iPhone 13 128 GB, Midnight (Black)
                  </h4>
                  <span className="text-[13px]">Qty: 1</span>
                </div>
                <span className="text-[14px] font-[500]">$2100.00</span>
              </div>
            </div>
            <Button className="btn-org btn-lg w-full !mt-5 gap-2"><MdOutlineShoppingCartCheckout className="!text-[20px]"/> Checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
