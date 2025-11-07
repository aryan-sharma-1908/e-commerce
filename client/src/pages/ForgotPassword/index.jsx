import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
const ForgotPassword = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passwordVisibility2, setPasswordVisibility2] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  const handlePasswordVisibility2 = () => {
    setPasswordVisibility2(!passwordVisibility);
  };

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();

  return (
    <section className="section py-10">
      <div className="containe">
        <div className="card shadow-md rounded-md m-auto w-[400px] bg-white py-5 px-10">
          <h3 className="text-center text-[18px]text-black font-semibold">
            Forgot Password
          </h3>
          <form className="w-full mt-5">
           
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={passwordVisibility === false ? "password" : "text"}
                id="outlined-basic"
                label="New Password"
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
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={passwordVisibility2 === false ? "password" : "text"}
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                className="w-full"
                name="password"
              />
              <Button
                onClick={() => handlePasswordVisibility2()}
                className="!absolute right-[10px] top-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                type="submit"
              >
                {passwordVisibility2 === false ? (
                  <FaRegEye className="w-full text-[20px] opacity-75" />
                ) : (
                  <FaRegEyeSlash className="w-full opacity-75 text-[20px]" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full my-3">
              <Button className="btn-org btn-lg w-full">Change Password</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
