import express from 'express'
import { createCategory, getCategory } from '../Controller/categoryController.js';
const CategoryRoute=express.Router();
CategoryRoute.post("/",createCategory)
CategoryRoute.get("/",getCategory)
export default CategoryRoute;