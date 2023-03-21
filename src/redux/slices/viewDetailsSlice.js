import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
//Action 
export const fetchUserDetails = createAsyncThunk("fetchUser",async()=>{
    const url = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(url)
    console.log(response,"eeeeeeee")
    return response.json()
})

const viewDetailsSlice = createSlice({
    name:'viewDetails',
    initialState:{
        isLoading:false,
        firstTime:true,
        data:[],
        currentUser:null,
        isError:false
    },
    reducers:{
        setData(state,action){
            state.currentUser = action.payload
            console.log(state.currentUser,action.payload,"pp111")
        },
        addUser(state,action){
            state.firstTime = false
            state.data.push(action.payload)
        },
        deleteUser(state,action){
            state.data = state.data.filter((user)=>{
                if(user.id!==action.payload){
                    return true
                }
                else{
                    return false
                }
            })
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUserDetails.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchUserDetails.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(fetchUserDetails.rejected,(state,action)=>{
            state.isError = true;
            console.log('Error',action.payload)
        })
    }
})
export const {setData,deleteUser,addUser} = viewDetailsSlice.actions
export default viewDetailsSlice.reducer