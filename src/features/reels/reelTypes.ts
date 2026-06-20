
export interface ReelState{
    reel:reel | null;
    reels: reel[] | null;
    loading: boolean;
    error: string | null;
}

export interface ReelData{
    name: string;
    description: string;
    file: any;
    price?: number;
}
export interface reel{
    _id: string;
    name: string;
    description: string;
    price: number;
    file: string;
    foodPartnerId: string;
    likes: number;
    liked?: boolean;
}