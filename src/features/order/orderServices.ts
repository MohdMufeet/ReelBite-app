import api from "../../services/api";
import { order } from "../../constants/url";

export const orderServices = async (data: any) => {
    const response = await api.post(order.orderCreate, { data });
    return response.data;
};

export const getAllOrdersServices = async () => {
    const response = await api.get(order.getAllOrders);
    console.log(response.data);
    return response.data;
};