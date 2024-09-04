import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    filter: 'all',
  },
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    editTask(state, action) {
      const { id, description } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.description = description;
      }
    },
    toggleTask(state, action) {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addTask, editTask, toggleTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
