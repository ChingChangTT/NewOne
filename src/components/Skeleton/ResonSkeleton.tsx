import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ResonSkeleton() {
  return (
    <div className="m-auto p-4 border rounded-md w-4/5 mt-10">
      <Skeleton className="h-10 w-1/3 mb-3 mx-auto" />
      <Skeleton className="h-6 w-2/3 mb-6 mx-auto" />
      <div className="flex flex-wrap gap-3 justify-center">
        <div className="flex items-center w-full mt-12">
          <Skeleton className="h-0.5 w-full" />
          <Skeleton className="h-6 w-20 mx-3" />
          <Skeleton className="h-0.5 w-full" />
        </div>
        {Array(5).fill().map((_, index) => (
          <Skeleton key={index} className="h-10 w-1/3 rounded-md" />
        ))}
        <div className="flex items-center w-full">
          <Skeleton className="h-0.5 w-full" />
          <Skeleton className="h-6 w-20 mx-3" />
          <Skeleton className="h-0.5 w-full" />
        </div>
        {Array(5).fill().map((_, index) => (
          <Skeleton key={index} className="h-10 w-1/3 rounded-md" />
        ))}
        <div className="flex items-center w-full">
          <Skeleton className="h-0.5 w-full" />
          <Skeleton className="h-6 w-20 mx-3" />
          <Skeleton className="h-0.5 w-full" />
        </div>
        <Skeleton className="h-10 w-2/3 rounded-md" />
        <Skeleton className="w-full h-[500px] mt-14 rounded-md" />
      </div>
    </div>
  );
}
