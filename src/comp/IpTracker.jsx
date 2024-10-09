import bgimg from "/images/pattern-bg-desktop.png";
import Map from "./Map";

export default function IpTracker() {
  return (
    <div className="relative">
      <img width="100%" height="100%" src={bgimg} className="z-0" />
      <div className="absolute inset-0 top-72 z-0 flex justify-center ">
        <Map />
      </div>
      <div className="absolute inset-0 top-10 z-10 flex justify-center ">
        <h1 className="text-white text-3xl font-bold">IP Address Tracker</h1>
      </div>
      <div className="absolute inset-0  top-24 z-10 flex  justify-center ">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="text-black w-72 focus:outline-none pl-4 text-sm h-10 rounded-l-lg  border-gray-500"
        />
        <button className="bg-black flex items-center justify-center text-white h-10 w-10 rounded-r-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-0 translate-y-60     h-32  z-10 flex  justify-center  ">
        <div className="w-10/12 bg-white shadow-2xl grid grid-cols-4 gap-4 px-10 py-5 rounded-lg">
          <div className="relative  ">
            <div className="absolute inset-y-2  right-0 w-[1px] h-16 bg-gray-300"></div>{" "}
            <h1 className="text-gray-500 text-sm font-bold">Ip Address</h1>
            <p className="text-black pt-2 text-3xl">38.0.101.76</p>
          </div>

          <div className="relative ">
            <div className="absolute inset-y-2 right-0 w-[1px] h-16 bg-gray-300"></div>

            <h1 className="text-gray-500 text-sm font-bold">Location</h1>
            <p className="text-black pt-2 text-3xl">Manila</p>
          </div>

          <div className="relative ">
            <div className="absolute inset-y-2 right-0 w-[1px] h-16 bg-gray-300"></div>

            <h1 className="text-gray-500 text-sm font-bold">TimeZone</h1>
            <p className="text-black pt-2 text-3xl">PST -8:00</p>
          </div>

          <div>
            <h1 className="text-gray-500 text-sm font-bold">ISP</h1>
            <p className="text-black pt-2 text-3xl">SpaceX Spaceport</p>
          </div>
        </div>
      </div>
    </div>
  );
}
