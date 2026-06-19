"use client"
import React from 'react'
import Link from 'next/link'
import Button from '../common/Button'
import { logoutPartner } from '@/features/auth/partner/partnerAuthThunk';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
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
     <aside className="w-64 bg-slate-900 text-white flex flex-col justify-between hidden md:flex">
            <div className="p-5">
              <h2 className="text-2xl font-bold tracking-wider text-indigo-400">Partner Panel</h2>
              
              <nav className="mt-8 space-y-2">
                <Link href="/partner/dashboard" className="block px-4 py-2.5 rounded transition bg-slate-800 text-white">
                  Dashboard
                </Link>
                <Link href="/partner/dashboard/orders" className="block px-4 py-2.5 rounded transition text-gray-400 hover:bg-slate-800 hover:text-white">
                  Orders
                </Link>
                <Link href="/partner/dashboard/profile" className="block px-4 py-2.5 rounded transition text-gray-400 hover:bg-slate-800 hover:text-white">
                  Profile
                </Link>
                <Link href="/partner/dashboard/profile" className="block px-4 py-2.5 rounded transition text-gray-400 hover:bg-slate-800 hover:text-white">
                  Your Foods
                </Link>
                <Link href="/partner/dashboard/create" className="block px-4 py-2.5 rounded transition text-gray-400 hover:bg-slate-800 hover:text-white">
                  Create Food
                </Link>
              </nav>
            </div>
            
            <div className="p-5 border-t border-slate-800">
              <Button btnName="Logout" onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition" />
            </div>
          </aside>
    
  )
}

export default Sidebar