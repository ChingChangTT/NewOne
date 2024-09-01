import openUrl from '../../asset/openUrl.png';
import closed from '../../asset/closed.png';
import discount from '../../asset/discount.png';

export default function Date() {
  return (
    <>
      <div className="mt-14">
        <h1 className="text-4xl font-bold text-center text-white">Our Schedule</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-4/5 m-auto mt-14">
        <div className="p-10 flex flex-col items-center text-center border-r border-[#b2b3b4] last:border-r-0">
          <span className="p-5 rounded-full bg-green-500 text-white shadow-lg shadow-red-200">
            <img src={openUrl} alt="" className="w-10 h-10 object-cover" />
          </span>
          <p className=" mt-7 text-xl font-medium text-white">Open Time</p>
          <p className="mt-5 text-sm text-white">6:00 AM</p>
        </div>
        <div className="p-10 flex flex-col items-center text-center border-r border-[#b2b3b4] last:border-r-0">
          <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-orange-200">
            <img src={closed} alt="" className="w-10 h-10 object-cover" />
          </span>
          <p className="text-xl font-medium text-white mt-7">Close Time</p>
          <p className="mt-5 text-sm text-white">10:00 PM</p>
        </div>
        <div className="p-10 flex flex-col items-center text-center">
          <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200">
            <img src={discount} alt="" className="w-10 h-10 object-cover" />
          </span>
          <p className="text-xl font-medium text-white mt-7">Discount Time</p>
          <p className="mt-5 text-sm text-white">Discount every special day</p>
        </div>
      </div>
    </>
  );
}
