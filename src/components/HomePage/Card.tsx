import React, { useState, useEffect } from 'react';
import { HeroSkeleton, FeaturedSkeleton } from './Skeleton';
import Reson from './Reson';
import Date from './Date';
import PriceList from './Price';
import Showing from './Showing';
import { IoGameController } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import ShowingSkeleton from '../Skeleton/ShowingSkeleton';
import ResonSkeleton from '../Skeleton/ResonSkeleton';
import DateSkeleton from '../Skeleton/MyDate';
import { PriceSkeleton } from '../Skeleton/PriceSkeleton';
import { DetailSkeleton } from '../Skeleton/DetailSkeleton';
import DetailFinal from './Detail';

export const Card: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* Simulate Hero and Featured sections loading state */}
      {loading && (
        <>
          <HeroSkeleton />
          <FeaturedSkeleton numSkeletons={3} />
        </>
      )}

      {/* Static Hero section */}
      {!loading && (
        <div className='w-4/5 m-auto '>
          <div className="w-full h-[500px] justify-between items-center inline-flex">
            <div className="w-[538px] flex-col justify-start items-start inline-flex">
              <div className="self-stretch h-[135.50px] flex-col justify-start items-end flex">
                <div className="w-[74px] px-[50px] py-5 border-r-4 border-t-4 border-black justify-center items-center gap-2.5 inline-flex">
                  <div className="w-[38.54px] h-[45.83px] relative">
                    <IoGameController className='w-14 h-14 -ml-4' />
                  </div>
                </div>
                <div className="self-stretch h-[58px] pl-[50px] justify-between items-center inline-flex">
                  <div className="w-[482px] text-center text-white text-[64px] font-normal font-['Ribeye Marrow'] leading-[64px]">
                    Coffee 5G
                  </div>
                </div>
              </div>
              <div className="w-[74px] px-[50px] py-5 border-l-4 border-b-4 border-black justify-center items-center gap-2.5 inline-flex">
                <div className="w-[38.54px] h-[45.83px] relative">
                  <MdLibraryBooks className='w-14 h-14 mr-20 -mt-5' />
                </div>
              </div>
            </div>
            <img className="w-[230px] h-[230px] rounded-[10px]" src="https://i.pinimg.com/564x/6a/86/c3/6a86c387495a30851e5843a582c7b6f2.jpg" alt="Coffee" />
            <img className="w-[300px] h-[290.83px] rounded-[10px]" src="https://i.pinimg.com/564x/b2/87/26/b287269d12944c6773dc240d09b0d8b2.jpg" alt="Coffee" />
          </div>
        </div>
      )}

      {/* Static or Skeleton content for other sections */}
      {loading ? <ShowingSkeleton /> : <Showing />}
      {loading ? <ResonSkeleton /> : <Reson />}
      {loading ? <DateSkeleton /> : <Date />}
      
      <h1 className='block mt-14 text-center text-4xl font-bold mb-14 text-white'>Good price</h1>
      <div className="flex flex-wrap gap-8 w-4/5 m-auto mt-14">
        {loading
          ? new Array(4).fill(0).map((_, index) => <PriceSkeleton key={index} />)
          : <PriceList />}
      </div>

      <div className="flex w-4/5 m-auto justify-between">
        {loading
          ? [1, 2].map((_, index) => (
              <DetailSkeleton key={index} />
            ))
          : <DetailFinal />}
      </div>
    </>
  );
};
