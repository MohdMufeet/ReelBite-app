"use client";
import { useAppSelector } from "@/hooks/reduxHooks";
import Image from "next/image";

const Header = () => {
    const { partner } = useAppSelector((state: any) => state.partner);
  
  return (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-800">
        Welcome Back, {partner?.name || "Partner"}!
      </h1>

      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600 font-medium">
          Partner ID:{partner?._id || "12345"}
        </span>

        {/* OPTIMIZED IMAGE TAG */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden border bg-black">
          <Image
            src="/vercel.svg"
            alt="Partner Profile"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
