import Seller from '../Model/Seller.js'

const createSeller=async(req,res)=>{
    try {
        let result=await Seller.create(req.body)
        res.status(201).send({status:"created",result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const getSellers=async(req,res)=>{
    try {
        let result=await Seller.find();
        let total=await Seller.find().count();
        res.status(200).send({total,result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export {createSeller,getSellers}