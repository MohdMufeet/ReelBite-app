"use client";

import React, { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  CheckCircle2,
  Navigation,
  ShoppingBag,
  Clock,
  ArrowRight,
  Check,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { getAllOrders } from "../../../../features/order/orderThunk";
import { getPartner } from "../../../../features/auth/partner/partnerAuthThunk";

export default function PartnerOrdersUI() {
  const dispatch = useAppDispatch();
  const [orders, setOrders] = useState<any[]>([]);

  const { reel, loading, error } = useAppSelector((state) => state.order);
  const { partner } = useAppSelector((state) => state.partner);
  // console.log("partner", partner);

  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(getPartner());
  }, [dispatch]);

  useEffect(() => {
    if (reel) {
      setOrders(reel);
    }
  }, [reel]);

  const partnerStats = {
    name: partner?.name,
    todayEarnings: "1,240",
    tripsCompleted: 8,
    rating: "4.8 ★",
  };

  const updateOrderStatus = (orderId: string, currentStatus: string) => {
    let nextStatus = currentStatus;
    if (currentStatus === "pending") nextStatus = "accepted";
    else if (currentStatus === "accepted") nextStatus = "delivered";

    setOrders((prev) =>
      prev.map((order) =>
        order._id === orderId ? { ...order, status: nextStatus } : order,
      ),
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "bg-blue-50 text-blue-600 border-blue-200 animate-pulse";
      case "accepted":
        return "bg-purple-50 text-purple-600 border-purple-200";
      case "delivered":
        return "bg-emerald-50 text-emerald-600 border-emerald-200";
      case "rejected":
        return "bg-rose-50 text-rose-600 border-rose-200";
      default:
        return "bg-slate-50 text-slate-600";
    }
  };

  const formatTime = (dateStr: string) => {
    if (!dateStr) return "--:--";
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  if (loading && orders.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500 font-bold">
        Orders load ho rahe hain...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-rose-500 font-bold">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500/20">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white border border-slate-200/80 rounded-3xl shadow-sm p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
              Delivery Partner Duty
            </span>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">
              Welcome back, {partner?.name || partnerStats.name}! 👋
            </h1>
            <div className="flex items-center gap-3 mt-1 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                ● Online
              </span>
              <span>Rating: {partnerStats.rating}</span>
            </div>
          </div>

          <div className="flex gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0 border-slate-100">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 text-center flex-1 sm:flex-none">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">
                Today's Pay
              </span>
              <span className="text-lg font-black text-emerald-600">
                ₹{partnerStats.todayEarnings}
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 text-center flex-1 sm:flex-none">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">
                Trips Done
              </span>
              <span className="text-lg font-black text-slate-900">
                {partnerStats.tripsCompleted}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm uppercase font-extrabold tracking-wider text-slate-400 px-1">
            Your Orders Log
          </h2>

          {orders.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center text-slate-400 font-medium">
              Koi active orders nahi hain.
            </div>
          ) : (
            orders.map((order) => (
              <div
                key={order._id}
                className="bg-white border border-slate-200/80 rounded-3xl shadow-xl overflow-hidden flex flex-col justify-between p-5 relative group"
              >
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <div className="space-y-0.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg">
                        ID: {order._id?.substring(0, 10)}...
                      </span>
                      <span className="text-xs text-emerald-600 font-extrabold bg-emerald-50 px-2 py-0.5 rounded-lg">
                        Payout: ₹{order.payout}
                      </span>
                      <span className="text-xs text-slate-600 font-bold bg-slate-100 px-2 py-0.5 rounded-lg">
                        Value: ₹{order.price}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1 pt-1">
                      <Clock size={12} /> Placed at{" "}
                      {formatTime(order.orderDate)}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-wider border ${getStatusBadge(order.status)}`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="py-5 space-y-5 relative">
                  <div className="absolute left-[11px] top-8 bottom-8 border-l-2 border-dashed border-slate-200"></div>

                  <div className="flex gap-3 items-start relative z-10">
                    <div className="h-6 w-6 rounded-full bg-orange-100 border-2 border-white shadow-sm flex items-center justify-center text-[10px] text-orange-600 font-black shrink-0">
                      R
                    </div>
                    <div className="min-w-0 text-xs">
                      <p className="font-bold uppercase tracking-wide text-[10px] text-orange-600">
                        Restaurant Pickup
                      </p>
                      <p className="font-extrabold text-slate-800 text-sm mt-0.5">
                        {order.restaurantName}
                      </p>
                      <p className="text-slate-400 mt-0.5 truncate">
                        {order.restaurantAddress}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start relative z-10">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 border-2 border-white shadow-sm flex items-center justify-center text-[10px] text-emerald-600 font-black shrink-0">
                      C
                    </div>
                    <div className="min-w-0 text-xs flex-1">
                      <p className="font-bold uppercase tracking-wide text-[10px] text-emerald-600">
                        Customer Delivery
                      </p>
                      <p className="font-extrabold text-slate-800 text-sm mt-0.5">
                        {order.name}
                      </p>
                      <p className="text-slate-500 mt-0.5 leading-relaxed font-medium">
                        {order.address}
                      </p>

                      <div className="mt-3 p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-600 font-medium flex items-center gap-1.5 text-[11px]">
                        <ShoppingBag size={12} className="text-slate-400" />
                        <span>
                          Items Summary:{" "}
                          <b className="text-slate-800">
                            {order.itemsDescription} ({order.quantity} box)
                          </b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {order.status !== "delivered" &&
                  order.status !== "rejected" && (
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
                      <a
                        href={`tel:${order.phone}`}
                        className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <Phone size={14} />
                        <span>Call {order.name?.split(" ")[0]}</span>
                      </a>

                      <button
                        onClick={() =>
                          updateOrderStatus(order._id, order.status)
                        }
                        className="w-full sm:w-auto flex-1 transform rounded-xl bg-slate-900 hover:bg-slate-800 py-3 px-5 text-center text-xs font-black tracking-widest text-white transition-all active:scale-[0.98] uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        {order.status === "pending" && (
                          <>
                            <span>Accept & Order Lock</span>
                            <ArrowRight size={14} strokeWidth={2.5} />
                          </>
                        )}
                        {order.status === "accepted" && (
                          <>
                            <Navigation size={14} className="animate-bounce" />
                            <span>Confirm Order Delivered</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}

                {order.status === "delivered" && (
                  <div className="absolute right-5 bottom-5 hidden sm:flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100 shadow-sm">
                    <CheckCircle2 size={14} />
                    <span>Payment Settled</span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
