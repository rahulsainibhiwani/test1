import mongoose from 'mongoose'

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDb Connected Successfully")
    } catch (error) {
        console.log(error.message)
    }
}
export default connectDB;