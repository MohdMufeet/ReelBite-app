import api from "../../services/api";
import { like } from "../../constants/url";

export const likeServices = async (data: any) => {
    const response = await api.post(like.toggleLike,{foodId: data});
    return response.data;
};