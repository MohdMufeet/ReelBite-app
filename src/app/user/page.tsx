"use client"

import {  useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
// import { getUser } from "../../features/auth/user/userAuthThunck";
import ReelCard from "../../components/userFeed/ReelCard";
import { getReels } from "../../features/reels/reelThunk";
import { useEffect } from "react";
// import { getPartner } from "../../features/auth/partner/partnerAuthThunk";

// Dummy Reels Data matching your interface
// const dummyReels = [
//   {
//     "_id": "reel_001",
//     "name": "Cheese Burst Pizza Pull 🍕",
//     "description": "Extra cheese, extra happiness! Tag a pizza lover who can eat this whole thing alone. #foodie #pizzalover #cheesy",
//     "price": 299,
//     "file": "https://lorem.video/cat_480p_h264_30fps_15s_26crf_aac_96kbps.mp4",
//     "foodPartnerId": "partner_dominos_01",
//     "likes": 1245
//   },
//   {
//     "_id": "reel_002",
//     "name": "Sizzling Brownie with Ice Cream 🍨",
//     "description": "Satisfying your late-night sweet tooth craving. Warning: High temptation ahead! 🤤 #dessert #chocolate #brownie",
//     "price": 150,
//     "file": "https://lorem.video/cat_480p_h264_30fps_15s_26crf_aac_96kbps.mp4",
//     "foodPartnerId": "partner_baskin_02",
//     "likes": 3420
//   },
//   {
//     "_id": "reel_003",
//     "name": "The Ultimate Street Style Burger 🍔",
//     "description": "Crunchy aloo tikki, secret sauce, and soft buns. Sabse sasta, sabse best! #streetfood #burger #foodvlog",
//     "price": 80,
//     "file": "https://lorem.video/cat_480p_h264_30fps_15s_26crf_aac_96kbps.mp4",
//     "foodPartnerId": "partner_local_bites",
//     "likes": 890
//   },
//   {
//     "_id": "reel_004",
//     "name": "Refreshing Mint Mojito 🍹",
//     "description": "Beat the summer heat with this super refreshing mint and lime booster. #mocktails #summerdrinks #refreshing",
//     "price": 120,
//     "file": "https://lorem.video/cat_480p_h264_30fps_15s_26crf_aac_96kbps.mp4",
//     "foodPartnerId": "partner_cafe_cool",
//     "likes": 2150
//   }
// ];

const Home = () => {
  const dispatch = useAppDispatch();
  const { reels,loading } = useAppSelector((state) => state.reel);
  useEffect(() => {
    dispatch(getReels());
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-8 text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-500 mb-4"></div>
        <p className="text-sm font-medium text-slate-400">
          Loading application...
        </p>
      </div>
    );
  }
  return (
    <div className="flex justify-center bg-slate-950 w-full min-h-screen">
      <div className="w-full max-w-[450px] h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-none space-y-4">
        {reels?.map((singleReel) => (
          <div 
            key={singleReel._id} 
            className="w-full h-screen snap-start snap-always flex items-center justify-center bg-black"
          >
            <ReelCard reel={singleReel} />
          </div>
        ))}

        {reels?.length === 0 || !reels && (
          <div className="flex items-center justify-center h-full text-slate-500">
            No reels found at the moment.
          </div>
        )}
        {/* <div className="flex items-center justify-center h-full text-slate-500">
            No reels found at the moment.
          </div> */}
      </div>
    </div>
  );
};

export default Home;
