import React from 'react'
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';
import { useSelector,useDispatch } from 'react-redux'
import { addUser } from '../../redux/slices/viewDetailsSlice'
import {useNavigate} from 'react-router-dom'
import schema from '../../data/schema';
export default function CreateUser() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (data)=>{
    console.log(data,"submitted")
    dispatch(addUser(data.formData))
    navigate('/')
  }
  return (
    <div>
      <button onClick={()=>{navigate('/')}}>Home</button>
      {/* <div className="btn" style={{display:'flex'}}> */}
      <Form schema={schema} validator={validator} onSubmit={handleSubmit}/>
      {/* </div> */}
      
    </div>
  )
}
