import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { IoIosRemoveCircle } from "react-icons/io";
import Button from "@mui/material/Button";
import { IoAddCircle } from "react-icons/io5";
const QtyBox = () => {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div className="qtyBox">
      <div className="flex items-center gap-1">
        <Button className="!p-0 !bg-primary !text-white !rounded-full active:scale-105 !h-[30px] !w-[30px] !min-w-[30px]"  onClick={() => setQuantity(prev => prev - 1)} disabled={quantity === 1}>
          <IoIosRemoveCircle className={`${quantity === 1 ? 'text-gray-300' : 'text-primary'} w-full h-full !p-0 bg-white`}/>
        </Button>
        <span className="bg-gray-100 rounded-md text-2xl flex items-center justify-center w-[40px] h-[40px]">
          {quantity}
        </span>
        <Button className="!p-0 !bg-primary !text-white !rounded-full active:scale-105 !h-[30px] !w-[30px] !min-w-[30px]" onClick={() => setQuantity(prev => prev + 1)}>
          <IoAddCircle className="w-full h-full !p-0 bg-white text-green-500" />
        </Button>
      </div>
    </div>
  );
};

export default QtyBox;
