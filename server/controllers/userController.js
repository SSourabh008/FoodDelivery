import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//token generation
const createToken=async(id)=>{
    console.log(process.env.JWT_SECRET);
    return jwt.sign({id},process.env.JWT_SECRET);
}


//login user
export const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const exits=await userModel.findOne({email});
        if(!exits){
            return res.json({success:false,message:"email doesnot exits",status:400});
        }
        const isValid=await bcrypt.compare(password,exits.password);
        if(!isValid){
            return res.json({success:false,message:"password is wrong",status:400});
        }
        const token=await createToken(exits._id);
        return res.json({status:200,message:"Login success",success:true,token});
    } catch (error) {
        return res.json({success:false,message:"some error occured",status:400});
    }

}

export const registerUser=async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exixts"});
        }
    
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Not a Vaild Email"});
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const newUser=await userModel({
            name:name,
            email:email,
            password:hashedPassword,
        })
        const user=newUser.save();
        const token=await createToken(user._id);
        console.log(token)
        return res.json({success:true,token});
    } catch (error) {
        console.log(error.message);
        return res.json({success:false,message:"Some error occured"});
    }
}