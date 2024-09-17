import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

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
    addTask: (state, action) => {
      // a) todo'ya id ekle
      action.payload.id = v4();
      // b) veriyi tasklerin arasına ekle
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      // 1. Yöntem filter
      // const filtered = state.tasks.filter((task) => task.id !== action.payload);
      // state.tasks = filtered;
      // 2. Yöntem splice
      // a) silinecek elemanın sırasını bulma
      const i = state.tasks.findIndex((t) => t.id === action.payload);
      // elemanı diziden kaldırma
      state.tasks.splice(i, 1);
    },
    editTask: (state, action) => {
      // güncellenecek elemanın dizideki sırasını bul
      const i = state.tasks.findIndex((t) => t.id === action.payload.id);

      //elemanı güncelle
      state.tasks.splice(i, 1, action.payload);
    },
  },
});

// aksiyonları tek tek export et
export const { addTask, editTask, deleteTask } = crudSlice.actions;

export default crudSlice.reducer;
