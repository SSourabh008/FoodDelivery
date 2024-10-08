import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import { connectDb } from "./config/db.js";
import "dotenv/config"
 const app=express();

 app.use(cors());
//  app.use(json());
//  app.use(bodyParser())
app.use(express.json());

//importing the routes
import foodRoute from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cartRoute from "./routes/cartRoutes.js";
const port=5000
app.use("/api/food",foodRoute);
app.use("/images",express.static("upload"))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRoute);
app.get("/",(req,res)=>{
    res.send("Api working")
})
 connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`App is running at http://localhost:${port}`);
     })
 })
 //mongodb+srv://sourabh:sourabh#1234@cluster0.bdabp3i.mongodb.net/?