// import {CloudinaryPkg} from "cloudinary"/
import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv"

dotenv.config();

// const {v2:cloudinary} = CloudinaryPkg;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET,
});

export default cloudinary;