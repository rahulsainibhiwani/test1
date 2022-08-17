import verify from "../Controller/authController.js";
import express from 'express'
const authRoute=express.Router();
authRoute.post('/',verify)
export default authRoute