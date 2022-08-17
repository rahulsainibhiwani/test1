import mongoose from "mongoose";

const SubCategory=new mongoose.Schema({
    categoryFK:{type:mongoose.Schema.Types.ObjectId, ref:"Categories"},
    subCategory:{type:String,maxlength:20}
})
export default new mongoose.model("SubCategory",SubCategory);