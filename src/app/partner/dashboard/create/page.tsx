"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../../components/form/Input";
import { reelSchema } from "../../../../schemas/schema";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import Button from "../../../../components/common/Button";
import { postReel } from "../../../../features/reels/reelThunk";

const Create = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(reelSchema),
    defaultValues: {
      name: "",
      price: "",
      description: "",
      likes: 0,
    },
  });

  const { loading, error } = useAppSelector((state) => state.reel);

  const formSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("likes", String(data.likes || 0));

    if (data.file && data.file[0]) {
      formData.append("file", data.file[0]);
    }

    dispatch(postReel(formData as any));
  };

  return (
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 p-6 sm:p-8 w-full max-w-xl mx-auto">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Create Food Item Reel
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Fill the fields below to sync with your partner collection profile
          </p>
        </div>

        {/* ERROR CONTAINER */}
        {error && (
          <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-100 text-sm text-red-600 font-medium">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* FOOD NAME */}
          <div className="space-y-1">
            <Input
              labelName="Food Name"
              type="text"
              placeholder="e.g., Butter Chicken Reel Special"
              focusClassName="focus:border-emerald-500 focus:ring-emerald-100"
              inputName="name"
              error={errors.name?.message}
              {...register("name")}
            />
          </div>

          {/* FOOD PRICE */}
          <div className="space-y-1">
            <Input
              labelName="Price (₹)"
              type="number"
              placeholder="Enter menu price"
              inputName="price"
              focusClassName="focus:border-emerald-500 focus:ring-emerald-100"
              error={errors.price?.message}
              {...register("price")}
            />
          </div>

          {/* FOOD DESCRIPTION / AGGREGATED CAPTION */}
          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Food Description / Views Text
            </label>
            <textarea
              className={`block w-full rounded-xl border p-3 text-sm text-slate-800 bg-white placeholder-slate-400 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 ${
                errors.description?.message
                  ? "border-red-500"
                  : "border-slate-200"
              }`}
              id="description"
              rows={4}
              placeholder="Enter description or view statistics..."
              {...register("description")}
            />
            {errors.description?.message && (
              <p className="text-red-500 text-xs mt-1">
                {String(errors.description.message)}
              </p>
            )}
          </div>

          {/* VIDEO / MEDIA FILE UPLOAD */}
          <div className="space-y-1">
            <Input
              labelName="Upload Reel File"
              type="file"
              inputName="file"
              placeholder="Choose raw reel file"
              focusClassName="focus:border-emerald-500 focus:ring-emerald-100"
              error={errors.file?.message}
              {...register("file")}
            />
          </div>

          {/* ACTION BUTTON */}
          <div className="pt-2">
            <Button
              type="submit"
              btnName={loading ? "Publishing Item..." : "Publish Food Reel"}
              disabled={loading}
              className="w-full justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition duration-200 shadow-lg shadow-emerald-600/10 active:scale-[0.98]"
            />
          </div>
        </form>
      </div>
  );
};

export default Create;
