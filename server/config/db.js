import mongoose from "mongoose";

export const connectDb=async()=>{
    try {
        const connection=await mongoose.connect("mongodb+srv://sourabh:sourabh1234@cluster0.ctsnca7.mongodb.net/food-delivey");
        console.log("Database connected successsfully");
        // console.log(connection)
    } catch (error) {
        console.log(error)
    }
}