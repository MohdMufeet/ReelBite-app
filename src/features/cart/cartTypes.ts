export interface cartItem {
    _id: string;
    foodID: string;
    quantity: number;
    userID: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface initialState{
    cart: cartItem[] | null;
    loading: boolean;
    error: string | null;
  }
  