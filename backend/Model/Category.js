import mongoose from "mongoose";

const Category=new mongoose.Schema({
    category:{type:String,require:true,unique:true,maxLength:20}
},
{timestamps:true}    
)
export default new mongoose.model("Categories",Category);