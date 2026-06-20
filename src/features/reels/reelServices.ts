import { reel } from "../../constants/url";
import api from "../../services/api";
import type { ReelData } from "./reelTypes";

const getReelByIdServices = async (id:string) => {
    const response = await api.post(reel.getReelById,{foodId:id});
    console.log(response.data);
    return response.data;
};
const getReelByPartnerServices = async () => {
    const response = await api.get(reel.getReelByPartner);
    console.log(response.data);
    return response.data;
};
const getReelsServices = async () => {
    const response = await api.get(reel.getReels);
    console.log(response.data);
    return response.data;
};

const postReelsServices = async (data:ReelData) => {
    const response = await api.post(reel.postReel,data);
    console.log(response.data);
    return response.data;
};

const deleteReelByPartnerServices = async (foodId:string) => {
    console.log("haa",`${reel.deleteReelByPartner}${foodId}`);
    const response = await api.delete(`${reel.deleteReelByPartner}/${foodId}`);
    console.log("lkklk",response.data);
    return response.data;
}

const services = {
    getReelsServices,
    postReelsServices,
    getReelByIdServices,
    getReelByPartnerServices,
    deleteReelByPartnerServices
}
export default services