import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";

const Login = () => {
  const {openAlertBox} = useContext(MyContext);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();

  const forgotPassword = () => {
      history('/verify');
      openAlertBox('Success', 'OTP Sent');
  };

  return (
    <section className="section py-10">
      <div className="containe">
        <div className="card shadow-md rounded-md m-auto w-[400px] bg-white py-5 px-10">
          <h3 className="text-center text-[18px]text-black font-semibold">
            Login to your account
          </h3>
          <form className="w-full mt-5">
            <div className="form-group w-full pb-2">
              <TextField
                type="email"
                id="outlined-basic"
                label="Email Id *"
                variant="outlined"
                className="w-full"
                name="email"
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={passwordVisibility === false ? "password" : "text"}
                id="outlined-basic"
                label="Password *"
                variant="outlined"
                className="w-full"
                name="password"
              />
              <Button
                onClick={() => handlePasswordVisibility()}
                className="!absolute right-[10px] top-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                type="submit"
              >
                {passwordVisibility === false ? (
                  <FaRegEye className="w-full text-[20px] opacity-75" />
                ) : (
                  <FaRegEyeSlash className="w-full opacity-75 text-[20px]" />
                )}
              </Button>
            </div>

            <a
              className="link cursor-pointer text-[14px] font-[600] pl-1"
              onClick={forgotPassword}
            >
              Forgot Password?
            </a>
            <div className="flex items-center w-full my-3">
              <Button className="btn-org btn-lg w-full">
                <div>Login</div>
              </Button>
            </div>
            <p className="!text-[rgba(0,0,0,0.6)] text-[14px] font-[500] text-center mb-3">
              Not Registered?{" "}
              <Link
                className="text-[14px] font-[600] text-primary"
                to="/register"
              >
                Sign Up
              </Link>
            </p>

            <p className="text-center text-[rgba(0,0,0,0.6)] font-[500]">
              Or continue with social account
            </p>
            <Button className="flex gap-3 w-full bg-[#f1f1f1] btn-lg !text-black">
              <FcGoogle className="text-[20px]" />
              Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
