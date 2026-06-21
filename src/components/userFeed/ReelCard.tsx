"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";
// import type { reel } from "../../features/reels/reelTypes";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { like } from "../../features/like/likeThunk";
import { postSavedReels } from "../../features/save/saveThunk";

type ReelCardProps = {
  reel: {
    _id: string;
    name: string;
    description: string;
    price: number;
    file: string;
    foodPartnerID?: string;
    likes: number;
    liked?: boolean;
    saved?: boolean;
  };
};

const ReelCard = ({ reel }: ReelCardProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isLikedNum, setIsLikedNum] = useState<any>(reel?.likes || 0);
  // const [showFullDesc, setShowFullDesc] = useState(false);
  const dispatch = useAppDispatch();
  console.log("reel", reel);
  // const reelLikeState = useAppSelector((state) => state?.like?.reel);
  // const liked = reelLikeState?.liked || false;

  if (!reel || !reel._id) {
    return (
      <div className="w-full h-full flex items-center justify-center text-slate-500 bg-black">
        Incomplete Reel Data
      </div>
    );
  }

  useEffect(() => {
    if (reel.liked && reel.saved) {
      setIsLiked(reel.liked);
      setIsSaved(reel.saved);
    }
  }, []);

  const handleLike = async (id: string) => {
    try {
      setIsLiked((prev) => !prev);
      // dispatch(postLikedReels(id));
      if (isLiked) {
        setIsLikedNum((prev: any) => (prev -= 1));
      } else {
        setIsLikedNum((prev: any) => (prev += 1));
      }

      dispatch(like(id));
    } catch (error) {
      console.error("Like error:", error);
      setIsLiked((prev) => !prev);
    }
  };
  const handleSave = async (id: string) => {
    try {
      console.log("id", id);
      setIsSaved((prev) => !prev);
      dispatch(postSavedReels(id));
      console.log("id2", id);
    } catch (error) {
      console.error("Save error:", error);
      setIsLiked((prev) => !prev);
    }
  };

  return (
    <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800 snap-start flex items-center justify-center">
      {reel?.file && <VideoPlayer videoUrl={reel.file} isMuted={isMuted} />}

      {/* 1. Top Section (Logo , Profile, Mute Button) */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-col items-end gap-2.5">
        <div className="w-full flex justify-between items-center">
          <span className="text-white font-extrabold text-base tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            ReelBite
          </span>

          <Link
            href="/user/profile"
            className="flex items-center gap-1.5 bg-black/40 hover:bg-black/60 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border border-white/10 active:scale-95 transition-all shadow-sm"
          >
            <span>👤</span> My Profile
          </Link>
        </div>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="flex items-center gap-1 bg-black/40 hover:bg-black/60 text-white px-2.5 py-1 rounded-full text-[11px] font-bold backdrop-blur-md border border-white/10 active:scale-90 transition-all shadow-sm"
        >
          <span>{isMuted ? "🔇 Muted" : "🔊 Sound On"}</span>
        </button>
      </div>

      {/* 2. Right Section (Like, Save, Share) */}
      <div className="absolute right-4 bottom-32 flex flex-col items-center gap-5 z-10">
        {/* Like Button */}
        <button
          onClick={() => handleLike(reel._id)}
          className="flex flex-col items-center group active:scale-90 transition-transform"
        >
          {reel.liked ? (
            <div className="w-11 h-11 rounded-full bg-black/40 flex items-center justify-center backdrop-blur-md border border-white/10 bg-red-500/20 text-red-500 transition-colors shadow-md text-sm">
              ❤️
            </div>
          ) : (
            <div className="w-11 h-11 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-red-500 transition-colors shadow-md text-sm">
              🤍
            </div>
          )}
          <span className="text-white text-[11px] font-semibold mt-1 drop-shadow-md">
            {isLikedNum}
          </span>
        </button>

        {/* Save */}
        <button
          onClick={() => handleSave(reel._id)}
          className="flex flex-col items-center group active:scale-90 transition-transform"
        >
          {isSaved ? (
            <div className="w-11 h-11 rounded-full bg-black/40 text-emerald-400 flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-md text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
          ) : (
            <div className="w-11 h-11 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-emerald-500 transition-colors shadow-md text-sm">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </div>
          )}
          <span className="text-white text-[11px] font-semibold mt-1 drop-shadow-md">
            Save
          </span>
        </button>

        {/* Share */}
        <Link
          href="/user/save"
          className="flex flex-col items-center group active:scale-90 transition-transform"
        >
          <div className="w-11 h-11 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-blue-500 transition-colors shadow-md text-sm">
            <svg
              className="w-5 h-5 transform rotate-45 -translate-x-0.5 translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          <span className="text-white text-[11px] font-semibold mt-1 drop-shadow-md">
            Saved
          </span>
        </Link>
        {/* Share */}
        <button className="flex flex-col items-center group active:scale-90 transition-transform">
          <div className="w-11 h-11 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-blue-500 transition-colors shadow-md text-sm">
            <svg
              className="w-5 h-5 transform rotate-45 -translate-x-0.5 translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          <span className="text-white text-[11px] font-semibold mt-1 drop-shadow-md">
            Share
          </span>
        </button>
      </div>

      {/* Bottom Content Info Section */}
      <div className="absolute bottom-6 left-4 right-4 flex flex-col gap-3 text-white z-10">
        {/* Price Tag */}
        <div className="flex items-center gap-1 text-yellow-400 font-bold text-lg drop-shadow-md">
          <span>✨</span>
          <span>₹{reel?.price || 0}</span>
        </div>

        {/* Name / Title */}
        <h3 className="font-bold text-base sm:text-lg drop-shadow-md">
          {reel?.name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 drop-shadow">
          {reel?.description}
        </p>

        {/* Action Buttons Row */}
        <div className="flex items-center gap-3 mt-2">
          <Link
            href={`/partner/profile/${reel?.foodPartnerID}`}
            className="flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-medium text-sm py-2 px-4 rounded-full shadow-md"
          >
            👨‍🍳 Visit Partner
          </Link>

          <Link
            href={`/food/${reel?._id}`}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-2 px-4 rounded-full shadow-md"
          >
            <span>Buy Food</span>
            <span className="bg-emerald-500 px-1.5 py-0.5 rounded text-xs font-bold">
              ₹{reel?.price || 0}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReelCard;
