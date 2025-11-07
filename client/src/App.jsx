import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductZoom from "./components/ProductZoom";
import { IoClose } from "react-icons/io5";
import ProductDetailsInfo from "./components/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Drawer from "@mui/material/Drawer";
import CartPanel from "./components/CartPanel";
import CartPage from "./pages/Cart";
import toast, { Toaster } from "react-hot-toast";
import OTPVerification from "./components/OTPVerification";
import ForgotPassword from "./pages/ForgotPassword";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";
import MyList from "./pages/MyList";
import MyOrders from "./pages/MyOrders";

export const MyContext = createContext();

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const App = () => {
  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };

  const openAlertBox = (status,msg) => {
    if(status === 'Success'){
      toast.success(msg);
    } else {
      toast.error('Something went wrong');
    }
    
  };

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const values = {
    setOpenProductDetailsModel,
    toggleCartPanel,
    openAlertBox,
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/help-center" exact={true} element={<Home />}></Route>
            <Route path="/product-listing" element={<ProductListing />}></Route>
            <Route path="/product/:id" element={<ProductDetails />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/verify" element={<OTPVerification />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/forgot-password" element={<ForgotPassword />}></Route>
            <Route path="/my-account" element={<MyAccount />}></Route>
            <Route path="/my-list" element={<MyList />}></Route>
            <Route path="/my-orders" element={<MyOrders />}></Route>
          </Routes>
          <Footer />
        </MyContext.Provider>
        <Toaster />
        <BootstrapDialog
          onClose={handleCloseProductDetailsModel}
          aria-labelledby="customized-dialog-title"
          open={openProductDetailsModel}
          className="productDetailModel"
          fullWidth={fullWidth}
          maxWidth={maxWidth}
        >
          <DialogContent dividers>
            <div className="productDetailModelContainer flex items-center w-full relative px-2">
              <Button
                className="!absolute !right-[0px] !top-[0px] !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black !text-[28px]"
                onClick={handleCloseProductDetailsModel}
              >
                <IoClose />
              </Button>

              <div className="col1 w-[40%]">
                <ProductZoom />
              </div>
              <div className="col2 w-[60%]">
                <ProductDetailsInfo />
              </div>
            </div>
          </DialogContent>
        </BootstrapDialog>
        {/* Cart Panel */}
        <Drawer
          open={openCartPanel}
          onClose={toggleCartPanel(false)}
          anchor="right"
          className="cartPanel"
        >
          <CartPanel toggleCartPanel={toggleCartPanel} />
        </Drawer>
      </BrowserRouter>
    </>
  );
};

export default App;
