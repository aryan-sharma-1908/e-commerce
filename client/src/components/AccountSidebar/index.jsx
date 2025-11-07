import { Button } from "@mui/material";
import React from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdLogout, MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AccountSidebar = () => {
  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[40px]">
      <div className="w-full p-3 flex items-center justify-center flex-col">
        <div className="w-[110px] h-[110px] rounded-full shadow-md p-[2px] relative group">
          <img
            src="https://imgs.search.brave.com/SA3pAAknxc48gHaUQWbxObLJAUHdD5Mw_g7KDZJ5UZ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNDMw/Nzg4NC9wZXhlbHMt/cGhvdG8tNDMwNzg4/NC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA"
            alt="Profile"
            className="w-full h-full object-cover rounded-full mb-6"
          />
          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] rounded-full flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
            <IoCloudUploadOutline className="text-[25px] text-white " />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0"
            />
          </div>
        </div>
        <h3 className="text-[18px] font-[600]">Aryan Sharma</h3>
        <h6 className="text-[13px] font-[500]">aryansharma81828@gmail.com</h6>
      </div>
      <ul className="list-none bg-[#f1f1f1] myAccountTabs">
        <li className="w-full">
          <NavLink to="/my-account" activeClassName="isActive" exact={true}>
            <Button className="flex items-center gap-2 !justify-start !text-[rgba(0,0,0,0.8)] !text-[16px] !capitalize !font-[500] w-full rounded-none !pl-5 !py-2">
              <FaRegUser className="!text-[15px]" />
              My Profile
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-list" activeClassName="isActive" exact={true}>
            <Button className="flex items-center gap-2 !justify-start !text-[rgba(0,0,0,0.8)] !text-[16px] !capitalize !font-[500] w-full rounded-none !pl-5 !py-2">
              <FaRegHeart className="!text-[15px]" />
              My List
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-orders" activeClassName="isActive" exact={true}>
            <Button className="flex items-center gap-2 !justify-start !text-[rgba(0,0,0,0.8)] !text-[16px] !capitalize !font-[500] w-full rounded-none !pl-5 !py-2">
              <MdOutlineShoppingBag className="!text-[15px]" />
              My Orders
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <Button className="flex items-center gap-2 !justify-start !text-[rgba(0,0,0,0.8)] !text-[16px] !capitalize !font-[500] w-full rounded-none !pl-5 !py-2">
            <MdLogout className="!text-[15px]" />
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
