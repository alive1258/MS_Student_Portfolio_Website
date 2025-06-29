// components/ArticleCardSkeleton.jsx
import React from "react";

const ArticleCardSkeleton = () => {
  return (
    <div className="border border-gray-200 bg-white p-4 rounded-2xl animate-pulse flex flex-col h-full">
      {/* Image Skeleton */}
      <div className="w-full h-[245px] bg-gray-200 rounded-2xl mb-4" />

      {/* Category */}
      <div className="w-[100px] h-[24px] bg-gray-200 rounded-full mb-4" />

      {/* Title */}
      <div className="w-full h-[24px] bg-gray-200 rounded mb-2" />
      <div className="w-2/3 h-[24px] bg-gray-200 rounded" />

      {/* Description */}
      <div className="mt-4 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
      </div>

      {/* Button */}
      <div className="mt-auto pt-6 flex justify-center">
        <div className="w-[120px] h-[40px] bg-gray-300 rounded-lg" />
      </div>
    </div>
  );
};

export default ArticleCardSkeleton;
