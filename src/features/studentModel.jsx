import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addStudents, editStudent } from './studentSlice';

const StudentModel = ({onClose, selectedStudent}) => { 
 const dispatch = useDispatch();
 const [formData, setFormData] = useState({
  name: '', surname:'', number:'',address:'', gender:'',date:''
 })

 useEffect(() => {
  if (selectedStudent) {
    setFormData(selectedStudent); 
  } else {
    setFormData({ name: '', surname: '', number: '', address: '', gender: '', date: '' });
  }
}, [selectedStudent]);


 const handleSubmit = (e) => {
  e.preventDefault();

  if(selectedStudent){    
    dispatch(editStudent({...formData, id:selectedStudent.id}))
    onClose();
  }else{
  dispatch(addStudents({ ...formData, id: Date.now() }))
  onClose();
  }
 }
  
const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData(prev => ({...prev, [name]:value}))
}

  return (
    <div className='model' onClick={onClose}>
      <div className='base-model' onClick={(e)=>e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
        <div className='head'>
        <h2>{selectedStudent ? 'Edit Student' : 'Add Students'}</h2>
        <button className='closeButton' onClick={onClose}>Close</button>
        </div>
        <div className="form-row">
         <div className="form-group">
          <label htmlFor='Name'>Name: </label>
          <input name='name' value={formData.name} type='text' onChange={handleChange} required></input>
         </div>   

        <div className="form-group">
          <label htmlFor='Surname'>Surname: </label>
          <input name='surname' value={formData.surname}  type='text'  onChange={handleChange} required></input>
         </div>
        </div>

        <div className='form-row'>
         <div className="form-group">
           <label htmlFor='Number'>Phone Number: </label>
          <input name='number' value={formData.number}  type='tel'  onChange={handleChange} required></input>
        
         </div>

         <div className="form-group">
          <label htmlFor='Address'>Address: </label>
          <input name='address' value={formData.address}  type='text'  onChange={handleChange} required></input>
         </div>
        </div>

          <div className='form-row'>
           <div className="form-group">    
             <label htmlFor='Gender'>Gender: </label>
       
            <select name='gender' value={formData.gender} onChange={handleChange} required>
              <option value=''>Select Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </div>

        <div className="form-group">   
           <label htmlFor='Date'>Date: </label>
          <input name='date' type='date' value={formData.date} onChange={handleChange} required></input>
         </div>
         </div>

         <div>
          <button className='closeButton'>{selectedStudent ? 'Update' : 'Create'}</button>
         </div>
         </form>
      </div>
    </div>
  )
}

export default StudentModel
