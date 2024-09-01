import React from 'react';

// Example data array
const cardData = [
  {
    id: 1,
    image: 'https://i.pinimg.com/564x/77/ba/09/77ba09f00717a31df1b6f888e13c2dc5.jpg',
    title: 'Product 1',
    price: '$2.50',
    discount: '30%',
    specialPrice: 'Special Price',
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/564x/79/56/28/7956288343b6bb2482220b647a8e2118.jpg',
    title: 'Product 2',
    price: '$3.00',
    discount: '25%',
    specialPrice: 'Special Price',
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/564x/f3/95/dd/f395dda5400b2ff5267a9c08911193e5.jpg',
    title: 'Product 3',
    price: '$4.00',
    discount: '20%',
    specialPrice: 'Special Price',
  },
];

export default function EndCard() {
  return (
    <div className="h-[343px] justify-start items-center gap-[22px] inline-flex">
      <div className="h-[343px] flex-col justify-center items-center inline-flex">
        <img className="w-[223px] h-[343px]" src="https://i.pinimg.com/564x/9e/ba/a0/9ebaa0c3b0241bdf592be10dc5e35911.jpg" alt="Static Card 1" />
      </div>

      {cardData.map((card) => (
        <div className="relative group" key={card.id}>
          <img className="w-[342px] h-[342px]" src={card.image} alt={`Hover Card ${card.id}`} />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity gap-6">
            <h2 className="text-white text-2xl font-bold mb-2 mr-auto ml-5">{card.title}</h2>
            <p className="text-white text-lg mb-2 mr-auto ml-5">{card.price}</p>
            <p className="text-white text-center text-lg mb-4 mr-auto ml-5">discount: {card.discount}</p>
            <p className="text-white text-lg mb-2 mr-auto ml-5">{card.specialPrice}</p>
            <button className="bg-white text-black px-4 py-2 font-bold rounded-full ml-auto mr-5 -mt-[75px]">Order Now</button>
          </div>
        </div>
      ))}

      <div className="w-[223px] h-[343px] flex-col justify-center items-center inline-flex">
        <img className="w-[223px] h-[343px]" src="https://i.pinimg.com/564x/9e/ba/a0/9ebaa0c3b0241bdf592be10dc5e35911.jpg" alt="Static Card 2" />
      </div>
    </div>
  );
}
