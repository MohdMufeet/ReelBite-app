export interface orderData {
  _id?: string;
  orderDate?: string;
  quantity: number;
  price: number;
  address: string;
  phone: string;
  name: string;
  email: string;
  status?: "pending" | "accepted" | "rejected";
  userID?: string;
  foodID: string[]; 
  foodPartnerID: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface orderState {
  reel: orderData | null; 
  loading: boolean;
  error: string | null;
}