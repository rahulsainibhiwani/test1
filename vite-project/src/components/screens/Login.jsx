import React,{useState} from 'react'
import {Button,Form,Alert} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { http } from '../../config/axiosConfig';
import Swal from 'sweetalert2'

const Login = () => {
    const [data,setData]=useState();
    const [msg,setMsg]=useState();
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        http.post('/auth',data).then((res)=>{
          if(res.data.status===5911){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'LogIn Successfully',
              timer: 1500
            })
          }
            setMsg([res.data])
          
        }).catch((er)=>console.log(er.message));
    }
    
  return (
    <Form onChange={handleChange} onSubmit={handleSubmit}>
     {
      msg?.find((m)=>m.path==="mismatch")?.message&&(
        <Alert variant='danger'>
          {msg?.find((m)=>m.path==="mismatch")?.message}
        </Alert>
      )
     }
     {
      msg?.find((m)=>m.path==="match")?.message&&(
        <Alert variant='success'>
          {msg?.find((m)=>m.path==="match")?.message}
        </Alert>
      )
     }
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control name='email' type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name="password" type="password" placeholder="Password" />
    </Form.Group>
    <div style={{display:'flex'}}>
    <Button variant="dark" type="submit">
      LogIn
    </Button>
    <NavLink to={'/signUp'} style={{marginLeft:'2rem'}}>
    <Button variant="dark" type='button'>
      SignUp
    </Button>
    </NavLink>
    </div>
  </Form>
  )
}

export default Login;