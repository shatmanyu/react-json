import {configureStore} from "@reduxjs/toolkit"
import viewDetailsReducer from './slices/viewDetailsSlice'
const store = configureStore({
    reducer: {
        viewDetails:viewDetailsReducer
    }
})
export default store