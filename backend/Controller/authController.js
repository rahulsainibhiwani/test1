import User from "../Model/User.js";
import bcrypt from 'bcrypt'

const verify=async(req,res)=>{
    const {email,password}=req.body;
    try {
        let result=await User.findOne({email})
        if(!result){
            res.status(200).send({message:"User Not Found",path:"mismatch"})
        }else{
            let compare=await bcrypt.compare(password,result.password)
            if(!compare){
                res.status(200).send({message:"Invalid Password",path:"mismatch"})
            }else{
                res.status(200).send({status:5911,message:"Login Success",result,path:"match"})
            }
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export default verify;