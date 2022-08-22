import cloudinary from 'cloudinary'
import dot from 'dotenv'
dot.config();
const uploader=cloudinary.v2;

uploader.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API,
    api_secret:process.env.CLOUD_SECRET_KEY
})
export default uploader;