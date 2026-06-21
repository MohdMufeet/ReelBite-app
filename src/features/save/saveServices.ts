import api from "../../services/api";
import { save } from "../../constants/url";

export const getSavedReelsServices = async () => {
    const response = await api.get(save.getSaveReels);
    console.log(response.data);
    return response.data;
};

export const postSavedReelsServices = async (data:any) => {
    const response = await api.post(save.toggleSave,{foodId: data});
    console.log(response.data);
    return response.data;
};