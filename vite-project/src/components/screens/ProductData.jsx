import React,{useEffect,useState} from 'react'
import {Table} from 'react-bootstrap'
import { http } from '../../config/axiosConfig'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import './productData.css'

const ProductData = () => {
    const [productData,setProductData]=useState();
    const [value,setValue]=useState(1);
    const Navigate=useNavigate();
  let total=1;

  const handleDelete=(id)=>{
    http.delete(`/product/${id}`).then((res)=>{
      setValue(value+1)
      if(res.data.status==="Deleted Successfully"){
        Swal.fire(
          'Deleted Successfully!',
          'Success',
          'success'
        )
      }
    }).catch((er)=>{
      Swal.fire(
        `${er}`,
        'Something went wrong',
        'error'
      )
    })
  }

  const handleUpdate=(id)=>{
    Navigate(`/updateUser/${id}`)
  }

    useEffect(()=>{
        http('product').then((res)=>{
          setProductData(res.data.result)
        }).catch((er)=>console.log(er))
    },[value])
  return (
    <div>
         <Table striped="columns">
      <thead>
        <tr>
          <th>SNo.</th>
          <th>Product</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        
        {
          productData?.map((p)=>(
            <tr>
              <td>{total++}</td>
            <td>{p.name}</td>
            <td>{p.brand}</td>
            <td>{p.price}</td>
            <td style={{display:"flex",justifyContent:"space-evenly"}}>
              <FaEdit className='update' onClick={()=>handleUpdate(p._id)} />
              <MdDelete className='delete' onClick={()=>handleDelete(p._id)} />
            </td>
            </tr>
          ))
        }
       
      </tbody>
    </Table>
    </div>
  )
}

export default ProductData