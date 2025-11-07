import { Button } from "@mui/material";
import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
const Sidebar = ({sidebarToggle,setSidebarToggle}) => {
  const handleCloseSidebar = () => {
    setSidebarToggle(false);
  }
  return (
    <div className={`fixed top-0 left-0 bg-[#C5856D] w-[18%] h-full shadow-md translate-x-[-100%] ${sidebarToggle && 'translate-x-[0%]'} transition`}>
      <Button className="!absolute !top-5 !right-5 !text-white !rounded-full !min-w-10 !w-10 !h-10 !shadow-md !shadow-[#B66649]" onClick={handleCloseSidebar}>
        <AiOutlineMenuUnfold/>
      </Button>
    </div>
  );
};

export default Sidebar;
