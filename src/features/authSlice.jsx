import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   user : null,
   isAuthantication : false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login:(state, action) => {
      const {email, password} = action.payload;

      if ( email === 'admin123@gmail.com' && password === '12345'){
       state.user = {email};
       state.isAuthantication = true;
       alert('Login Successfull')
      }else{
        alert('Invalid Credential')                                 
      }
    },
    logout:(state) => {
      state.user = null;
      state.isAuthantication = false;
      
    }
  }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer