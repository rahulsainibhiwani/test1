import Product from "../Model/Product.js";

const createProduct=async(req,res)=>{
    try {
        let result=await Product.create(req.body);
        res.status(201).send({status:"Created",result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const getProducts=async(req,res)=>{
    try {
        let result=await Product.find();
        let total=await Product.find().count();
        res.status(200).send({total,result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export {createProduct,getProducts};