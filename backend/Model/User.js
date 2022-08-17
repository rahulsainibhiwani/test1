import mongoose from "mongoose";

const User=new mongoose.Schema({
    name:{type:String,require:true},
    mobile:{type:Number,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true}
})
export default new mongoose.model("Users",User)