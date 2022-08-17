import express from "express";
import { getUser,getUsers,createUser } from "../Controller/userController.js";

const route=express.Router();
route.post("/",createUser)
route.get("/",getUsers)
route.get("/:id",getUser)

export default route;