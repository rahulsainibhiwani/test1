import {createSubCategory,getSubCategories} from '../Controller/subCategoryController.js'
import express from 'express'
const SubCategoryRoute=express.Router();
SubCategoryRoute.post('/',createSubCategory)
SubCategoryRoute.get('/',getSubCategories)
export default SubCategoryRoute;