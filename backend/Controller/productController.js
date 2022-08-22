import Product from "../Model/Product.js";
import cloudinary from '../config/cloudConfig.js'

const createProduct=async(req,res)=>{
 
  let file =await cloudinary.uploader.upload(req.file.path);
  let fileURL=file.secure_url
  try {
    let result=await Product.create({...req.body,image:fileURL});
        res.status(201).send({status:"Created",result})
  } catch (error) {
    res.status(400).send(error.message)
  }
}
const getProducts=async(req,res)=>{
    try {
        let result=await Product.find().populate("subCategoryFK");
        let total=await Product.find().count();
        res.status(200).send({total,result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const deleteProduct=async(req,res)=>{
  try {
    let result=await Product.findByIdAndDelete(req.params.id);
    res.status(200).send({status:"Deleted Successfully",result})
  } catch (error) {
    res.status(400).send(error.message)
  }
}
const getProduct=async(req,res)=>{
  try {
    let result=await Product.findById(req.params.id).populate("subCategoryFK");
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error)
  }
}
const updateProduct=async(req,res)=>{
  try {
    let result=await Product.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).send({status:"Updated Successfully",result})
  } catch (error) {
    res.status(400).send(error.message)
  }
}
export {createProduct,getProducts,getProduct,deleteProduct,updateProduct};