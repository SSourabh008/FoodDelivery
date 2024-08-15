import userModel from "../models/userModel.js";

//add to cart

const addToCart=async(req,res)=>{
    try {
        const userData=await userModel.findOne({_id:req.body.userId});
        const cartData=await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId]=1;
        }else{
            cartData[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        return res.json({success:true,message:"Added to Cart Succesfully"});    
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"Error"})
    }
}

//remove from cart
const removeFromCart=async(req,res)=>{
    try {
        const userData=await userModel.findOne({_id:req.body.userId});
        const cartData=await userData.cartData;
        if(!cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"removed from cart"});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"not removed"});
    }
}

//fetch from user
const fetchUserCartData=async(req,res)=>{
    try {
        const userData=await userModel.findOne({_id:req.body.userId});
        const cartData=await userData.cartData;
        return res.json({success:true,cartData})
    } catch (error) {
        console.log(error)
        return res.json({success:false,message:"not got the list"})
    }
}

export {addToCart,removeFromCart,fetchUserCartData};