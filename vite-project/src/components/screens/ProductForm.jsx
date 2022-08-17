import React,{useState,useEffect} from 'react'
import {Form,Col,Row,Button} from 'react-bootstrap'
import { http } from '../../config/axiosConfig';

const ProductForm = () => {
  const [data,setData]=useState();
  const [category,setCategory]=useState();
  const [sCategory,setSCategory]=useState();
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(data,category,sCategory)
    }
    const handleChange=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
      http('/category').then((res)=>setCategory(res.data.result)).catch((er)=>console.log("CATEGORY ERROR=>",er))
    },[])
    useEffect(()=>{
      http('/subCategory').then((res)=>setSCategory(res.data.result)).catch((er)=>console.log("SUBCATEGORY ERROR=>",er))
    })
  return (
    <Form onSubmit={handleSubmit} onChange={handleChange}>
    <Form.Group className="mb-3">
    <Form.Label>Product Name</Form.Label>
    <Form.Control placeholder="Enter Product Name" name='name'/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Category</Form.Label>
    <Form.Select>
      <option >--Select a type--</option>
      {
        category?.map((c)=>(
          <option value={c._id}>{c.category}</option>
        ))
      }
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>SubCategory</Form.Label>
    <Form.Select name='subCategoryFK'>
     {
      sCategory?.map((s)=>(
        s.categoryFK._id===data.category?(<option value={s._id}>{s.subCategory}</option>):("")
      ))
     }
    </Form.Select>
  </Form.Group>
  <Button variant='dark' type='submit' >
    Submit
    </Button>
  </Form>
  )
}

export default ProductForm
