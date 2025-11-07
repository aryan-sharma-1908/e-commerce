import React, {useState} from "react";
import Button from "@mui/material/Button";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";
import Link from "@mui/material/Link";

const CategoryCollapse = () => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);

  const toggleSubMenu = (index) => {
    if (subMenuIndex === index) setSubMenuIndex(null);
    else setSubMenuIndex(index);
  };
  const toggleInnerSubMenu = (index) => {
    console.log(innerSubMenuIndex);
    if (innerSubMenuIndex === index) setInnerSubMenuIndex(null);
    else setInnerSubMenuIndex(index);
  };
  return (
    <div className="scroll">
      <ul className="w-full">
        {/* Fashion Category */}
        <li className="list-none">
          {/* Main Fashion Item */}
          <div className="flex items-center justify-between px-3 py-3 hover:bg-gray-50 transition-colors">
            <Button className="!p-0 !min-w-0 !flex-1 !justify-start !font-medium !text-[14px] !text-gray-700 !normal-case">
              Fashion
            </Button>
            {subMenuIndex === 0 ? (
              <FaRegSquareMinus
                className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors text-sm transition"
                onClick={() => toggleSubMenu(0)}
              />
            ) : (
              <FaRegSquarePlus
                className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors text-sm transition"
                onClick={() => toggleSubMenu(0)}
              />
            )}
          </div>

          {subMenuIndex === 0 && (
            <ul className="bg-gray-25 submenu">
              {/* Apparel */}
              <li className="list-none">
                <div className="flex items-center justify-between px-6 py-2 hover:bg-gray-100 transition-colors">
                  <Button className="!p-0 !min-w-0 !flex-1 !justify-start !font-medium !text-[13px] !text-gray-600 !normal-case">
                    Apparel
                  </Button>
                  {innerSubMenuIndex === 0 ? (
                    <FaRegSquareMinus
                      className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors text-xs"
                      onClick={() => toggleInnerSubMenu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors text-xs"
                      onClick={() => toggleInnerSubMenu(0)}
                    />
                  )}
                </div>
                {innerSubMenuIndex === 0 && (
                  <ul className="bg-gray-50 inner_submenu">
                    <li className="list-none">
                      <div className="px-9 py-2 hover:bg-gray-100 transition-colors">
                        <Link
                          href="/"
                          className="!text-[12px]  !no-underline link transition-colors block"
                        >
                          Smart Tablet
                        </Link>
                      </div>
                    </li>
                    <li className="list-none">
                      <div className="px-9 py-2 hover:bg-gray-100 transition-colors">
                        <Link
                          href="/"
                          className="!text-[12px]  !no-underline link transition-colors block"
                        >
                          Crepe Tshirt
                        </Link>
                      </div>
                    </li>
                    <li className="list-none">
                      <div className="px-9 py-2 hover:bg-gray-100 transition-colors">
                        <Link
                          href="/"
                          className="!text-[12px]  !no-underline link transition-colors block"
                        >
                          Leather Watch
                        </Link>
                      </div>
                    </li>
                    <li className="list-none">
                      <div className="px-9 py-2 hover:bg-gray-100 transition-colors">
                        <Link
                          href="/"
                          className="!text-[12px]  !no-underline link transition-colors block"
                        >
                          Rolling Diamond
                        </Link>
                      </div>
                    </li>
                  </ul>
                )}
                {/* Apparel Submenu */}
              </li>

              {/* Outerwear */}
              <li className="list-none">
                <div className="flex items-center justify-between px-6 py-2 hover:bg-gray-100 transition-colors">
                  <Button className="!p-0 !min-w-0 !flex-1 !justify-start !font-medium !text-[13px] !text-gray-600 !normal-case">
                    Outerwear
                  </Button>
                  {innerSubMenuIndex === 1 ? (
                    <FaRegSquareMinus
                      className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors text-xs"
                      onClick={() => toggleInnerSubMenu(1)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors text-xs"
                      onClick={() => toggleInnerSubMenu(1)}
                    />
                  )}
                </div>
                {innerSubMenuIndex === 1 && (
                  <ul className="bg-gray-50 inner_submenu">
                    <li className="list-none">
                      <div className="px-9 py-2 hover:bg-gray-100 transition-colors">
                        <Link
                          href="/"
                          className="!text-[12px]  !no-underline link transition-colors block"
                        >
                          Wooden Chair
                        </Link>
                      </div>
                    </li>
                    <li className="list-none">
                      <div className="px-9 py-2 hover:bg-gray-100 transition-colors">
                        <Link
                          href="/"
                          className="!text-[12px]  !no-underline link transition-colors block"
                        >
                          Sneaker Shoes
                        </Link>
                      </div>
                    </li>
                    <li className="list-none">
                      <div className="px-9 py-2 hover:bg-gray-100 transition-colors">
                        <Link
                          href="/"
                          className="!text-[12px]  !no-underline link transition-colors block"
                        >
                          Purse
                        </Link>
                      </div>
                    </li>
                    <li className="list-none">
                      <div className="px-9 py-2 hover:bg-gray-100 transition-colors">
                        <Link
                          href="/"
                          className="!text-[12px]  !no-underline link transition-colors block"
                        >
                          Xbox Controller
                        </Link>
                      </div>
                    </li>
                  </ul>
                )}
              </li>

              {/* Footwear */}
              <li className="list-none">
                <div className="flex items-center justify-between px-6 py-2 hover:bg-gray-100 transition-colors">
                  <Button className="!p-0 !min-w-0 !flex-1 !justify-start !font-medium !text-[13px] !text-gray-600 !normal-case">
                    Footwear
                  </Button>
                  {innerSubMenuIndex === 2 ? (
                    <FaRegSquareMinus
                      className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors text-xs"
                      onClick={() => toggleInnerSubMenu(2)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors text-xs"
                      onClick={() => toggleInnerSubMenu(2)}
                    />
                  )}
                </div>
                {innerSubMenuIndex === 2 && (
                  <ul className="bg-gray-50 inner_submenu">
                    <li className="list-none">
                      <div className="px-9 py-2 hover:bg-gray-100 transition-colors">
                        <Link
                          href="/"
                          className="!text-[12px]  !no-underline link transition-colors block"
                        >
                          Leather Watch
                        </Link>
                      </div>
                    </li>
                    <li className="list-none">
                      <div className="px-9 py-2 hover:bg-gray-100 transition-colors">
                        <Link
                          href="/"
                          className="!text-[12px]  !no-underline link transition-colors block"
                        >
                          Cabinet Table
                        </Link>
                      </div>
                    </li>
                    <li className="list-none">
                      <div className="px-9 py-2 hover:bg-gray-100 transition-colors">
                        <Link
                          href="/"
                          className="!text-[12px]  !no-underline link transition-colors block"
                        >
                          Headphones
                        </Link>
                      </div>
                    </li>
                    <li className="list-none">
                      <div className="px-9 py-2 hover:bg-gray-100 transition-colors">
                        <Link
                          href="/"
                          className="!text-[12px]  !no-underline link transition-colors block"
                        >
                          Sunglasses
                        </Link>
                      </div>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        {/* Electronics Category */}
        <li className="list-none">
          <div className="flex items-center justify-between px-3 py-3 hover:bg-gray-50 transition-colors">
            <Link
              href="/"
              className="link !text-[14px]  !no-underline link transition-colors block !font-medium  !normal-case"
            >
              Electronic
            </Link>
          </div>
        </li>

        {/* Home & Garden Category */}
        <li className="list-none">
          <div className="flex items-center justify-between px-3 py-3 hover:bg-gray-50 transition-colors">
            <Button className="!p-0 !min-w-0 !flex-1 !justify-start !font-medium !text-[14px] !text-gray-700 !normal-case">
              Home & Garden
            </Button>
            <FaRegSquarePlus className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors text-sm" />
          </div>
        </li>

        {/* Sports Category */}
        <li className="list-none">
          <div className="flex items-center justify-between px-3 py-3 hover:bg-gray-50 transition-colors">
            <Button className="!p-0 !min-w-0 !flex-1 !justify-start !font-medium !text-[14px] !text-gray-700 !normal-case">
              Sports & Outdoors
            </Button>
            <FaRegSquarePlus className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors text-sm" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CategoryCollapse;
