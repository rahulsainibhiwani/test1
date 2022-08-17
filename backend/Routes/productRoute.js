import express from 'express'
import { createProduct, getProducts } from '../Controller/productController.js';
const productRoute=express.Router();

productRoute.post('/',createProduct)
productRoute.get('/',getProducts);
export default productRoute;