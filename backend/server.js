import connectDB from "./connectDB.js";
import express from "express";
import dotenv from 'dotenv'
import route from "./Routes/userRoutes.js";
import authRoute from "./Routes/authRoute.js";
import cors from 'cors'
import multer from 'multer'
import CategoryRoute from "./Routes/categoryRoutes.js";
import SubCategoryRoute from "./Routes/subCategoryRoutes.js";
import sellerRoute from "./Routes/sellerRoute.js";
import productRoute from "./Routes/productRoute.js";
// const upload=multer();


dotenv.config();
const app=express();

// app.use(upload.array()); 
app.use(cors())

app.use(express.json())
app.use('/user',route)
app.use('/auth',authRoute)
app.use('/category',CategoryRoute)
app.use('/subCategory',SubCategoryRoute)
app.use('/seller',sellerRoute)
app.use('/product',productRoute)
app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on Port ${process.env.PORT}`)
})
connectDB();