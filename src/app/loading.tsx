export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      <p className="mt-4 text-lg font-semibold text-gray-700">Loading please wait...</p>
    </div>
  );
}


// import { Clapperboard, Utensils } from "lucide-react";

// export default function Loading() {
//   return (
//     <div className="fixed inset-0 z-[9999] flex h-screen w-screen flex-col items-center justify-center bg-background px-4">
//       {/* Main Content Container centered both horizontally and vertically */}
//       <div className="flex flex-col items-center justify-center text-center">
        
//         {/* Animated Icons */}
//         <div className="relative flex items-center justify-center mt-16 mb-6 h-full">
//           {/* Outer Pulsing Glow */}
//           <div className="absolute rounded-full bg-orange-500/20 blur-xl animate-pulse w-24 h-24"></div>
          
//           <div className="relative flex space-x-2">
//             <Clapperboard className="w-12 h-12 text-orange-500 animate-bounce" />
//             <Utensils className="w-12 h-12 text-red-500 animate-bounce [animation-delay:0.2s]" />
//           </div>
//         </div>

//         {/* Text Skeleton */}
//         <h2 className="text-xl font-bold text-foreground animate-pulse tracking-wide">
//           Cooking ReelBite Feed...
//         </h2>
//         <p className="text-sm text-muted-foreground mt-2 animate-pulse [animation-delay:0.4s]">
//           Serving fresh content in a moment!
//         </p>

//         {/* Shimmer Placeholder for Feed Content */}
//         <div className="mt-8 w-full max-w-md space-y-4 px-4 opacity-60">
//           <div className="h-48 w-full bg-muted animate-pulse rounded-2xl"></div>
//           <div className="h-4 w-3/4 bg-muted animate-pulse rounded mx-auto"></div>
//           <div className="h-4 w-1/2 bg-muted animate-pulse rounded mx-auto"></div>
//         </div>
        
//       </div>
//     </div>
//   );
// }