import { cart } from "../../constants/url";
import api from "../../services/api";

const getCartServices = async () => {
    const response = await api.get(cart.getCart);
    console.log(response.data);
    return response.data;

};
const addCartServices = async (data:any) => {
    const response = await api.post(cart.addToCart,data);
    console.log(response.data);
    return response.data;
};

// const getAllCartServices = async () => {
//     const response = await api.get(cart.getAllCarts);
//     console.log(response.data);
//     return response.data;
// };
const updateCartServices = async (data:any) => {
    const response = await api.put(cart.updateCart,data);
    console.log(response.data);
    return response.data;
};
const deleteCartServices = async (data:any) => {
    const response = await api.delete(cart.removeFromCart,data);
    console.log(response.data);
    return response.data;
};

const cartServices = {
    getCartServices,
    addCartServices,
    // getAllCartServices,
    updateCartServices,
    deleteCartServices
};

export default cartServices;