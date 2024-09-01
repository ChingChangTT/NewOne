import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function PriceSkeleton() {
  return (
    <div className="w-[575px] h-[118px] px-6 py-[18px] bg-neutral-50/20 rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="justify-center items-center gap-8 inline-flex">
        <div className="flex-col justify-center items-center gap-2 inline-flex">
          <Skeleton className="text-sm font-semibold" width={68} height={20} />
          <Skeleton className="text-sm font-semibold" width={76} height={20} />
        </div>
        <div className="w-1 h-16 bg-[#e6e6e6]" />
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <Skeleton circle={true} height={50} width={50} />
            <Skeleton width={100} height={20} />
          </div>
          <Skeleton width={422} height={20} />
        </div>
      </div>
    </div>
  );
}
