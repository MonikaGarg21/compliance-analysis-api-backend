import { Auth } from "../models/auth.shcema.js";
import { genToken } from "../../utils/genToken.js";
//creating controller
export const signup = async (req, res, next) => {
  try {
    const { userName, email, password, role } = req.body;
    console.log(req.body);
    //business logic
    if (!userName || !password || !email) {
      return res.status(400).json({
        // 400 status when all things are failed to access.
        message: "All fields are required",
      });
    }

    const isUserExist = await Auth.findOne({ email: email });
    if (isUserExist) {
      return res.status(400).json({
        message: "Email is already exist",
      });
    }
    const user = await Auth.create({
      email,
      userName,
      password,
      role,
    });
    return res.status(201).json({
      message: "Registered successfully",
      data: user._id,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

//  controller for sign in
export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const user = await Auth.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        message: "Email not found",
      });
    }

    // password compare
const isMatch = await user.comparePassword(password);
if(!isMatch){
  return res.status(400).json({
    message: "password is incorrect",
  });
}


//token generation
const token = await genToken(user._id, user.userName);
console.log(token);


return res
.cookie("token", token,{
  httpOnly: true,           // it showes it's working on network
  sameSite: "Strict",         // that same origin is usinng the cookie and is going towards the same origin
  secure: false,
  maxAge: 24*60*60*1000,
})
.status(200)
.json({
  message: "Signin successfully",
  data: user._id,
});

  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};


