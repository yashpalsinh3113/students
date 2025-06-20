import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({email:'', password:''})
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
   dispatch(login(form));
   navigate('/')  
  }
  

  return (
      <div>      
        <div className='login-model'>
          <div className='login-heading'>Login</div>
          <form onSubmit={handleLogin}>
          <div className='form-group'>
            <label htmlFor='name'>Email</label>
            <input value={form.email} name='name' type='text' 
                   onChange={e => setForm({...form , email:e.target.value})}>   
            </input>
          </div>

           <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input value={form.password}  name='password' type='text'
                   onChange={e => setForm({...form , password:e.target.value})}>   
              </input>
          </div>

          <div>
            <button className='login-button'>Login</button>
          </div>
          </form>
        </div>
       </div>
  )
}

export default Login
  