const items = [
  {
    image: "https://i.pinimg.com/736x/f5/2d/91/f52d919ad2825bde9aa61205526098bd.jpg",
  },
  {
    image: "https://i.pinimg.com/564x/86/10/3e/86103ebb81edb2692911c0fed0e15fb5.jpg",
  },
  {
    image: "https://i.pinimg.com/736x/1e/2c/8a/1e2c8af26b7c82d1e48d03f3797384b9.jpg",
  },
  {
    image: "https://i.pinimg.com/564x/07/22/a3/0722a33365715f57b85a322df8042e43.jpg",
  },
];

export default function Page() {
  return (
    <div className="flex w-screen h-96 animate-marquee [--duration:30s] hover:[animation-play-state:paused] overflow-hidden">
      {[...items, ...items].map((item, index) => (
        <div key={index} className="flex-shrink-0 h-full w-1/4 px-2.5">
          <div className="h-full flex items-center justify-center">
            <img
              src={item.image}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
