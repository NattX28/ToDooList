import axios from "axios";
const apiURL = import.meta.env.VITE_API_URL;

export const getTasks = async () => {
  return await axios.get(apiURL + "/tasks");
};

export const readTask = async (id) => {
  return await axios.get(apiURL + "/task/" + id);
};

export const createTask = async (data) => {
  await axios.post(apiURL + "/tasks", data);
};

export const updateTask = async (id, data) => {
  return await axios.put(apiURL + "/task/" + id, data);
};

export const removeTask = async (id) => {
  await axios.delete(apiURL + "/task/" + id);
};
