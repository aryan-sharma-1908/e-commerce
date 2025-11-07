import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseOutline } from "react-icons/io5";
import "./style.css";
import CategoryCollapse from "../../CategoryCollapse";

const CategoryPanel = ({ setIsOpenCategoryPanel, isOpenCategoryPanel }) => {

  const toggleDrawer = (newOpen) => () => {
    setIsOpenCategoryPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      {/* Header */}
      <div className="sidebar-head flex justify-between items-center px-3 py-3 border-b border-gray-200">
        <h3 className="text-[15px] font-bold text-gray-800">
          Shop By Categories
        </h3>
        <IoCloseOutline
          className="text-[25px] text-gray-600 cursor-pointer hover:text-gray-800 transition-colors"
          onClick={toggleDrawer(false)}
        />
      </div>

      {/* Content */}
      <CategoryCollapse/>
    </Box>
  );

  return (
    <div>
      <Drawer open={isOpenCategoryPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
