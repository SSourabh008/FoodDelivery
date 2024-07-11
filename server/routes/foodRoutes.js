import { addFood } from "../controllers/foodController.js";
import { Router } from "express";
import multer from "multer";
const foodRoute=Router();
const storage=multer.diskStorage({
    destination:"upload",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})
const upload=multer({storage:storage});
foodRoute.post("/add",upload.single("image"),addFood);



export default foodRoute;
