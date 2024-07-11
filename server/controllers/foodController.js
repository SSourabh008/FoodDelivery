import { foodModel } from "../models/foodmodel.js";
import fs from 'fs';


//add food
const addFood=async(req,res)=>{
    const image_file=`${req.file.filename}`;
    console.log("In the add api")
    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:image_file,
        category:req.body.category
    });

    try {
        await food.save();
        res.json({success:true,message:"Food Added"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Food not added"})
    }
}

export {addFood};