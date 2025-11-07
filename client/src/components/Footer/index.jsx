import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsChatRight } from "react-icons/bs";
import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { TiSocialFacebook } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-white">
        <div className="container">
          <div className="flex items-center justify-center gap-20 ">
            <div className="col1 flex flex-col items-center gap-1">
              <Link to="/" className="link hover:-translate-y-2">
                <LiaShippingFastSolid className="text-5xl" />
              </Link>
              <h1 className="text-[18px] font-medium">Free Shipping</h1>
              <p className="text-sm">For an Exchange Product</p>
            </div>
            <div className="col2 flex flex-col items-center">
              <Link to="/" className="link hover:-translate-y-2">
                <IoWalletOutline className="text-5xl" />
              </Link>
              <h1 className="text-[18px] font-medium">Secured Payment</h1>
              <p className="text-sm">Payment Cards Accepted</p>
            </div>
            <div className="col3 flex flex-col items-center">
              <Link to="/" className="link hover:-translate-y-2">
                <IoGiftOutline className="text-5xl" />
              </Link>
              <h1 className="text-[18px] font-medium">Special Gifts</h1>
              <p className="text-sm">Our First Product Order</p>
            </div>
            <div className="col4 flex flex-col items-center">
              <Link to="/" className="link hover:-translate-y-2">
                <BiSupport className="text-5xl" />
              </Link>
              <h1 className="text-[18px] font-medium">Support 24/7</h1>
              <p className="text-sm">Contact us Anytime</p>
            </div>
            <div className="col5 flex flex-col items-center">
              <Link to="/" className="link hover:-translate-y-2">
                <PiKeyReturn className="text-5xl" />
              </Link>
              <h1 className="text-[18px] font-medium">30 Days Returns</h1>
              <p className="text-sm">For an Exchange Product</p>
            </div>
          </div>
          <br />
          <hr className="text-gray-300 mt-8" />
          <div className="footer flex  py-8">
            <div className="part1 w-[25%] border-r-1 border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[18px] font-[600]">Contact us</h2>
              <p className="text-[13px] font-[400] pb-4">
                Classyshop - Mega Super Store <br />
                507-Union Trade Centre France
              </p>
              <Link
                to="mailto:someone@example.com"
                className="mailId link text-[13px]"
              >
                sales@yourcompany.com
              </Link>
              <span className="text-[25px] font-[600] block mt-3 text-primary mb-5">
                (+91) 9876-543-210
              </span>

              <div className="flex items-center gap-2 ">
                <BsChatRight className="text-[40px] text-primary" />
                <span className="text-[16px] font-[600]">
                  Onlie Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>
            <div className="part2 w-[40%] flex pl-8">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                <ul className="list space-y-2">
                  <li className="list-none text-[14px] w-full">
                    <Link to="/" className="link">
                      Prices drop
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full">
                    <Link to="/" className="link">
                      New Products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full">
                    <Link to="/" className="link">
                      Best Sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full">
                    <Link to="/" className="link">
                      Contact Us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full">
                    <Link to="/" className="link">
                      Sidemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full">
                    <Link to="/" className="link">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="part2_col2">
                <h2 className="text-[18px] font-[600] mb-4">Our Company</h2>
                <ul className="list space-y-2">
                  <li className="list-none text-[14px] w-full">
                    <Link to="/" className="link">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full">
                    <Link to="/" className="link">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full">
                    <Link to="/" className="link">
                      Terms And Conditions Of Use
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full">
                    <Link to="/" className="link">
                      About Us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full">
                    <Link to="/" className="link">
                      Secure Payment
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full">
                    <Link to="/" className="link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part3 w-[35%] flex flex-col px-8">
              <h2 className="text-[18px] font-[600] mb-4">
                Subscribe to newsletter
              </h2>
              <p className="text-[13px]">
                Subscribe to our latest newsletter to get new about special
                discounts.
              </p>
              <form className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border border-gray-400 outline-none px-4 rounded-sm mb-2 focus:border-gray-500"
                  placeholder="Your Email Address"
                />
                <Button className="btn-org ">Subscribe</Button>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="I agree to the terms and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip bg-white border-t border-[rgba(0,0,0,0.8)] py-3 ">
        <div className="container flex items-center justify-between">
          <ul className="flex">
            <li className="list-none">
              <Link to='/' target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] group hover:bg-primary transition-all flex items-center justify-center p-2"><TiSocialFacebook className="text-[15px] w-full h-full group-hover:text-white"/></Link>
            </li>
            <li className="list-none">
              <Link to='/' target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] group hover:bg-primary transition-all flex items-center justify-center p-2"><FaYoutube className="text-[15px] w-full h-full group-hover:text-white"/></Link>
            </li>
            <li className="list-none">
              <Link to='/' target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] group hover:bg-primary transition-all flex items-center justify-center p-2"><FaXTwitter className="text-[15px] w-full h-full group-hover:text-white"/></Link>
            </li>
            <li className="list-none">
              <Link to='/' target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] group hover:bg-primary transition-all flex items-center justify-center p-2"><FaInstagram className="text-[15px] w-full h-full group-hover:text-white"/></Link>
            </li>
          </ul>
          <p className="text-[13px] text-center font-light">© 2024 - Ecommerce Template</p>
          <div className="flex items-center justify-center">
            <img src="/carte_blue.png" alt="" />
            <img src="/visa.png" alt="" />
            <img src="/paypal.png" alt="" />
            <img src="/american_express.png" alt="" />
            <img src="/master_card.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
