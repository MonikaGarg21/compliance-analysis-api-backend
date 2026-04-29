import express from "express";
import { createProduct } from "../controllers/product.controller.js";
import { upload } from "../middlewares/multer.js";
import protect, { isUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create",protect,isUser,upload.single("images"),createProduct);

export default router;