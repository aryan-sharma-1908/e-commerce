import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import Button from "@mui/material/Button";
import { LiaAngleDownSolid } from "react-icons/lia";
import { BsRocketTakeoff } from "react-icons/bs";
import CategoryPanel from "./CategoryPanel";
import { Link } from "react-router-dom";
import "./style.css";
const Navigation = () => {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCategoryPanel(true);
  };

  return (
    <>
      <nav>
        <div className="container py-3 flex gap-10 items-center justify-between">
          <div className="col1 w-[20%]  flex items-center justify-between">
            <Button
              className="!text-gray-400 !rounded-full !min-w-3 !gap-3"
              onClick={openCategoryPanel}
            >
              <RiMenu2Line className="text-black text-xl" />
              <h4 className="font-medium text-sm text-black cursor-pointer">
                SHOP BY CATEGORIES
              </h4>
              <LiaAngleDownSolid className="text-black" />
            </Button>
          </div>
          <div className="col2 w-[60%] flex items-center justify-between">
            <ul className="flex items-center justify-between gap-10 ">
              <li className="list-none">
                <Button className="Button !capitalize">
                  <Link
                    className="link transition cursor-pointer !font-[500]"
                    to="/"
                  >
                    Home
                  </Link>
                </Button>
              </li>
              <li className="list-none relative">
                <Button className="Button !capitalize ">
                  <Link className="link transition cursor-pointer !font-[500]" to='/product-listing'>
                    Fashion
                  </Link>
                </Button>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md transition-all z-50">
                  <ul>
                    <li className="list-none w-full relative">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none !capitalize relative ">
                        <Link className="link transition cursor-pointer !font-[400]">
                          Men
                        </Link>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none !capitalize">
                                <Link className="link transition cursor-pointer !font-[400]">
                                  T-shirts
                                </Link>
                              </Button>
                            </li>
                            <li className="list-none w-full! justify-start !text-left">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none !capitalize">
                                <Link className="link transition cursor-pointer !font-[400]">
                                  Jeans
                                </Link>
                              </Button>
                            </li>
                            <li className="list-none w-full !justify-start !text-left">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none !capitalize">
                                <Link className="link transition cursor-pointer !font-[400]">
                                  Watch
                                </Link>
                              </Button>
                            </li>
                            <li className="list-nonew-full !justify-start !text-left">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none !capitalize">
                                <Link className="link transition cursor-pointer !font-[400]">
                                  Belt
                                </Link>
                              </Button>
                            </li>
                            <li className="list-none w-full !justify-start !text-left">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none !capitalize">
                                <Link className="link transition cursor-pointer !font-[400]">
                                  Trousers
                                </Link>
                              </Button>
                            </li>
                          </ul>
                        </div>
                      </Button>
                    </li>
                    <li className="list-none w-full! justify-start !text-left">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none !capitalize">
                        <Link className="link transition cursor-pointer !font-[400]">
                          Women
                        </Link>
                      </Button>
                    </li>
                    <li className="list-none w-full !justify-start !text-left">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none !capitalize">
                        <Link className="link transition cursor-pointer !font-[400]">
                          Kids
                        </Link>
                      </Button>
                    </li>
                    <li className="list-nonew-full !justify-start !text-left">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none !capitalize">
                        <Link className="link transition cursor-pointer !font-[400]">
                          Girls
                        </Link>
                      </Button>
                    </li>
                    <li className="list-none w-full !justify-start !text-left">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none !capitalize">
                        <Link className="link transition cursor-pointer !font-[400]">
                          Boys
                        </Link>
                      </Button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Button className="Button !capitalize">
                  <Link className="link transition cursor-pointer !font-[500]">
                    Electronics
                  </Link>
                </Button>
              </li>
              <li className="list-none">
                <Button className="Button !capitalize">
                  <Link className="link transition cursor-pointer !font-[500]">
                    Bags
                  </Link>
                </Button>
              </li>
              <li className="list-none">
                <Button className="Button !capitalize">
                  <Link className="link transition cursor-pointer !font-[500]">
                    Footwear
                  </Link>
                </Button>
              </li>
              <li className="list-none">
                <Button className="Button !capitalize">
                  <Link className="link transition cursor-pointer !font-[500]">
                    Groceries
                  </Link>
                </Button>
              </li>
              <li className="list-none">
                <Button className="Button !capitalize">
                  <Link className="link transition cursor-pointer !font-[500]">
                    Beauty
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
          <div className="col3 w-[20%] flex gap-3 items-center">
            <BsRocketTakeoff />
            <p className="font-[500] text-[14px]">
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>
      <aside>
        <CategoryPanel
          setIsOpenCategoryPanel={setIsOpenCategoryPanel}
          isOpenCategoryPanel={isOpenCategoryPanel}
        />
      </aside>
    </>
  );
};

export default Navigation;
