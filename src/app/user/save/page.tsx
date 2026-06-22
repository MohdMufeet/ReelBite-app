"use client";

import {useRouter} from 'next/navigation';
import { getSavedReels } from '../../../features/save/saveThunk';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';


const Save = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { saveReels, loading } = useAppSelector((state) => state.save);

  const handleGetReels = () => {
    dispatch(getSavedReels());
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Saved Reels</h1>
          <p className="text-slate-400 text-sm mt-1">View and manage your saved reels</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push('/user')}
            className="cursor-pointer bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium px-5 py-2.5 rounded-full transition-all duration-200 active:scale-95 text-center"
          >
            Home
          </button>

          <button
            onClick={handleGetReels}
            disabled={loading}
            className="cursor-pointer bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-700 active:scale-95 text-white font-medium px-6 py-2.5 rounded-full shadow-lg shadow-cyan-500/20 transition-all duration-200 disabled:opacity-50 text-center"
          >
            {loading ? 'Loading Reels...' : 'Get Reels'}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {saveReels && saveReels.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {saveReels.map((savedItem:any) => {
              const reel = savedItem?.foodID;
              if (!reel) return null;

              return (
                <div 
                  key={savedItem._id} 
                  onClick={() => router.push(`/reel/${reel._id}`)}
                  className="group relative aspect-[9/16] bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 border border-slate-800 cursor-pointer"
                >
                  {reel?.file && (
                    <video 
                      src={reel?.file} 
                      className="w-full h-full object-cover" 
                      muted 
                      loop 
                      playsInline
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-sm font-semibold line-clamp-2 text-white">
                      {reel?.name || "Untitled Reel"}
                    </p>
                    {reel?.foodPartnerID && (
                      <p className="text-xs text-slate-300 mt-1">@{reel?.foodPartnerID}</p>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md p-1.5 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 border-2 border-dashed border-slate-800 rounded-2xl">
            <svg className="w-12 h-12 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <p className="text-slate-400 font-medium">No reels found.</p>
            <p className="text-slate-500 text-sm mt-1">Click the button above to fetch or refresh your saved collection.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Save;