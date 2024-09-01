import React from 'react'
import Skeleton from 'react-loading-skeleton';
export default function ShowingSkeleton() {
    return (
    <div className="w-4/5 m-auto">
      <div className="w-full flex justify-start gap-5">
        <div className="w-[710px] py-2.5 bg-white/20 rounded-lg justify-center items-center flex">
          <Skeleton width={710} height={32} />
        </div>
        <div className="w-[466px] py-2.5 bg-white/20 rounded-lg justify-center items-center flex">
          <Skeleton width={466} height={32} />
        </div>
      </div>

      <div className="h-[302px] justify-start items-center gap-5 inline-flex mt-10">
        <Skeleton width={345} height={302} className="rounded-lg" />
        <Skeleton width={345} height={302} className="rounded-lg" />
        <div className="w-[466px] h-[302px] relative bg-[#a2845e]/40 rounded-lg">
          <Skeleton width={466} height={302} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}
