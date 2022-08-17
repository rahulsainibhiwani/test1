import axios from "axios";

const http=axios.create({
    baseURL:"http://localhost:7284",
    // headers:{
    //     "Content-Type":"multipart/form-data",
    // }
})
export {http}