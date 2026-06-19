"use client";

import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { logoutPartner } from "../../../features/auth/partner/partnerAuthThunk";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Dashboard = () => {
const router = useRouter();
  const dispatch = useAppDispatch();
  const { isPartnerAuthenticated,partner } = useAppSelector((state: any) => state.partner);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out of your kitchen?")) {
      dispatch(logoutPartner());
      if(!isPartnerAuthenticated){
        router.replace("/partner/login");
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8 bg-slate-50/60 min-h-screen">
     

      {/* RESTAURANT CORE METRICS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          {
            label: "Active Menu Dishes",
            value: "48",
            change: "12 attached to Reels",
            color: "text-slate-900",
          },
          {
            label: "Today's Orders",
            value: "112",
            change: "+18% from yesterday",
            color: "text-slate-900",
          },
          {
            label: "Bite-to-Order Conv.",
            value: "14.6%",
            change: "High video engagement",
            color: "text-orange-600",
          },
          {
            label: "Kitchen Status",
            value: "Accepting Orders",
            change: "Live on Reelbite",
            color: "text-emerald-600",
            isLive: true,
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <p className="text-xs font-bold text-slate-400 tracking-wide uppercase">
              {stat.label}
            </p>
            <div className="flex items-baseline gap-2 mt-2">
              {stat.isLive && (
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse self-center mr-1" />
              )}
              <span
                className={`text-xl sm:text-2xl font-black tracking-tight ${stat.color}`}
              >
                {stat.value}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* TWO COLUMN RESTAURANT DATA LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Side: Store Details Box */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <h2 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Outlet Registry & Contact
            </h2>
            <span className="text-[11px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
              ID: {partner?._id?.substring(0, 8)}...
            </span>
          </div>

          <div className="p-5 sm:p-6 divide-y divide-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 py-3.5 first:pt-0 gap-1 sm:gap-4">
              <span className="text-xs sm:text-sm font-semibold text-slate-400">
                Restaurant Name
              </span>
              <span className="sm:col-span-2 text-sm font-bold text-slate-800">
                {partner?.name || "N/A"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 py-3.5 gap-1 sm:gap-4">
              <span className="text-xs sm:text-sm font-semibold text-slate-400">
                Merchant Contact
              </span>
              <span className="sm:col-span-2 text-sm font-semibold text-slate-700">
                {partner?.contactName || "N/A"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 py-3.5 gap-1 sm:gap-4">
              <span className="text-xs sm:text-sm font-semibold text-slate-400">
                Business Email
              </span>
              <span className="sm:col-span-2 text-sm font-medium text-slate-700 break-all">
                {partner?.email || "N/A"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 py-3.5 gap-1 sm:gap-4">
              <span className="text-xs sm:text-sm font-semibold text-slate-400">
                Store Hotline
              </span>
              <span className="sm:col-span-2 text-sm font-medium text-slate-700">
                {partner?.phone || "N/A"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 py-3.5 last:pb-0 gap-1 sm:gap-4">
              <span className="text-xs sm:text-sm font-semibold text-slate-400">
                Kitchen Address
              </span>
              <span className="sm:col-span-2 text-sm font-medium text-slate-600 leading-relaxed">
                {partner?.address ||
                  "No official address registered for this outlet."}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Kitchen Smart Card & Tips */}
        <div className="space-y-4 sm:space-y-6">
          {/* ReelBites Special Tip Box */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white p-5 sm:p-6 rounded-2xl shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-orange-400">
                ReelBites Tip
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Restaurant Partners! Upload short{" "}
              <strong>15-second 'Bites' (videos)</strong> of your best-selling
              food items. Menu items with videos can boost your orders by{" "}
              <strong className="text-orange-400">up to 40%</strong>.
            </p>
            <div className="pt-2">
              <Link
                href="/partner/create"
                className="inline-flex items-center text-xs font-bold text-white hover:text-orange-400 transition-colors underline underline-offset-4"
              >
                Upload Food Video Now
                <svg
                  className="w-3.5 h-3.5 ml-1 stroke-[3]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
