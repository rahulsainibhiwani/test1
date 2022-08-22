import mongoose from "mongoose";

const Product=new mongoose.Schema({
    name:{type:String,unique:true,require:true},
    subCategoryFK:{type:mongoose.Schema.Types.ObjectId,ref:"SubCategory"},
    sellerFK:{type:mongoose.Schema.Types.ObjectId,ref:"seller"},
    price:{type:Number,require:true},
    brand:{type:String,require:true},
    quantity:{type:Number,require:true},
    image:{type:String,require:true}
})
export default new mongoose.model('Product',Product);