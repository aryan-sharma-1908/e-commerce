import React from "react";
import "./index.css";
import { IoSearch } from "react-icons/io5";
import Button from "@mui/material/Button";
const Search = () => {
  return (
    <div className="searchBox w-full h-[50px] bg-[#E5E5E5] relative flex justify-between items-center rounded">
      <input
        type="text"
        placeholder="Search for products"
        className="w-full h-[35px] outline-none !px-[12px] text-[15px]"
      />
      <Button className="!absolute top-[5px] right-[5px] z-50 !w-[35px] !min-w-[37px] h-[37px] !rounded-full !text-gray-400">
        <IoSearch className="text-9xl text-black" />
      </Button>
    </div>
  );
};

export default Search;
