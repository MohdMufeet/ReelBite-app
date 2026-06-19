"use client";

import Link from "next/link";
import Wrapper from "../components/Wrapper";
import { useEffect } from "react";
import { getUser } from "../features/auth/user/userAuthThunck";
import { getPartner } from "../features/auth/partner/partnerAuthThunk";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useRouter } from "next/navigation";

const RoleSelection = () => {
  const {isAuthenticated}=useAppSelector((state)=>state.auth);
  const {isPartnerAuthenticated}=useAppSelector((state)=>state.partner);
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getPartner());
    

  }, [dispatch]);

  useEffect(() => {
    if(isAuthenticated){
      router.replace("/user");
    }

    if(isPartnerAuthenticated){
      router.replace("/partner/dashboard");
    }

  }, [isAuthenticated,isPartnerAuthenticated]);

  return (
    <Wrapper>
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 w-full max-w-md">
        {/* Heading Section */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Choose Your Role
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Select how you want to continue with us
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="space-y-4">
          {/* User Card */}
          <Link
            href="/user/login"
            className="group block p-5 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/40 transition-all duration-250 text-left shadow-sm hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  Customer / User
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Order food, track delivery, and explore restaurants.
                </p>
              </div>
              {/* Arrow */}
              <span className="text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-transform text-lg font-medium">
                &rarr;
              </span>
            </div>
          </Link>

          {/* Food Partner Card */}
          <Link
            href="/partner/login"
            className="group block p-5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all duration-250 text-left shadow-sm hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                  Food Partner
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Manage your restaurant, dashboard, and receive orders.
                </p>
              </div>
              <span className="text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-transform text-lg font-medium">
                &rarr;
              </span>
            </div>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default RoleSelection;