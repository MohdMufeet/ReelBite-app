import type { reel } from "../reels/reelTypes";
export interface ReelData {
 food:reel | null;
 liked:boolean;   
}
export interface likeState {
    reel:ReelData | null;
    loading:boolean;
    error:string | null;
    
}