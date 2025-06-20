import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
}

const studentSlice = createSlice ({
  name:'students',
  initialState,
   reducers :{
      addStudents: (state, action) => {
        state.list.push(action.payload);
      },
      deleteStudent:(state, action) => {
        state.list = state.list.filter((student) => student.id !== action.payload)
      }, 
     editStudent:(state, action) => {
      const { id, name, surname, number, address, gender, date } = action.payload;
      const existing = state.list.find(stu => stu.id === id);
      if (existing) {
        existing.name = name;
        existing.surname = surname;
        existing.number = number;
        existing.address = address;
        existing.gender = gender;
        existing.date = date;
      }
    },
   }
})

export const {addStudents, deleteStudent, editStudent} = studentSlice.actions;
export default studentSlice.reducer