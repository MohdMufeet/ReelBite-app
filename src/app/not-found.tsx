import Link from 'next/link';
import { ChefHat, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full bg-background px-6 text-center">
      <div className="relative mb-6">
        {/* 404 Big Text */}
        <span className="text-9xl font-extrabold tracking-widest text-muted/30 select-none">
          404
        </span>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500">
          <ChefHat className="w-16 h-16 animate-wiggle" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
        Page Left The Kitchen!
      </h2>
      
      <p className="text-muted-foreground mt-3 max-w-sm text-sm sm:text-base">
        The delicious recipe or video clip you are looking for doesn't exist or has been deleted.
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 text-foreground font-medium px-6 py-3 rounded-full transition-all border border-border"
        >
          <Home className="w-4 h-4" />
          Back to ReelBite Home
        </Link>
      </div>
    </div>
  );
}