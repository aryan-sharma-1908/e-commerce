import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import AccountSidebar from "../../components/AccountSidebar";
const MyAccount = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar/>
        </div>
        <div className="col2 w-[70%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="pb-3 text-[20px] font-[500]">My Profile</h2>
            <hr className="text-[rgba(0,0,0,0.1)]" />
            <form action="" className="mt-5">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-[50%]">
                  <TextField
                    required
                    label="Full Name"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    required
                    label="Email"
                    size="small"
                    className="w-full"
                  />
                </div>
               
              </div>
              <div className="flex items-center">
                
                <div className="w-[50%]">
                  <TextField
                    required
                    label="Phone Number"
                    size="small"
                    className="w-full"
                  />
                </div>
               
              </div>
              <br />
              <div className="flex items-center gap-5">
                <Button className="btn-org btn-lg !capitalize w-[100]">save</Button>
                <Button className="btn-org btn-border btn-lg  !capitalize w-[100]">cancel</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
