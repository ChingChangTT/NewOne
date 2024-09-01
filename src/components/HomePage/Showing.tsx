import React from 'react';

export default function Showing() {
  return (
    <div className="w-4/5 m-auto">
      <div className="w-full flex justify-start gap-5">
        <div className="w-[710px] py-2.5 bg-white/20 rounded-lg justify-center items-center flex text-white text-2xl font-semibold">
          Seat
        </div>
        <div className="w-[466px] py-2.5 bg-white/20 rounded-lg justify-center items-center flex text-white text-2xl font-semibold">
          Our Library
        </div>
      </div>

      <div className="h-[302px] justify-start items-center gap-5 inline-flex mt-10">
        <img
          className="w-[345px] h-[302px] rounded-lg"
          src="https://i.pinimg.com/564x/5a/ec/ff/5aecffe646f7e914c040a308f5076e62.jpg"
          alt="Seat"
        />
        <img
          className="w-[345px] h-[302px] rounded-lg"
          src="https://i.pinimg.com/564x/78/39/42/78394261a96ff2bc741add3f3dc25107.jpg"
          alt="Our Library"
        />
        <div className="w-[466px] h-[302px] relative bg-[#a2845e]/40 rounded-lg">
          <div className="w-[100px] h-[100px] px-1 left-[183px] top-[101px] absolute justify-center items-center inline-flex">
            <div className="w-[91.67px] h-[75px] relative"></div>
          </div>
          <img
            className="w-[466px] h-[302px] left-0 top-0 absolute rounded-lg"
            src="https://i.pinimg.com/564x/be/20/56/be20566b6fd67c254caf00d8b116066d.jpg"
            alt="Library"
          />
        </div>
      </div>
    </div>
  );
}
