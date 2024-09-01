import React from 'react';

export default function CardScaleAnimation() {
  return (
    <div className="h-[312px] flex gap-5 justify-start items-center">
      {[
        { id: 1, image: 'https://i.pinimg.com/564x/d0/df/35/d0df353e06246471ee3a43a1128fa2dc.jpg', label: 'Minimal Pattern' },
        { id: 2, image: 'https://i.pinimg.com/564x/5b/5e/09/5b5e09aaa18cf43aed6a3e673d489a22.jpg', label: 'Minimal Pattern' },
        { id: 3, image: 'https://i.pinimg.com/564x/8f/1e/ac/8f1eac8eafb27297fa447e482516065c.jpg', label: 'Minimal Pattern' },
        { id: 4, image: 'https://i.pinimg.com/564x/9c/4e/03/9c4e03700d42918a1448dc6b939c307a.jpg', label: 'Minimal Pattern' },
      ].map((card) => (
        <div
          key={card.id}
          className="w-[283px] h-[312px] bg-white rounded-xl shadow-lg flex-col justify-start items-center inline-flex transform transition-transform duration-300 hover:scale-105"
        >
          <div className="w-[300px] h-[239px] relative ">
           
              <img
                className="w-[300px] h-full object-contain"
                src={card.image}
                alt={card.label}
              />
              {/* <div className="w-full h-[94.33px] absolute bg-[#d7d7d7]/0" /> */}
            </div>
            <div className=" px-4 py-1 absolute bg-[#006eff] rounded-[40px] flex justify-center items-center gap-2.5 top-[16px] left-52">
              <div className="text-center text-white text-[10px] font-normal font-['ABeeZee'] leading-none tracking-tight">30%</div>
            </div>
          
          <div className="py-4 flex-col justify-start items-start gap-1 flex">
            {/* <div className="w-[84px] h-[13px] pr-[0.01px] pb-px justify-center items-center inline-flex">
              <img className="w-[83.99px] h-3" src="https://via.placeholder.com/84x12" alt="Placeholder" />
            </div> */}
            <div className="w-[209px] text-[#121212] text-xl font-bold font-['SF Pro Display'] leading-normal">
              {card.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
