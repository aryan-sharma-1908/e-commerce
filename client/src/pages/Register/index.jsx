import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const handlePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    }

  return (
    <section className="section py-10">
      <div className="containe">
        <div className="card shadow-md rounded-md m-auto w-[400px] bg-white py-5 px-10">
          <h3 className="text-center text-[18px]text-black font-semibold">
            Register with a new account
          </h3>
          <form className="w-full mt-5">
            <div className="form-group w-full pb-2">
              <TextField
                type="name"
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="form-group w-full pb-2">
              <TextField
                type="email"
                id="outlined-basic"
                label="Email Id"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={passwordVisibility === false ? 'password' : 'text'}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className="w-full"
              />
              <Button onClick={() => handlePasswordVisibility()} className="!absolute right-[10px] top-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black">
                {passwordVisibility === false ? <FaRegEye className="w-full text-[20px] opacity-75"/> : <FaRegEyeSlash className="w-full opacity-75 text-[20px]"/>}
              </Button>
            </div>

            <div className="flex items-center w-full my-3">
                <Button className="btn-org btn-lg w-full">
                    <div>Register</div>
                </Button>
            </div>
            <p className="!text-[rgba(0,0,0,0.6)] text-[14px] font-[500] text-center mb-3">Already have an account? <Link className='text-[14px] font-[600] text-primary' to='/login'>Login</Link></p>

            <p className='text-center text-[rgba(0,0,0,0.6)] font-[500]'>Or continue with social account</p>
            <Button className="flex gap-3 w-full bg-[#f1f1f1] btn-lg !text-black"><FcGoogle className="text-[20px]"/>Login with Google</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
