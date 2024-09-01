export function Price( { time, date, imageUrl, name, description }) {
  return (
    <div>
      <div className="w-[575px] h-[118px] px-6 py-[18px] bg-neutral-50/20 rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
  <div className="justify-center items-center gap-8 inline-flex">
    <div className="flex-col justify-center items-center gap-2 inline-flex">
      <div className="w-[68px] text-center text-black text-sm font-semibold font-['Inter'] leading-[14px]">{time || 'Default'}</div>
      <div className="w-[76px] text-center text-[#eaddff] text-sm font-semibold font-['Inter'] leading-[14px]">{date || 'Defualt'}</div>
    </div>
    <div className="w-1 h-16 bg-[#e6e6e6]" />
    <div className="flex-col justify-start items-start gap-4 inline-flex">
      <div className="justify-start items-center gap-2 inline-flex">
        <img className="w-[50px] h-[50px] rounded-full" src={imageUrl || 'https://i.pinimg.com/564x/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.jpg'} />
        <div className="text-white text-base font-normal font-['Roboto'] leading-normal tracking-wide">{name || 'default' }</div>
      </div>
      <div className="w-[422px] text-black text-base font-normal font-['Inter'] leading-none">{description || 'Default'}</div>
    </div>
  </div>
</div>
    </div>
  )
}
const cardsData = [
  {
    time: "12:00 PM",
    date: "April, 08",
    imageUrl: "https://i.pinimg.com/564x/55/a1/be/55a1becf8728609f0c86f5b885369f00.jpg",
    name: "Malinda",
    description: "I can’t imagine this price of drink there"
  },
  {
    time: "01:00 PM",
    date: "April, 09",
    imageUrl: "https://i.pinimg.com/564x/39/2f/7c/392f7ccc639cad5da4ace9d91ed657bf.jpg",
    name: "John",
    description: "This is quite affordable!"
  },
  {
    time: "02:00 PM",
    date: "April, 10",
    imageUrl: " https://i.pinimg.com/736x/3b/91/ea/3b91eae57b0336255f8735ed63a54c7f.jpg",
    name: "Alice",
    description: "Great value for money."
  },
  {
    time: "03:00 PM",
    date: "April, 11",
    imageUrl: "https://i.pinimg.com/736x/00/20/23/0020230cab4d27721023fc3b60334a49.jpg",
    name: "Bob",
    description: "Unbelievable prices!"
  }
];

export default function PriceList() {
  return (
    <div className="flex flex-wrap justify-center gap-8 m-auto mt-14">
      {cardsData.map((card, index) => (
        <Price 
          key={index}
          time={card.time}
          date={card.date}
          imageUrl={card.imageUrl}
          name={card.name}
          description={card.description}
        />
      ))}
    </div>
  );
}