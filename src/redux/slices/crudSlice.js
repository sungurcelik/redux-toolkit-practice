import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: "asd123",
      title: "Navbar Animasyonu",
      author: "Ahmet",
      assigned_to: "Mehmet",
      end_date: "2024-01-01",
    },
    {
      id: "dsfsdf123",
      title: "Footer Responsive",
      author: "Ali",
      assigned_to: "Ayşe",
      end_date: "2024-02-09",
    },
  ],
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {},
    editTask: (state, action) => {},
    deleteTask: (state, action) => {},
  },
});

// aksiyonları tek tek export et
export const { addTask, editTask, deleteTask } = crudSlice.actions;

export default crudSlice.reducer;
