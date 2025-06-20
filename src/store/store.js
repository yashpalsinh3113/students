import { configureStore } from "@reduxjs/toolkit";
import studentReducer from '../features/studentSlice'
import authReducer from '../features/authSlice'

export const store = configureStore({
  reducer:{
    students : studentReducer, 
    auth : authReducer, 
  }
})

