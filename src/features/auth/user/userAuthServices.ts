import { auth } from "../../../constants/url";
import api from "../../../services/api";
import type { formData } from "./userAuthTypes";

export const loginUserServices = async (data: formData) => {
  const response = await api.post(auth.login, data);
  console.log(response.data);
  return response.data;
};
export const getUserServices = async () => {
  const response = await api.post(auth.getUser);
  console.log(response.data);
  return response.data;
};
export const logoutUserServices = async () => {
  const response = await api.post(auth.logout);
  console.log(response.data);
  return response.data;
};

export const registerUserServices = async (data: formData) => {
  const response = await api.post(auth.register, data);
  console.log(response.data);
  return response.data;
};
