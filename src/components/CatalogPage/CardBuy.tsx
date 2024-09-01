import React, { useState } from 'react';
import one from '../../asset/1.png'
import two from '../../asset/2.png'
import three from '../../asset/3.png'
import four from '../../asset/4.png'
import five from '../../asset/5.png'
import six from '../../asset/6.png'
import seven from '../../asset/7.png'
import eigth from '../../asset/8.png'
export default function CardWithHover() {
  const [isHovered, setIsHovered] = useState(false);
  const products = [
    {
      id: 1,
      name: "Espresso Beans",
      price: "$15",
      image: one,
    },
    {
      id: 2,
      name: "Arabica & Robusta",
      price: "$8",
      image: two,
    },
    {
      id: 3,
      name: "Robusta",
      price: "$12",
      image:three,
    },
    {
      id: 4,
      name: "Liberica",
      price: "$18",
      image: four,
    },
    {
      id: 1,
      name: "Espresso Beans",
      price: "$15",
      image: five,
    },
    {
      id: 2,
      name: "Arabica & Robusta",
      price: "$8",
      image: six,
    },
    {
      id: 3,
      name: "Robusta",
      price: "$12",
      image: seven,
    },
    {
      id: 4,
      name: "Liberica",
      price: "$18",
      image:eigth,
    },
  ];
  return (
    <div className="justify-between items-center gap-y-24 inline-flex flex-wrap ">
    {products.map((product) => (
      <div key={product.id} className="w-[285px] h-[286px] relative group">
        <div className="w-[211px] h-3.5 left-[13px] top-[122px] absolute bg-gradient-to-l from-[#060606] via-[#060606] to-[#060606] blur-[15px]" />
        
        <img
          className="w-[233px] h-[155px] left-[26px] top-[7px] absolute transform transition-transform duration-500 ease-in-out group-hover:rotate-12 group-hover:-mt-8"
          src={product.image}
          alt="Product"
        />
        
        <div className="left-[65px] top-[204px] absolute text-center text-white text-xl font-bold font-['Inter']">{product.name}</div>
        <div className="left-[128px] top-[239px] absolute text-center text-black text-base font-normal font-['Inter']">{product.price}</div>
        
        <div className="w-[285px] pl-[95px] pr-[94px] pt-[11px] pb-2.5 left-0 top-[300px] absolute bg-[#222121] justify-center items-center inline-flex transform translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <button className="text-center text-white text-sm font-normal font-['Inter']">ADD TO CART</button>
        </div>
      </div>
    ))}
  </div>
  
  );
}
