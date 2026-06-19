"use client";

import { useForm } from "react-hook-form";
import Input from "../../../components/form/Input";
import Button from "../../../components/common/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../../schemas/schema";
import { registerUser } from "../../../features/auth/user/userAuthThunck";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Wrapper from "../../../components/Wrapper";
import { useEffect } from "react";

const Signup = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, error, isAuthenticated } = useAppSelector(
    (state) => state.auth,
  );
  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/user");
    }
  }, [isAuthenticated, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const formSubmit = (data:any) => {
    dispatch(registerUser(data));
  };

  return (
    <Wrapper>
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 w-full">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Create an Account
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Join us today! It only takes a minute.
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
              labelName="Full Name"
              type="text"
              inputName="name"
              placeholder="John Doe"
              error={errors.name?.message}
              {...register("name")}
            />
          </div>

          <div className="space-y-1">
            <Input
              labelName="Email Address"
              type="email"
              inputName="email"
              placeholder="name@example.com"
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

          <div className="pt-2">
            <Button
              type="submit"
              btnName={loading ? "Creating account..." : "Create Account"}
              disabled={loading}
              className="w-full justify-center"
            />
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            href="/user/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors duration-200 underline underline-offset-4"
          >
            Sign in instead
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Signup;
