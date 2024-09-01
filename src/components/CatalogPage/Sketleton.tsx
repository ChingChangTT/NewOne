export default function HeroSectionSkeleton() {
    return (
      <>
        <div className="inset-0 animate-pulse">
          {/* Skeleton for Hero Section */}
          <div className="w-full h-screen bg-gray-300" />
  
          {/* Skeleton for 30% Off Text */}
          <div className="flex w-1/2 justify-between m-auto">
            <div className="absolute bg-gray-400 w-24 h-10 mt-60 mb-4" />
            <div className="absolute bg-gray-400 w-24 h-10 mt-60 mb-4 ml-[700px]" />
          </div>
  
          {/* Skeleton for Cards */}
          <div className="absolute inset-0 flex justify-center items-center mt-[700px] ">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="bg-gray-300 w-40 h-40" />
              ))}
            </div>
          </div>
  
          {/* Skeleton for Other Sections */}
          <div className="w-4/5 m-auto mt-10">
            <div className="bg-gray-300 h-64 mt-44"></div>
            <div className="bg-gray-300 h-10 mt-10"></div>
            <div className="bg-gray-300 h-64 mt-10"></div>
            <div className="bg-gray-300 h-10 mt-10"></div>
            <div className="bg-gray-300 h-64 mt-10"></div>
            <div className="bg-gray-300 h-10 mt-10"></div>
          </div>
        </div>
      </>
    );
  }
  