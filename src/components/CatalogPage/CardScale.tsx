import React from 'react';
import { BiSolidHeartCircle } from "react-icons/bi";

export default function CardScaleAnimation() {
  const cards = [
    { id: 1, image: 'https://i.pinimg.com/564x/0a/95/a9/0a95a9f3f9bd453fe939e3a314af2089.jpg', title: 'Espresso Beans', icon: <BiSolidHeartCircle /> },
    { id: 2, image: 'https://i.pinimg.com/564x/49/f8/c3/49f8c3f298a86b3be0b87d2f77e06061.jpg', title: 'Arabica & Robusta',icon: <BiSolidHeartCircle /> },
    { id: 3, image: 'https://i.pinimg.com/564x/5c/d5/cc/5cd5cc6a3192b3098ab91a658b1b0185.jpg', title: 'Robusta',icon: <BiSolidHeartCircle /> },
    { id: 4, image: 'https://i.pinimg.com/564x/b0/f2/b3/b0f2b3a9ed3b435e2f2b578f0b6e6e6c.jpg', title: 'Liberica', icon: <BiSolidHeartCircle />},
  ];

  return (
    <div className="h-[286px] flex gap-5 justify-start items-center">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-[285px] h-[286px] relative bg-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
        >
          <div className="w-[211px] h-3.5 left-[13px] top-[122px] absolute bg-gradient-to-l from-[#060606] via-[#060606] to-[#060606] blur-[15px]" />
          <img
            className="w-[233px] h-[155px] left-[26px] top-[7px] absolute"
            src={card.image || 'Default'}
            alt={card.title || 'Default'}
          />
          <div className="absolute left-[53px] top-[204px] text-center text-white text-xl font-bold font-['Inter']">
            {card.title}
          </div>
          {card.icon && (
            <div className="absolute  left-[120px] top-[220px] text-red-500 text-5xl items-center">
              {card.icon}
            </div>
          )}
          {card.price && !card.icon && (
            <div className="absolute  left-[132px] top-[239px] text-center text-black text-base font-normal font-['Inter']">
              {card.price || 'defualt'}
            </div>
          )}
          <div className="absolute bottom-0 w-[285px] pl-[95px] pr-[94px] pt-[11px] pb-2.5 bg-[#222121] flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="text-center text-white text-sm font-normal font-['Inter']">ADD TO CART</div>
          </div>
        </div>
      ))}
    </div>
  );
}
