import axios from "axios";
import { SERVER_URL } from "../constants/constants";

export const fetchTasks = async () => {
  const res = await axios.get(`${SERVER_URL}/tasks/`);
  return res.data;
};

export const createTask = async (description) => {
  const res = await axios.post(`${SERVER_URL}/tasks/`, {
    description: description,
  });
  return res.data;
};

export const deleteTask = async (id) => {
  const res = await axios.delete(`${SERVER_URL}/tasks/${id}/`);
  return res.data;
};

export const updateTask = async (id, values) => {
  const res = await axios.patch(`${SERVER_URL}/tasks/${id}/`, values);
  return res.data;
};
