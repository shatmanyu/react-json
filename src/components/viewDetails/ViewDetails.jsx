import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
export default function ViewDetails() {
  const userData = useSelector((state)=>state.viewDetails)
  const navigate = useNavigate()
  return (
    <>
    <button onClick={()=>{navigate('/')}}>Home</button>
    <div>
        {userData?.currentUser?.name}
        {userData?.currentUser?.phone}
    </div>
    </>
  )
}
