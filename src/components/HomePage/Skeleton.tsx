// src/components/Skeleton.tsx
import React from 'react';

const Skeleton: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={`animate-pulse bg-gray-300 dark:bg-gray-700 ${className}`}></div>;
};

export const HeroSkeleton: React.FC = () => {
  return (
    <section className="bg-blue-600 py-20">
      <div className="container w-4/5 mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Skeleton className="h-12 w-3/4 mb-6" />
            <Skeleton className="h-8 w-full mb-8" />
            <Skeleton className="h-10 w-1/3" />
          </div>
          <div className="md:w-1/2">
            <Skeleton className="w-full h-64 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeaturedSkeleton: React.FC = ({ numSkeletons }) => {
  return (
    <section className="py-20">
      <div className="container w-4/5 mx-auto px-4">
        <Skeleton className="h-10 w-1/3 mb-8 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: numSkeletons }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Skeleton className="w-full h-64" />
              <div className="p-6">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-full" />
                <div className="mt-4 flex items-center justify-between">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-10 w-24 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
