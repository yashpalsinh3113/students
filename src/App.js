import './App.css';
import StudentForm from './features/studentForm';
import Login from './authentication/login';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {

  const isAuthanticate = useSelector(state => state.auth.isAuthantication)

  return (
   <>
   <Router> 
    <Routes>
      <Route path='/'
             element={isAuthanticate ? <Navigate to = '/dashboard'/> : <Navigate to = '/login'/>} />
      <Route path="/login" element={<Login />} />
      <Route path='/dashboard'element={<StudentForm/>} />
      {/* <Route path='/dashboard'
           element={isAuthanticate ? <StudentForm/> : <Navigate to = '/login'/>} /> */}
    </Routes>
   </Router>
     
   </>      
  );
} 

export default App;
