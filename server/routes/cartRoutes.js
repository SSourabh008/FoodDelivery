import express from "express";
import { addToCart,removeFromCart,fetchUserCartData } from "../controllers/carController.js";
import authMiddleware from "../middleware/auth.js";
const cartRoute=express.Router();
cartRoute.get("/get",authMiddleware,fetchUserCartData);

cartRoute.post("/add",authMiddleware,addToCart);
cartRoute.post("/remove",authMiddleware,removeFromCart);

export default cartRoute;