import mongoose from "mongoose";
import bcrypt from "bcrypt";

//creating schema
const authSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

authSchema.pre("save", async function (next) {
    try{
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(this.password, salt);
       this.password = hashedPassword;
       next();                 // working as middleware
    }catch(err){
        console.log(err)
    }
    
})

//compare passwords of real and in database:
authSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
    
};

//creating model
export const Auth = mongoose.model("Auth", authSchema);
