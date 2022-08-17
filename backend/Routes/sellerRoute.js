import express from 'express'
import { createSeller, getSellers } from '../Controller/sellerController.js';
const sellerRoute=express.Router();

sellerRoute.post('/',createSeller)
sellerRoute.get('/',getSellers)
export default sellerRoute;