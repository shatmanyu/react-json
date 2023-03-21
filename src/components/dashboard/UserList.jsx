import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setData,fetchUserDetails,deleteUser } from '../../redux/slices/viewDetailsSlice'
import {useNavigate} from 'react-router-dom'
import './user.css'
const UserList = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const userList = useSelector((state)=>state.viewDetails)
const [toggle,setToggle] = useState(false)
const [currentUser,setCurrentUser] = useState(0)

useEffect(()=>{
    console.log('hellopp')
    if(userList.firstTime){
    dispatch(fetchUserDetails())
    }
},[])
const handleClick = (userId)=>{
    setToggle(!toggle)
    setCurrentUser(userId)
}
const dispatchUser = (userData)=>{
    dispatch(setData(userData))
    navigate(`/viewDetails/userId=${userData.id}`)
}
const handleDelete = (userId)=>{
    dispatch(deleteUser(userId))
}
const addUser = ()=>{
    navigate('/createUser')
}
console.log(userList.data,"userlist00000")
  return (
    <>
    
    <div className='list'>
        {userList?.data?.map((user)=>{
            return (
            <div className='list-item' onClick={()=>{handleClick(user.id)}}>
                <div className="pop" style={{display : currentUser === user.id && toggle?'':'none'}}>
                    <button className="pop-btn" onClick={()=>{handleDelete(user.id)}}>
                        Delete User
                    </button>
                    <button className="pop-btn" onClick={()=>{dispatchUser(user)}}>
                        View Details
                    </button>
                </div>
                    {user.id}
                    {user.name}
                    {user.phone}
            </div>
        )})}
    </div>
    <button onClick={()=>addUser()}>Add User</button>
    </>
  )
}

export default UserList
