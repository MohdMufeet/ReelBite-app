import { authPartner } from "../../../constants/url";
import api from "../../../services/api";
import type { partnerFormData } from "./partnerAuthTypes";

export const loginPartnerServices = async (data: partnerFormData) => {
  const response = await api.post(authPartner.login, data);
  console.log(response.data);
  return response.data;
};
export const getPartnerServices = async () => {
  const response = await api.post(authPartner.getUser);
  console.log(response.data);
  return response.data;
};
export const logoutPartnerServices = async () => {
  const response = await api.post(authPartner.logout);
  console.log(response.data);
  return response.data;
};

export const registerPartnerServices = async (data: partnerFormData) => {
  const response = await api.post(authPartner.register, data);
  console.log(response.data);
  return response.data;
};
