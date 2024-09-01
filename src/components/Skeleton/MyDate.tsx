import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function DateSkeleton() {
  return (
    <>
      <div className="mt-14">
        <Skeleton className="h-10 w-1/3 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-4/5 m-auto mt-14">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="p-10 flex flex-col items-center text-center border-r border-[#b2b3b4] last:border-r-0">
            <span className="p-5 rounded-full shadow-lg">
              <Skeleton circle={true} height={40} width={40} />
            </span>
            <Skeleton className="h-6 w-24 mt-7" />
            <Skeleton className="h-4 w-20 mt-5" />
          </div>
        ))}
      </div>
    </>
  );
}
