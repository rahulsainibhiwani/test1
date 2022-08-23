import express from 'express'
import upload from '../config/multerConfig.js';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../Controller/productController.js';
const productRoute=express.Router();

productRoute.post('/',upload.single("image"),createProduct)
productRoute.put('/:id',upload.single("image"),updateProduct)
productRoute.get('/',getProducts);
productRoute.get('/:id',getProduct);
productRoute.delete('/:id',deleteProduct)
export default productRoute;