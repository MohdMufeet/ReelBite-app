"use client";

import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { getUser, logoutUser } from '../../../features/auth/user/userAuthThunck';
import Link from 'next/link';

const UserProfile = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, loading } = useAppSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);


  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (loading) {
    return (
      <div className="flex h-[60vh] w-full items-center justify-center bg-slate-50/50">
        <div className="text-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-sm font-medium text-slate-500">Loading profile data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 bg-slate-50 min-h-screen">
      
      {/* CASE 1: USER IS AUTHENTICATED */}
      {isAuthenticated && user ? (
        <div className="space-y-8">
          
          {/* PROFILE HERO HEADER */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-slate-200/80 text-center sm:text-left">
            {/* User Avatar with Premium Ring */}
            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[3px] shadow-sm flex-shrink-0">
              <div className="h-full w-full bg-white rounded-full flex items-center justify-center font-black text-2xl sm:text-3xl text-slate-800">
                {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
            </div>

            {/* Identity & Quick Actions */}
            <div className="space-y-3 flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight flex items-center justify-center sm:justify-start gap-2">
                    {user?.name}
                    {/* Active/Verified Tick for Premium Look */}
                    <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-pulse" title="Online" />
                  </h1>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 mt-0.5">
                    @{user?.name?.toLowerCase().replace(/\s+/g, "") || "user"} • Member Account
                  </p>
                </div>

                {/* FAANG-style Pill Buttons */}
                <div className="flex items-center gap-2 justify-center sm:justify-end">
                  <button className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-xs sm:text-sm rounded-xl transition-all duration-150 active:scale-[0.98]">
                    Edit Profile
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-xs sm:text-sm rounded-xl transition-all duration-150 active:scale-[0.98]"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* TWO-COLUMN METRICS AND DETAILS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            
            {/* Left Box: Personal Info  */}
            <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200/70 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Account Details</h2>
              </div>
              
              <div className="p-5 sm:p-6 divide-y divide-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-3 py-3.5 first:pt-0 gap-1 sm:gap-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-400">Full Name</span>
                  <span className="sm:col-span-2 text-sm font-bold text-slate-800">{user?.name || "N/A"}</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 py-3.5 gap-1 sm:gap-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-400">Registered Email</span>
                  <span className="sm:col-span-2 text-sm font-medium text-slate-700 break-all">{user?.email || "N/A"}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 py-3.5 last:pb-0 gap-1 sm:gap-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-400">Security Status</span>
                  <span className="sm:col-span-2 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Active Session
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Box: Quick Menu/Dashboard Navigation */}
            <div className="bg-white rounded-2xl border border-slate-200/70 shadow-sm p-5 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Navigation</h3>
              
              <div className="space-y-2">
                <Link 
                  href="/user" 
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all duration-150 text-sm font-semibold text-slate-700 group"
                >
                  <span>Explore Feed / Home</span>
                  <svg className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>

                <Link  href = "/user/save" className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all duration-150 text-sm font-semibold text-slate-700 group">
                  <span>Your Saved Items</span>
                  <svg className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* CASE 2: USER NOT AUTHENTICATED (Fallback Empty State) */
        <div className="max-w-md mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-xl p-6 sm:p-8 text-center space-y-6 my-12">
          <div className="h-14 w-14 bg-amber-50 border border-amber-100 rounded-2xl flex items-center justify-center mx-auto text-amber-500">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Authentication Required</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Please log in to your account to unlock your personalized content feed and account controls.
            </p>
          </div>
          
          <div className="pt-2">
            <Link 
               href="/user/login" 
              className="inline-flex w-full items-center justify-center py-2.5 px-4 rounded-xl shadow-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] transition-all duration-150 text-sm"
            >
              Sign In to Continue
            </Link>
          </div>
        </div>
      )}

    </div>
  );
};

export default UserProfile;