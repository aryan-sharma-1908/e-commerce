import React,{useState} from 'react'
import QtyBox from "../../components/QtyBox";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import { IoIosGitCompare } from "react-icons/io";
import { Button, Rating, Stack } from '@mui/material';
const ProductDetailsInfo = () => {
    const [productSize, setProductSize] = useState(null);
  return (
     <div className="productContent w-[60%] pl-5">
            <h3 className="text-[var(--color-primary)] hover:underline py-5 text-[16px] font-[600]">
              Apple
            </h3>
            <h1 className="text-[22px] font-[600] pb-5">
              Apple iPhone 13 128 GB, Midnight (Black)
            </h1>
            <div className="rating flex gap-2 pb-5">
              <Stack spacing={1}>
                <Rating
                  name="size-medium"
                  defaultValue={4}
                  size="medium"
                  readOnly
                />
              </Stack>
              <h3 className="text-[var(--color-primary)] text-[18px] font-[700]">
                (2122)
              </h3>
            </div>
            <div className="newPrice flex gap-4 items-center">
              <h2 className="font-[1000] text-[24px]">₹42,780.00</h2>
              <h2 className="text-green-700 font-[500] text-[18px] rounded-md bg-green-200 w-[80px] text-center flex justify-center items-center h-[28px]">
                14% off
              </h2>
            </div>
            <div className="oldPrice pb-5">
              <h2 className="flex gap-2 text-gray-500">
                M.R.P: <span className="line-through">₹49,900.00</span>(Incl. of
                all taxes)
              </h2>
            </div>

            <div className="description pb-5">
              <h2 className="text-[var(--color-primary)] text-[18px] font-[700]">
                Product Description
              </h2>
              <p className="text-gray-600">
                The Apple iPhone 13 is a smartphone that was tested with the iOS
                15 operating system. This model weighs 174 grams, has a 6.1 inch
                display, 12-megapixel main camera, and 12-megapixel selfie
                camera. It comes with 128 GB of built-in storage.
              </p>
            </div>

            <div className="flex items-center gap-2 pb-5">
              <h2 className="text-gray-600 text-[16px] font-[500]">Size: </h2>
              <div className="flex items-center gap-1">
                <Button
                  className={`!min-w-[40px] !text-[#000] !border-1 ${
                    productSize === 0
                      ? "!bg-primary !text-white "
                      : " !border-gray-200"
                  } `}
                  onClick={() => setProductSize(0)}
                >
                  128GB
                </Button>
                <Button
                  className={`!min-w-[40px] !text-[#000] !border-1 ${
                    productSize === 1
                      ? "!bg-primary !text-white "
                      : " !border-gray-200"
                  } `}
                  onClick={() => setProductSize(1)}
                >
                  256GB
                </Button>
                <Button
                  className={`!min-w-[40px] !text-[#000] !border-1 ${
                    productSize === 2
                      ? "!bg-primary !text-white "
                      : " !border-gray-200"
                  } `}
                  onClick={() => setProductSize(2)}
                >
                  512GB
                </Button>
              </div>
            </div>

            <h1 className="text-black pb-5">
              Free Shipping (Est. Delivery Time 2-3 Days)
            </h1>

            <div className="flex items-center gap-5 pb-5">
              <div className="qtyBoxWrapper">
                <QtyBox />
              </div>
              <Button className="btn-org gap-1">
                <IoMdCart className="text-xl" /> <span>Add to Cart</span>
              </Button>
              <div className="whishListAndCompare flex gap-2">
                <span className="flex items-center justify-center text-center rounded-full bg-white border-1 border-gray-300 p-2 hover:text-white hover:bg-primary cursor-pointer">
                  <Tooltip title="Add to wishlist" placement="right-end">
                    <FaRegHeart />
                  </Tooltip>
                </span>
                <span className="flex items-center justify-center text-center rounded-full bg-white border-1 border-gray-300 p-2 hover:text-white hover:bg-primary rotate-270  cursor-pointer">
                  <Tooltip title="Compare" placement="right-end">
                    <IoIosGitCompare className="text-xl" />
                  </Tooltip>
                </span>
              </div>
            </div>
          </div>
  )
}

export default ProductDetailsInfo
