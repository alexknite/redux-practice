import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTask, deleteTask, fetchTasks } from "../api/endpoints";

export const fetchTasksAsync = createAsyncThunk(
  "tasks/fetchTasks",
  async () => {
    const res = await fetchTasks();
    return res;
  },
);

export const createTaskAsync = createAsyncThunk(
  "tasks/createTask",
  async (description) => {
    const res = await createTask(description);
    return res;
  },
);

export const deleteTaskAsync = createAsyncThunk(
  "tasks/deleteTask",
  async (id) => {
    await deleteTask(id);
    return id;
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
  extraReducers: (builder) => {
    builder
      // Handle fetching tasks
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
      })

      // Handle creating tasks
      .addCase(createTaskAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTaskAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(createTaskAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Handle deleting tasks
      .addCase(deleteTaskAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })
      .addCase(deleteTaskAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
