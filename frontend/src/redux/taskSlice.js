import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "../api/endpoints";

export const fetchTasksAsync = createAsyncThunk(
  "tasks/fetchTasks",
  async () => {
    const res = await fetchTasks();
    return res;
  },
);

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: state.tasks.length ? state.tasks[state.tasks.length - 1].id + 1 : 1,
        name: action.payload,
      };
      state.tasks.push(newTask);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasksAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasksAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
