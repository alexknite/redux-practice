import axios from "axios";
import { SERVER_URL } from "../constants/constants";

export const fetchTasks = async () => {
  const res = await axios.get(`${SERVER_URL}/tasks/`);
  return res.data;
};
