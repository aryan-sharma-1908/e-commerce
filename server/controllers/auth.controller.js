const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      messsage: "Please enter the required fields",
    });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const newUser = new User({
      name,
      email,
      password,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      isAdmin: false
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("error: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to register due to internal error",
    });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please enter the required fields",
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie('token', token, {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === 'development' ? 'lax' : 'none',
        secure: process.env.NODE_ENV === 'development' ? false : true,
        maxAge: 24 * 60 * 60 * 1000
    })

    res.status(200).json({
        success: true,
        message: "Login successful",
    })
  } catch (error) {
    console.error("error: ", error);
    res.status(500).json({
        success: false,
        message: "Failed to login due to internal error"
    })
  }
};
