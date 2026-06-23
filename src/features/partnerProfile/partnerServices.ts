import { partnerProfile } from "../../constants/url";
import api from "../../services/api";

export const visitProfleServices = async (id:string) => {
  try {
    const response = await api.post(partnerProfile.visit,{foodPartnerId:id});
    console.log("response",response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
