"use client";

import { useForm } from "react-hook-form";
import Input from "../../../components/form/Input";
import Button from "../../../components/common/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { partnerRegisterSchema } from "../../../schemas/schema";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import Link from "next/link";
import {useRouter} from 'next/navigation';
import { registerPartner } from "../../../features/auth/partner/partnerAuthThunk";
import Wrapper from "../../../components/Wrapper";
import { useEffect } from "react";

const PartnerSignup = () => {
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
    resolver: zodResolver(partnerRegisterSchema),
    defaultValues: {
      name: "",
      username: "",
      contactName: "",
      phone: "",
      address: "",
      email: "",
      password: "",
      description: "",
    }
  });

  const formSubmit = (data: any) => {
    dispatch(registerPartner(data));
  };

  return (
    <Wrapper>
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 w-full max-w-xl mx-auto">
        <div className="mb-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 mb-2">
            Onboarding
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Partner Registration
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Register your kitchen and start earning
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
              labelName="Business/Shop Name"
              type="text"
              inputName="name"
              placeholder="Enter company or shop name"
              error={errors.name?.message}
              {...register("name")}
            />
          </div>

          <div className="space-y-1">
            <Input
              labelName="Username"
              type="text"
              inputName="username"
              placeholder="e.g., the_gourmet_reel"
              error={errors.username?.message}
              {...register("username")}
            />
          </div>

          <div className="space-y-1">
            <Input
              labelName="Contact Person Name"
              type="text"
              inputName="contactName"
              placeholder="Enter contact person's name"
              error={errors.contactName?.message}
              {...register("contactName")}
            />
          </div>

          <div className="space-y-1">
            <Input
              labelName="Phone Number"
              type="tel"
              inputName="phone"
              placeholder="Enter phone number"
              error={errors.phone?.message}
              {...register("phone")}
            />
          </div>

          <div className="space-y-1">
            <Input
              labelName="Business Address"
              type="text"
              inputName="address"
              placeholder="Enter full address"
              error={errors.address?.message}
              {...register("address")}
            />
          </div>

          <div className="space-y-1">
            <Input
              labelName="Email Address"
              type="email"
              inputName="email"
              placeholder="Enter email address"
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
              error={errors.password?.message}
              {...register("password")}
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Kitchen Description
            </label>
            <textarea
              className={`block w-full rounded-xl border p-3 text-sm text-slate-800 bg-white placeholder-slate-400 outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 ${
                errors.description?.message ? "border-red-500" : "border-slate-200"
              }`}
              id="description"
              rows={3}
              placeholder="Tell customers about your specialties, hygiene standards, or heritage..."
              {...register("description")}
            />
            {errors.description?.message && (
              <p className="text-red-500 text-xs mt-1">
                {String(errors.description.message)}
              </p>
            )}
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              btnName={loading ? "Registering..." : "Create Partner Account"}
              disabled={loading}
              className="w-full justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition duration-200 shadow-lg shadow-emerald-600/10 active:scale-[0.98]"
            />
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          Already registered with us?{" "}
          <Link
            href="/partner/login"
            className="font-bold text-emerald-600 hover:text-emerald-500 transition-colors duration-200 underline underline-offset-4"
          >
            Already have an account
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default PartnerSignup;