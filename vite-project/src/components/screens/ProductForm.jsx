import React,{useState,useEffect} from 'react'
import {Form,Col,Row,Button} from 'react-bootstrap'
import { http } from '../../config/axiosConfig';
import {useParams} from 'react-router-dom'
import Swal from 'sweetalert2'

const ProductForm = () => {
  const ID=useParams().id;
  const [mode,setMode]=useState("CREATE");
  const [productData,setProductData]=useState();
  const [category,setCategory]=useState();
  const [sCategory,setSCategory]=useState();
  const [sellerData,setSellerData]=useState();
  const [searchSeller,setSearchSeller]=useState("");
    const handleSubmit=(e)=>{
      e.preventDefault();
      let DATA=new FormData(e.target)
     if(mode==="CREATE"){
      http.post('/product',DATA).then((res)=>{
        if(res.status===201){
          Swal.fire({
            position: 'top-bottom',
            icon: 'success',
            title: 'Your Product Data has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }).catch((er)=>{
        Swal.fire(
          `${er}`,
          'Something went wrong!',
          'error'
        )
      })
     }else{
      http.put(`/product/${ID}`,productData).then((res)=>{
        if(res.status===200){
          Swal.fire({
            position: 'top-bottom',
            icon: 'success',
            title: 'Product Data Updated Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }).catch((er)=>{
        Swal.fire({
          position: 'top-bottom',
          icon: 'error',
          title: `${er}`,
          showConfirmButton: false,
          timer: 1500
        })
      })
     }
    }
    const handleChange=(e)=>{
      setProductData({...productData,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
      http('/category').then((res)=>setCategory(res.data.result)).catch((er)=>console.log("CATEGORY ERROR=>",er))
    },[])
    useEffect(()=>{
      http('/subCategory').then((res)=>setSCategory(res.data.result)).catch((er)=>console.log("SUBCATEGORY ERROR=>",er)),
      http('/seller').then((res)=>setSellerData(res.data.result)).catch((er)=>console.log(er.message))
    },[])
    useEffect(()=>{
      http(`/product/${ID}`).then((res)=>{
        setProductData(res.data)
        setMode("UPDATE")
      }).catch((er)=>console.log(er))
    },[])
  return (
    <Form onSubmit={handleSubmit} onChange={handleChange}>
    <Form.Group className="mb-3">
    <Form.Label>Product Name</Form.Label>
    <Form.Control value={productData?.name} placeholder="Enter Product Name" name='name'/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Category</Form.Label>
    <Form.Select  name='category' >
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
        s.categoryFK._id===productData?.category?(<option value={s._id}>{s.subCategory}</option>):("")
      ))
     }
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Price</Form.Label>
    <Form.Control value={productData?.price} placeholder="Enter Price" name='price' type='number'/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Brand</Form.Label>
    <Form.Control value={productData?.brand} placeholder="Enter Brand Name" name='brand' type='string'/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Quantity</Form.Label>
    <Form.Control value={productData?.quantity} placeholder="Enter Total quantity" name='quantity' type='number'/>
  </Form.Group>
  <Row>
    <Col>
    <Form.Label>Search Seller here</Form.Label>
      <Form.Control placeholder='Search Seller Name.....' type='text'  onChange={(e)=>setSearchSeller(e.target.value)} />
    </Col>
    <Col>
    <Form.Group className="mb-3">
    <Form.Label>Seller</Form.Label>
    <Form.Select name='sellerFK' >
      {
        sellerData?.filter((s)=>{
          if(searchSeller==""){
            return s;
          }
          else if(s.name.toUpperCase().includes(searchSeller.toUpperCase())){
            return s;
          }
        }).map((c)=>(
            <option value={c._id}>{`NAME=>${c.name} / MOBILE=>${c.mobile}  /  STORE:${c.storeName}`}</option>
          ))
      }
    </Form.Select>
  </Form.Group>
    </Col>
  </Row>
  <Form.Group className='mb-3'>
    <Form.Label>Image</Form.Label>
    <Form.Control
    type='file'
    name='image'
    required

    />
  </Form.Group>
  <Button variant={mode==="UPDATE"?"warning":"success"} type='submit' >
    {mode==="UPDATE"?"Update Data":"Create Data"}
    </Button>
  </Form>
  )
}

export default ProductForm