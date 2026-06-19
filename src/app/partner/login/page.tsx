"use client";

import { useForm } from "react-hook-form";
import Input from "../../../components/form/Input";
import Button from "../../../components/common/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { partnerLoginSchema } from "../../../schemas/schema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginPartner } from "../../../features/auth/partner/partnerAuthThunk";
import Wrapper from "../../../components/Wrapper";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

const PartnerLogin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { loading, error, isPartnerAuthenticated } = useAppSelector(
    (state) => state.partner,
  );

  useEffect(() => {
    if (isPartnerAuthenticated) {
      router.replace("/partner/dashboard");
    }
  }, [isPartnerAuthenticated, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(partnerLoginSchema),
  });

  const formSubmit = (data: any) => {
    dispatch(loginPartner(data));
  };

  return (
    <Wrapper>
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 w-full">
        <div className="mb-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 mb-2">
            Partner Portal
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Partner Sign In
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Manage your business and orders
          </p>
        </div>

        {error && (
          <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          <div className="space-y-1">
            <Input
              labelName="Business Email"
              type="email"
              inputName="email"
              placeholder="partner@restaurant.com"
              focusClassName="focus:border-emerald-500 focus:ring-emerald-100"
              error={errors.email?.message}
              {...register("email")}
            />
          </div>

          <div className="space-y-1">
            <Input
              labelName="Password"
              type="password"
              inputName="password"
              placeholder="••••••••"
              focusClassName="focus:border-emerald-500 focus:ring-emerald-100"
              error={errors.password?.message}
              {...register("password")}
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              btnName={loading ? "Loading..." : "Partner Login"}
              disabled={loading}
              className="w-full flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold text-white active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100 bg-emerald-600 hover:bg-emerald-500 focus:ring-emerald-100"
            />
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Want to register your kitchen?{" "}
          <Link
            href="/partner/register"
            className="font-semibold text-emerald-600 hover:text-emerald-500 transition-colors duration-200 underline underline-offset-4"
          >
            Signup as Food Partner
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default PartnerLogin;
