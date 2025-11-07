import React,{useState} from "react";
import Sidebar from "../../components/Sidebar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/ProductItem";
import Button from "@mui/material/Button";
import { IoGrid } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "@mui/material/MenuItem";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import ProductItemListView from "../../components/ProductItemListView";
import Pagination from '@mui/material/Pagination';
const ProductListing = () => {
  const [open, setOpen] = useState(false);
  const [itemView, setItemView] = useState('list');
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <section className="py-3">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" className="link">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            className="link"
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>
      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <Sidebar />
          </div>
          <div className="rightContent w-[80%]">
            <div className="bg-[#f1f1f1] w-full p-2 mb-2 rounded-md flex items-center justify-between py-3">
              <div className="col1 flex items-center itemViewActions">
                <Button className={`!text-[#000] !rounded-full !w-[30px] !h-[30px] !min-w-[30px] ${itemView === 'list' && 'active'}`} onClick={() => setItemView('list')}>
                  <AiOutlineMenu />
                </Button>
                <Button className={`!text-[#000] !rounded-full !w-[30px] !h-[30px] !min-w-[30px] ${itemView === 'grid' && 'active'}`}  onClick={() => setItemView('grid')}>
                  <IoGrid />
                </Button>

                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                  There are 27 products
                </span>
              </div>
              <div className="sort flex items-center gap-3">
                <h3 className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                  Sort By:
                </h3>
                <div className="z-50 !pr-3">
                  <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    className="!bg-white !text-[rgba(0,0,0,0.7)] !text-[12px] "
                  >
                    None
                  </Button>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "left top"
                              : "left bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                            >
                              <MenuItem onClick={handleClose}>Sales, Highest to Lowest</MenuItem>
                              <MenuItem onClick={handleClose}>
                                Relevance
                              </MenuItem>
                              <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                              <MenuItem onClick={handleClose}>Name, Z to A</MenuItem>
                              <MenuItem onClick={handleClose}>Price, Low to High</MenuItem>
                              <MenuItem onClick={handleClose}>Price, High to Low</MenuItem>
                              
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </div>
            </div>
               {itemView === 'grid' ? (
              <div className="grid grid-cols-4 md:grid-cols-4 gap-3">
                <ProductItem
                  img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
                  brandName="Soylent Green"
                  productName="Men cotton casual full sleeve T-shirt"
                  oldPrice="$90.00"
                  newPrice="$86.00"
                />
                <ProductItem
                  img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
                  brandName="Soylent Green"
                  productName="Men cotton casual full sleeve T-shirt"
                  oldPrice="$90.00"
                  newPrice="$86.00"
                />
                <ProductItem
                  img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
                  brandName="Soylent Green"
                  productName="Men cotton casual full sleeve T-shirt"
                  oldPrice="$90.00"
                  newPrice="$86.00"
                />
                <ProductItem
                  img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
                  brandName="Soylent Green"
                  productName="Men cotton casual full sleeve T-shirt"
                  oldPrice="$90.00"
                  newPrice="$86.00"
                />
                <ProductItem
                  img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
                  brandName="Soylent Green"
                  productName="Men cotton casual full sleeve T-shirt"
                  oldPrice="$90.00"
                  newPrice="$86.00"
                />
                <ProductItem
                  img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
                  brandName="Soylent Green"
                  productName="Men cotton casual full sleeve T-shirt"
                  oldPrice="$90.00"
                  newPrice="$86.00"
                />
                <ProductItem
                  img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
                  brandName="Soylent Green"
                  productName="Men cotton casual full sleeve T-shirt"
                  oldPrice="$90.00"
                  newPrice="$86.00"
                />
                <ProductItem
                  img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-home_default/mug-today-is-a-good-day.jpg"
                  brandName="Soylent Green"
                  productName="Men cotton casual full sleeve T-shirt"
                  oldPrice="$90.00"
                  newPrice="$86.00"
                />
              </div>
            ) : (
              <div className="flex flex-col">
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
              </div>
            )}              
          </div>
        </div>
        <div className="pages flex items-center justify-center mt-9 mb-2">
        <Pagination count={10} size="small" />
      </div>
      </div>
      
    </section>
  );
};

export default ProductListing;
