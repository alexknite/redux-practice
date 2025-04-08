import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTask, fetchTasks } from "../api/endpoints";

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

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
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
      })
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
      });
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
