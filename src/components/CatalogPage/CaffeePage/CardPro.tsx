import React from 'react';

export default function CardPro() {
  const cardData = [
    {
      title: 'Coffee',
      info: 'More Information',
      imageUrl: 'https://i.pinimg.com/564x/f4/b4/68/f4b468c720a97521602be6095de1abec.jpg',
      discount: '30%',
    },
    {
      title: 'Cake',
      info: 'More Information',
      imageUrl: 'https://i.pinimg.com/564x/13/8e/f6/138ef6f5cd362b73d48b950b1f7ddf8b.jpg',
      discount: '30%',
    },
    {
      title: 'Bobble Tea',
      info: 'More Information',
      imageUrl: 'https://i.pinimg.com/564x/2d/f7/17/2df71796429a8f41283f70dabd6d8eea.jpg',
      discount: '30%',
    },
    {
      title: 'Fried food',
      info: 'More Information',
      imageUrl: 'https://i.pinimg.com/564x/77/ee/ef/77eeef3891b581e00ac8e5f472aea5b0.jpg',
      discount: '30%',
    },
    {
      title: 'Fruit Juice',
      info: 'More Information',
      imageUrl: 'https://i.pinimg.com/564x/68/00/c5/6800c53dd090b11b8adea3c3c1003ed0.jpg',
      discount: '30%',
    },
    {
      title: 'Dessert',
      info: 'More Information',
      imageUrl: 'https://i.pinimg.com/736x/63/c6/47/63c64708ec52cca271838c4578eba8c2.jpg',
      discount: '30%',
    },
    {
      title: 'Frappe Drink',
      info: 'More Information',
      imageUrl: 'https://i.pinimg.com/564x/f2/0b/54/f20b54d142e2cf71f706bc42eb0e6414.jpg',
      discount: '30%',
    },
    {
      title: 'Bread',
      info: 'More Information',
      imageUrl: 'https://i.pinimg.com/564x/e9/03/5c/e9035c3a8c38c271d93cab59584dc4ed.jpg',
      discount: '30%',
    },
  ];

  return (
    <div className="w-4/5 flex  justify-center items-start m-auto mt-10 gap-x-10 flex-wrap">
      {cardData.map((card, index) => (
        <div key={index} className="self-stretch justify-start items-center gap-44 inline-flex mb-5">
          <div className="w-[587px] h-[270px] relative rounded-lg m-auto">
            <div className="h-[42px] left-[4px] top-[221px] absolute">
              <div className="w-[156px] left-0 top-[40px] absolute text-white text-base font-normal font-['ABeeZee'] underline leading-tight tracking-tight">
                {card.info}
              </div>
              <div className="w-[156px] left-0 top-0 absolute text-[#959393] text-sm font-normal font-['ABeeZee'] leading-snug tracking-tight">
                {card.title}
              </div>
            </div>
            <div className="w-[590.58px] h-[213px] left-0 top-0 absolute bg-[#006eff] rounded-xl">
              <img className="w-[590.58px] h-[250px] left-0 top-0 absolute rounded-lg" src={card.imageUrl} alt={card.title} />
            </div>
            <div className="px-1.5 py-0.5 left-[545px] top-[8px] absolute bg-[#006eff] rounded-[40px] justify-start items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-[10px] font-normal font-['ABeeZee'] leading-none tracking-tight">
                {card.discount}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
