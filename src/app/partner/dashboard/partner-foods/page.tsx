"use client"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { deleteReelByPartner, getReelByPartner } from "../../../../features/reels/reelThunk";
import { useRouter } from "next/navigation";
import { Heart, MessageCircle, Disc, Play, Clapperboard, Eye, Trash2, BarChart2, ArrowLeft } from "lucide-react";

const Reels = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { reel:reels, loading, error } = useAppSelector((state) => state.reel);
  
  const [activeReel, setActiveReel] = useState<any>(null);

  useEffect(() => {
    dispatch(getReelByPartner());
  }, [dispatch]);

  useEffect(() => {
    if (reels && reels?.length > 0) {
      setActiveReel(reels[0]);
    }
  }, [reels]);

  const handleDeleteReel = (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this reel?");
    if (confirmDelete) {
      dispatch(deleteReelByPartner(id));
      console.log("Deleting reel with ID:", id);
    }
  };
    console.log(reels)

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-8 text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-500 mb-4"></div>
        <p className="text-sm font-medium text-slate-400">Loading your kitchen reels...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-8 text-center">
        <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-2xl px-6 py-4 max-w-xs">
          <p className="text-sm font-semibold mb-1">Something went wrong</p>
          <p className="text-xs text-rose-400/80">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/20 flex justify-center items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 shadow-2xl h-[calc(100vh-4rem)] min-h-[600px]">
        
        <div className="lg:col-span-7 flex flex-col h-full border-r border-slate-800/60 pr-0 lg:pr-6 overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800/80 mb-4 gap-3">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => router.replace("/partner/dashboard")}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700/60 text-xs font-bold text-slate-300 transition active:scale-95 cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>Dashboard</span>
              </button>
              
              <div className="h-4 w-[1px] bg-slate-800 hidden sm:block" />
              
              <div className="flex items-center gap-2">
                <Clapperboard className="text-emerald-400" size={18} />
                <h1 className="text-base font-black tracking-tight bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Your Uploaded Reels
                </h1>
              </div>
            </div>
            
            <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded-full border border-slate-700/40 w-fit">
              Total: {reels?.length || 0}
            </span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-slate-800">
            {reels?.length === 0 ? (
              <div className="text-center text-slate-500 py-20 font-medium">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-500 mb-4"></div>
                <p className="text-sm font-medium">No reels uploaded yet</p>
              </div>
            ) : (
              reels?.map((reel) => (
                <div 
                  key={reel._id}
                  onClick={() => setActiveReel(reel)}
                  className={`flex gap-4 p-3 rounded-2xl border transition duration-200 cursor-pointer group relative ${
                    activeReel?._id === reel._id 
                      ? "bg-slate-800/80 border-emerald-500/40 shadow-md" 
                      : "bg-slate-950/40 border-slate-800/60 hover:bg-slate-800/40 hover:border-slate-700"
                  }`}
                >
                  <div className="relative h-24 w-20 rounded-xl overflow-hidden bg-black shrink-0 shadow-inner flex items-center justify-center">
                    <video src={reel.file} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition" muted />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Play size={16} className="text-white fill-white opacity-80" />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between py-1 min-w-0 flex-1">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-extrabold text-sm text-slate-200 truncate group-hover:text-emerald-400 transition-colors">
                          {reel.name || "Kitchen Update"}
                        </h3>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteReel(reel._id);
                          }}
                          className="text-slate-500 hover:text-rose-400 p-1 rounded-lg hover:bg-rose-500/10 transition"
                          title="Delete Reel"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {reel.description || "No description provided."}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4 text-[11px] text-slate-500 font-bold font-mono">
                      <span className="flex items-center gap-1"><Eye size={12} className="text-slate-400"/> {reel.views || 0}</span>
                      <span className="flex items-center gap-1"><Heart size={11} className="text-slate-400"/> {reel.likesCount || 0}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="lg:col-span-5 flex items-center justify-center h-full bg-slate-950/50 rounded-2xl border border-slate-800/40 p-2 lg:p-4">
          {activeReel ? (
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group">
              
              <video 
                key={activeReel._id} 
                src={activeReel.file} 
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                playsInline
                loop
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />

              <div className="absolute right-3 bottom-24 flex flex-col items-center gap-4 z-20">
                <div className="flex flex-col items-center justify-center w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/40">
                  <BarChart2 size={15} className="text-emerald-400" />
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-950/60 backdrop-blur-sm border border-slate-800 text-slate-300">
                    <Heart size={14} className="fill-slate-400 text-slate-400" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 mt-1 font-mono">{activeReel.likesCount || 0}</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-950/60 backdrop-blur-sm border border-slate-800 text-slate-300">
                    <MessageCircle size={14} className="text-slate-400" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 mt-1 font-mono">{activeReel.commentsCount || 0}</span>
                </div>
              </div>

              <div className="absolute left-3 right-14 bottom-4 z-20 text-[11px] text-slate-200 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] uppercase font-black tracking-wider text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    Your Video
                  </span>
                  <p className="font-bold text-xs truncate drop-shadow-sm">
                    {activeReel.name || "Kitchen Live"}
                  </p>
                </div>

                {activeReel.description && (
                  <p className="text-slate-300 font-medium leading-tight line-clamp-2 pl-1 drop-shadow-sm">
                    {activeReel.description}
                  </p>
                )}

                <div className="flex items-center gap-1 pt-0.5 text-[10px] text-slate-400 font-medium">
                  <Disc size={10} className="animate-spin text-slate-500" />
                  <span className="truncate">Audio Track Attached</span>
                </div>
              </div>

            </div>
          ) : (
            <div className="text-slate-600 text-xs font-semibold text-center uppercase tracking-wider">
              Select a video to preview insights
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Reels;