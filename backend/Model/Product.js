import mongoose from "mongoose";

const Product=new mongoose.Schema({
    name:{type:String,unique:true,require:true},
    subCategoryFK:{type:mongoose.Schema.Types.ObjectId,ref:"SubCategory"},
    sellerFK:{type:mongoose.Schema.Types.ObjectId,ref:"seller"},
    price:{type:Number,require:true},
    brand:{type:String},
    quantity:{type:Number}
})
export default new mongoose.model('Product',Product);