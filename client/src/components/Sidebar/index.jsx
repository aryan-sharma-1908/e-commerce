import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Rating from "@mui/material/Rating";
const Sidebar = () => {
  const [rating, setRating] = React.useState(5);
  function priceText(price) {
    return `$ ${price}`;
  }
  const [price, setPrice] = React.useState([1000, 7999]);

  const handleChange = (event, newPrice) => {
    setPrice(newPrice);
  };
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(false);
  const [isOpenAvailabilityFilter, setIsOpenAvailabilityFilter] =
    useState(false);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(false);
  const [isOpenPriceFilter, setIsOpenPriceFilter] = useState(false);
  const [isOpenRatingFilter, setIsOpenRatingFilter] = useState(false);
  const openCategoryFilter = () => {
    setIsOpenCategoryFilter(!isOpenCategoryFilter);
  };
  const openAvailabilityFilter = () => {
    setIsOpenAvailabilityFilter(!isOpenAvailabilityFilter);
  };
  const openSizeFilter = () => {
    setIsOpenSizeFilter(!isOpenSizeFilter);
  };
  const openPriceFilter = () => {
    setIsOpenPriceFilter(!isOpenPriceFilter);
  };
  const openRatingFilter = () => {
    setIsOpenRatingFilter(!isOpenRatingFilter);
  };
  return (
    <div className="sidebar py-5 space-y-2">
      <div className="box !mr-5">
        <div className="heading flex items-center text-center justify-between mb-1">
          <h3 className="text-[16px] font-[700]">Shop By Category</h3>
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !text-black "
            onClick={openCategoryFilter}
          >
            {isOpenCategoryFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </div>

        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-3 relative -left-[10px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Electronics"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Beauty"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Groceries"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Footwear"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Wellness"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Jewellary"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box !mr-5">
        <div className="heading flex items-center text-center justify-between mb-1">
          <h3 className="text-[16px] font-[700]">Availibility</h3>
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !text-black "
            onClick={openAvailabilityFilter}
          >
            {isOpenAvailabilityFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </div>

        <Collapse isOpened={isOpenAvailabilityFilter}>
          <div className="scroll px-3 relative -left-[10px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In Stock"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not Available"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box !mr-5">
        <div className="heading flex items-center text-center justify-between mb-1">
          <h3 className="text-[16px] font-[700]">Size</h3>
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !text-black "
            onClick={openSizeFilter}
          >
            {isOpenSizeFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </div>

        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll px-3 relative -left-[10px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Small"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Medium"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Large"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XL"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XS"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box !mr-5">
        <div className="heading flex items-center text-center justify-between mb-1">
          <h3 className="text-[16px] font-[700]">Filter By Price</h3>
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !text-black "
            onClick={openPriceFilter}
          >
            {isOpenPriceFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </div>

        <Collapse isOpened={isOpenPriceFilter}>
          <Slider
            getAriaLabel={() => "price range"}
            value={price}
            min={0}
            max={10000}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={priceText}
          />
          <div className="flex justify-between items-center text-sm text-gray-600">
            <h3>Min : $ {price[0]}</h3>
            <h3>Max : $ {price[1]}</h3>
          </div>
        </Collapse>
      </div>

      <div className="box !mr-5">
        <div className="heading flex items-center text-center justify-between mb-1">
          <h3 className="text-[16px] font-[700]">Rating</h3>
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !text-black "
            onClick={openRatingFilter}
          >
            {isOpenRatingFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </div>

        <Collapse isOpened={isOpenRatingFilter}>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newRating) => {
              setRating(newRating);
            }}
          />
        </Collapse>
      </div>
    </div>
  );
};

export default Sidebar;
