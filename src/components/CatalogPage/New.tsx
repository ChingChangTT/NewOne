import React from 'react'
import myImg from '../../asset/pngwing.com (5).png'
export default function New() {
  return (
    <div className="h-[543px] justify-start items-center inline-flex">
  <div className="w-[530px] flex-col justify-start items-start gap-[50px] inline-flex">
    <div className="self-stretch justify-start items-end gap-5 inline-flex">
      <div className="w-[170px] shadow flex-col justify-start items-center gap-2.5 inline-flex">
        <div className="self-stretch text-white text-7xl font-bold font-['Inter'] leading-[86.40px]">New </div>
      </div>
      <div className="w-[340px] text-white text-8xl font-bold font-['Inter'] leading-[115.20px]">Arrival</div>
    </div>
    <div className="justify-center items-center gap-5 inline-flex">
      <div className="h-[115px] justify-center items-center gap-2.5 flex">
        <div className="w-[207px] text-white text-8xl font-bold font-['Inter'] leading-[115.20px]">30%</div>
      </div>
      <div className="w-[223px] flex-col justify-start items-center gap-5 inline-flex">
        <div className="justify-center items-center gap-5 inline-flex">
          <div className="w-[50px] h-[50px] px-3.5 py-1.5 bg-[#f970d1] rounded-[50px] flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="w-4 text-white text-2xl font-bold font-['Inter'] leading-[28.80px]">S</div>
          </div>
          <div className="w-[50px] h-[50px] px-3.5 py-1.5 bg-[#8a8276] rounded-[50px] flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="w-5 text-white text-2xl font-bold font-['Inter'] leading-[28.80px]">M</div>
          </div>
          <div className="w-[50px] h-[50px] px-3.5 py-1.5 bg-[#8a8276] rounded-[50px] flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="w-3 text-white text-2xl font-bold font-['Inter'] leading-[28.80px]">L</div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch justify-start items-end gap-5 inline-flex">
      <div className="w-[170px] bg-amber-500 shadow flex-col justify-start items-center gap-2.5 inline-flex">
        <div className="self-stretch text-white text-5xl font-bold font-['Inter'] leading-[57.60px]">Special </div>
      </div>
      <div className="w-[340px] text-amber-500 text-5xl font-bold font-['Inter'] leading-[57.60px]">Promotion</div>
    </div>
  </div>
  <div className="w-[668px] h-[543px] relative">
    <img className="w-[367px] h-[543px] left-0 top-0 absolute" src={myImg} />
    <img className="w-64 h-[400px] left-[272px] top-[72px] absolute" src={myImg} />
    <img className="w-[197px] h-[300px] left-[471px] top-[122px] absolute" src={myImg}/>
  </div>
</div>
  )
}
