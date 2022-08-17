import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

let password="$2b$10$x4TqFKmYu0dooOZma8Woeun1erxoPTO1cOHONV5jtYHfN4Mbd1KX2"
// // const salt=await bcrypt.genSalt(10);
// // const hash=await bcrypt.hash("saini7284",salt);
// // console.log(hash)
// const compare=await bcrypt.compare("saini7284",password);
// if(compare){
//     console.log("Password matched Successfully")
// }else{
//     console.log("Incorrect Password")
// }
// let data={name:"Rahul Saini",password,email:"rahulsaini7284@gmail.com",mobile:8813963349};
// let secret="saini7284"
// let result=jwt.sign(data,secret);
// console.log(result)
let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFodWwgU2FpbmkiLCJwYXNzd29yZCI6IiQyYiQxMCR4NFRxRkttWXUwZG9vT1ptYThXb2V1bjFlcnhvUFRPMWNPSE9OVjVqdFlIZk40TWJkMUtYMiIsImVtYWlsIjoicmFodWxzYWluaTcyODRAZ21haWwuY29tIiwibW9iaWxlIjo4ODEzOTYzMzQ5LCJpYXQiOjE2NjAxMjg2MjR9.4ATz3ZX2z2KLEe1FLFEjLzDHI1yM0F96D1W8fPhfcqQ"