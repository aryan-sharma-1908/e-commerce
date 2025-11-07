import React, { useState } from "react";
import { Avatar, Button, Divider, ListItemIcon } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaRegBell } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = ({setSidebarToggle}) => {
  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const openMyacc = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };
  return (
    <header className="w-full h-[80px] pl-52 bg-[#C5856D] flex items-center justify-between  py-2 px-2 shadow-md">
      <div className="part1">
        <img src='/logo.png' width={40} height={200}/>
        <Button className='!text-white !rounded-full !min-w-10 !w-10 !h-10 !shadow-md !shadow-[#B66649]' onClick={() => setSidebarToggle(true)}>
          <AiOutlineMenu />
        </Button>
      </div>
      <div className="part2 flex items-center justify-end gap-5 pr-5">
        <IconButton
          aria-label="cart"
          className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] "
        >
          <StyledBadge badgeContent={4} color="secondary">
            <FaRegBell className='text-white'/>
          </StyledBadge>
        </IconButton>

        <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer border border-gray-300">
          <img
            src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg"
            alt=""
            className="w-full h-full"
            onClick={handleClickMyAcc}
          />
        </div>
        <Menu
          anchorEl={anchorMyAcc}
          id="account-menu"
          open={openMyacc}
          onClose={handleCloseMyAcc}
          onClick={handleCloseMyAcc}
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
          <MenuItem onClick={handleCloseMyAcc} >
            <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer border border-gray-300 !bg-white">
              <img
                src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col pl-3">
              <h3 className="text-[15px] font-bold leading-5">Angelina Gotelli</h3>
              <h5 className="text-[12px] font-[400] opacity-70">admin-01@ecme.com</h5>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleCloseMyAcc} className="gap-5">
            <FaRegUser />
            <h3>Profile</h3>
          </MenuItem>
          <MenuItem onClick={handleCloseMyAcc} className="gap-5">
            <MdOutlineSettings />
            <h3>Settings</h3>
          </MenuItem>
          <MenuItem onClick={handleCloseMyAcc} className="gap-5">
            <FiActivity />
            <h3>Activity Log</h3>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleCloseMyAcc} className="gap-5">
            <MdLogout />
            <h3>Log Out</h3>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
