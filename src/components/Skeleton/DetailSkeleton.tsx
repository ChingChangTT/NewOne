import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function DetailSkeleton() {
  return (
    
    <div className='w-[49%] flex-col text-center'>
      <h2 className="text-4xl text-white font-bold mb-4">
        <Skeleton width={300} height={40} />
        
      </h2> 
      <div className={`bg-white flex w-full h-96 justify-between gap-x-8 mt-10`}>
        <div className="w-1/2 h-full flex">
          <Skeleton width="100%" height="100%" />
          <img src="https://fakeimg.pl/300x400" alt="" className='object-cover h-full' />
        </div>
        <div className=" lg:rounded-lg grid place-content-center h-full text-start  ">
          <Skeleton width={100} height={30} className='bg-gray-500' />
          <Skeleton width={300} height={20} className="mt-4" />
          <Skeleton width={300} height={60} className="mt-4" />
          <div className="mt-8">
            <Skeleton width={120} height={40} />
          </div>
        </div>
      </div> 
    </div>
  );
}
