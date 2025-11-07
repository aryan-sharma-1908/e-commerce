import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Search from "../Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation";
import { MyContext } from "../../App";
import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdLogout } from "react-icons/md";
const Header = () => {
  const context = useContext(MyContext);
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const [anchorProfileEl, setAnchorProfileEl] = useState(null);

  const open = Boolean(anchorProfileEl);

  const handleProfileClick = (event) => {
    setAnchorProfileEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorProfileEl(null);
  };

  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-gray-200 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-medium">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className="flex items-center justify-end">
              <ul className="flex items-center gap-3 text-center">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="link text-[12px]  font-medium transition"
                  >
                    help-center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[12px] link font-medium transition"
                  >
                    order-tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header py-3 border-t-[1px] border-gray-200 border-b-[1px]">
        <div className="container flex justify-between items-center !mt-2">
          <div className="col1 w-[25%]">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="col2 w-[50%]">
            <Search />
          </div>
          <div className="col3 w-[25%] flex items-center !pl-10">
            <ul className="flex items-center gap-3 justify-end w-full">
              {!context.isLoggedIn ? (
                <li className="list-none">
                  <Link to="/login" className="link transition font-medium">
                    Login
                  </Link>{" "}
                  |{" "}
                  <Link to="/register" className="link transition font-medium">
                    Register
                  </Link>
                </li>
              ) : (
                <>
                  <Button
                    className="myAccount flex items-center gap-3 cursor-pointer !bg-[#f1f1f1] !w-[40px] !h-[40px] !min-w-[40px] !rounded-full"
                    onClick={handleProfileClick}
                  >
                    <FaRegUser className="!text-[20px] !rounded-full !w-full !text-black" />
                  </Button>
                  <Menu
                    anchorEl={anchorProfileEl}
                    id="account-menu"
                    open={open}
                    onClose={handleProfileClose}
                    onClick={handleProfileClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link to="/my-account">
                      <MenuItem
                        onClick={handleProfileClose}
                        className="flex items-center gap-2 !py-2"
                      >
                        <FaRegUser className="text-[18px]" />
                        <span className="text-[16px]"> My account</span>
                      </MenuItem>
                    </Link>
                    <Link to="/my-orders">
                      <MenuItem
                        onClick={handleProfileClose}
                        className="flex items-center gap-2 !py-2"
                      >
                        <MdOutlineShoppingBag className="text-[18px]" />
                        <span className="text-[16px]"> Orders</span>
                      </MenuItem>
                    </Link>
                    <Link to="/my-list">
                      <MenuItem
                        onClick={handleProfileClose}
                        className="flex items-center gap-2 !py-2"
                      >
                        <FaRegHeart className="text-[18px]" />
                        <span className="text-[16px]"> My List</span>
                      </MenuItem>
                    </Link>
                    <MenuItem
                      onClick={handleProfileClose}
                      className="flex items-center gap-2 !py-2"
                    >
                      <MdLogout className="text-[18px]" />
                      <span className="text-[16px]"> Logout</span>
                    </MenuItem>
                  </Menu>
                </>
              )}
              <hr className="rotate-180 text-gray-500" />
              <li>
                <Tooltip title="compare" placement="bottom">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={2} color="secondary">
                      <IoGitCompareOutline />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="wishlist" placement="bottom">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={2} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="cart" placement="bottom">
                  <IconButton
                    aria-label="cart"
                    onClick={context.toggleCartPanel(true)}
                  >
                    <StyledBadge badgeContent={2} color="secondary">
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
