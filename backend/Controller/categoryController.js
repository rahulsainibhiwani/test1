import Category from '../Model/Category.js'

const createCategory=async(req,res)=>{
    try {
        const result=await Category.create(req.body);
        res.status(201).send({status:"Created",result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const getCategory=async(req,res)=>{
    try {
        let total=await Category.find().count();
        let result=await Category.find();
        res.status(200).send({total,result});
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export {createCategory,getCategory}