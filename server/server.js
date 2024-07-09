import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import { connectDb } from "./config/db.js";
 const app=express();

 app.use(cors());
//  app.use(json());
//  app.use(bodyParser())
app.use(express.json());


 connectDb().then(()=>{
    app.listen(4000,()=>{
        console.log("App is running at http://loaclhost:4000");
     })
 })
 //mongodb+srv://sourabh:sourabh#1234@cluster0.bdabp3i.mongodb.net/?