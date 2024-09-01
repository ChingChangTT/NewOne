import React from 'react'
const cardData = [
    {
      title: "Belleville",
      image: "https://i.pinimg.com/564x/75/86/24/75862466abd1815a188bb09f34564b5c.jpg", 
    },
    {
      title: "Hot Cappuccino",
      image: "https://i.pinimg.com/564x/33/44/2e/33442e58a74503c7cef4fc437a4ebc8e.jpg",
    },
    {
      title: "Croissants",
      image: "https://i.pinimg.com/474x/6e/28/63/6e2863054060980029f2276b41ba3545.jpg",
      
    }
  ];
export default function CardHover() {
  return (
    <div className="h-[350px] justify-between items-center inline-flex gap-8">
  {cardData.map((card, index) => (
    <div
      key={index}
      className="w-96 h-[350px] relative rounded-[10px] group overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <div className="w-full h-full absolute bg-gradient-to-b from-transparent to-[#012b10] opacity-70 rounded-[10px] transition-opacity duration-300 group-hover:opacity-90 z-10" />
      <img
        className="w-full h-full object-cover rounded-[10px] transition-transform duration-300 group-hover:scale-110"
        src={card.image}
        alt={card.title}
      />
       <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white z-20">
            <h2 className="text-4xl font-semibold font-['Poppins'] transition-transform duration-500 group-hover:translate-y-[-10px]">
              {card.title}
            </h2>
            <p className="opacity-0 text-[16px] font-normal font-['Poppins'] transition-opacity duration-500 group-hover:opacity-100 group-hover:translate-y-[20px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum aliquam proin tincidunt turpis sit aliquam elementum.
            </p>
          </div>

      {/* Triangle Shape Image */}
      <div className="absolute top-0 right-0 w-48 h-48 -mt-5 overflow-hidden transform scale-0 group-hover:scale-125 transition-transform duration-300">
        <img
          src={card.image}
          alt="Triangle"
          className="w-full h-full object-cover transform -rotate-12 rounded-l-full"
          style={{ clipPath: "" }}
        />
      </div>
    </div>
  ))}
</div>

  
  )
}
