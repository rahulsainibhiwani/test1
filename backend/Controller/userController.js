import User from "../Model/User.js";
import bcrypt from 'bcrypt'

const createUser=async(req,res)=>{
   const {name,mobile,email,password}=req.body;
   let salt=await bcrypt.genSalt(10);
   let hash=await bcrypt.hash(password,salt)
    try {
        let result=await User.create({
            name,
            mobile,
            email,
            password:hash
        })
        res.status(201).send({status:"Created",result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getUsers=async(req,res)=>{
    try {
        let result=await User.find();
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getUser=async(req,res)=>{
    try {
        let result=await User.findById(req.params.id);
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}


export {createUser,getUser,getUsers}