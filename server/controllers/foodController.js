import { foodModel } from "../models/foodmodel.js";
import fs, { stat } from 'fs';


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


const listFood=async(req,res)=>{
    try {
        const foodList=await foodModel.find({});
        res.json({
            status:200,
            success:true,
            data:foodList
        })
    } catch (error) {
        console.log(error);
        res.json({
            status:500,
            success:false,
            message:"Failed to fetch"
        })
    }

}
const removeFood=async(req,res)=>{
    try {
        const food=await foodModel.findById(req.body.id);
        fs.unlink(`upload/${food.image}`,()=>{});
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({
            success:true,
            status:200,
            message:"Food Removed"
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            status:500,
            message:"Food not Removed"
        })
    }
}

export {addFood,listFood,removeFood};