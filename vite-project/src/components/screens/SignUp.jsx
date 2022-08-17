import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import { http } from '../../config/axiosConfig.js'
import swal from 'sweetalert2'

const SignUp = () => {
    const [data,setData]=useState()
    const [res,setRes]=useState();
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();        
        http.post('/user',data).then((res)=>{
            if(res.status===201){
                console.log(res.data),
                swal.fire(
                    'Registration Successfully!',
                    'Signed In!',
                    'success'
                  )
            }
        }).catch((er)=>console.log(er))
    }
  return (
    <Form onChange={handleChange} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Name</Form.Label>
      <Form.Control name="name" type="text" placeholder="Enter your Full Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Mobile</Form.Label>
      <Form.Control name="mobile" type="number" placeholder="Enter mobile number" />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control name='email' type="email" placeholder="Enter email" />
    </Form.Group>

    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name="password" type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default SignUp
