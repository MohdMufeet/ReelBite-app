import React from "react";
import Footer from "@/components/common/Footer/Footer";
import Sidebar from "@/components/Partner/Sidebar";
import Header from "@/components/Partner/Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function PartnerDashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* SIDEBAR */}
      <Sidebar />
      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* TOP NAVBAR */}
        <Header />

        {/* ACTUAL PAGE CONTENT */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
