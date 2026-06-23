// 1. Core Food Partner Profile Interface (Database Model Schema)
export interface IFoodPartner {
  _id: string;
  name: string;
  contactName: string;
  phone: string;
  address: string;
  email: string;
  customer: string[]; // Array of User ObjectIds
  role: "user" | "foodpartner";
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
  __v?: number;
}

// 2. Extended Interface for the API Response (With calculated metrics)
export interface IFoodPartnerProfileDetails extends IFoodPartner {
  totalFoods: number;
  totalLikes: number;
  totalCustomers: number;
}

// 3. Complete API Response Wrapper (If you want to type the exact API wrapper)
export interface IApiResponse<T> {
  code: number;
  success: boolean;
  message: string;
  data: T | null;
}