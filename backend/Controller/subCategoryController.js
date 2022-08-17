import SubCategory from "../Model/SubCategory.js";

const createSubCategory=async(req,res)=>{
    try {
        let result=await SubCategory.create(req.body);
        res.status(201).send({status:"Created",result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getSubCategories=async(req,res)=>{
    try {
        let total=await SubCategory.find().count();
        let result=await SubCategory.find().populate("categoryFK");
        res.status(200).send({total,result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export {createSubCategory,getSubCategories}