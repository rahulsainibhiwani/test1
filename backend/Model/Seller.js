import mongoose from "mongoose";

const Seller=new mongoose.Schema({
    name:{type:String,maxlength:30,require:true},
    mobile:{type:Number,maxlength:10,require:true},
    address:{type:String,require:true},
    storeName:{type:String},
    storeAddress:{type:String}
})
export default new mongoose.model("seller",Seller);