"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("ReelBite Error Log:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-background px-6 text-center">
      <div className="p-4 bg-red-500/10 rounded-full text-red-500 mb-6 animate-bounce">
        <AlertTriangle className="w-12 h-12" />
      </div>

      <h2 className="text-2xl font-black text-foreground sm:text-3xl">
        Oops! Recipe Went Wrong 🍳
      </h2>

      <p className="text-muted-foreground mt-3 max-w-md text-sm sm:text-base">
        Something spilled in the kitchen while loading ReelBite. Don't worry,
        let's try to cook it again.
      </p>

      <div className="mt-4 p-2 bg-muted rounded text-xs font-mono text-red-400 max-w-xs truncate">
        {error.message || "Unknown Application Error"}
      </div>

      <button
        onClick={() => reset()}
        className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-orange-500/20"
      >
        <RefreshCw className="w-4 h-4" />
        Try Again
      </button>
    </div>
  );
}
