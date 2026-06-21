import type { reel } from "../reels/reelTypes";


export interface savedReels{
    _id: string;
   UserId: string;
   ReelId: reel[];
   createdAt: string;
   updatedAt: string;
}

export interface save{
    saveReels: savedReels[] | null;
    loading: boolean;
    error: string | null;
}
