import React, { useEffect, useState } from 'react'
import StudentModel from './studentModel'
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent } from './studentSlice'
import { logout } from './authSlice'
import { useNavigate } from 'react-router-dom'

const StudentForm = () => { 
const dispatch = useDispatch()
 const students = useSelector(state => state.students.list);
 const [showModel, setShowModel] = useState(false);
 const [selectedStudent, setSelectedStudent] = useState()
 const navigate = useNavigate();

useEffect(() => {       
  console.log('Students updated:', students);
}, [students]);

const handleLogout = () => { 
  // dispatch(logout());
   navigate('/login')
}

  return (
    <div className='App'> 
      <div>
        <div className='button'>
        <button className='addButton' onClick={() =>{
          setShowModel(true)
          }}>
            Add Data
        </button> 

         <button className='logoutButton' onClick={handleLogout}>
            Logout
        </button>
        </div>

      {showModel &&
        <StudentModel onClose={() => {
          setShowModel(false);  
          setSelectedStudent(null);
        }} 
         selectedStudent={selectedStudent}
       />}    
          <table id='student-data'>
            <thead>
             <tr className='table-header'>
                <th>id</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Date</th>
                <th>Action</th>
             </tr>
            </thead>
            <tbody>
            {students.map((student, index) => (           
              <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>{student.number}</td>
              <td>{student.address}</td>
              <td>{student.gender}</td>
              <td>{student.date}</td>
              <td>
              <button onClick={() =>{ 
                  setSelectedStudent(student)
                  setShowModel(true)
                }}>
                  Edit
              </button>
              <button onClick={() => dispatch(deleteStudent(student.id))}>Delete</button>
              </td>
             </tr>
             ))}

            
            </tbody> 
          </table>
      </div>
    </div>
  )
}

export default StudentForm
