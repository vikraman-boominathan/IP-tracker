import bgimg from "/images/pattern-bg-desktop.png";
import bgimg2 from "/images/pattern-bg-mobile.png";

import Map from "./Map";
import { useState } from "react";

export default function IpTracker({ setIp, data, coordinates }) {
  const [search, setSearch] = useState("");

  const searchInput = () => {
    setIp(search);
    setSearch("");
  };

  return (
    <div className="relative">
      <img
        width="100%"
        height="100%"
        src={bgimg}
        className="z-0 object-cover hidden md:block"
      />
      <img
        width="100%"
        height="100%"
        src={bgimg2}
        className="z-0 object-cover block md:hidden"
      />
      <div className="absolute inset-0 top-64 md:top-72 z-0 flex justify-center">
        <Map coordinates={coordinates} />
      </div>
      <div className="absolute inset-0 top-10 z-10 flex justify-center">
        <h1 className="text-white text-3xl font-bold">IP Address Tracker</h1>
      </div>
      <div className="absolute inset-0 top-24 z-10 flex justify-center px-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for any IP address or domain"
          className="text-black w-full md:w-72 focus:outline-none pl-4 text-sm h-10 rounded-l-lg border-gray-500"
        />
        <button
          onClick={searchInput}
          className="bg-black flex items-center justify-center text-white h-10 w-10 rounded-r-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-0 translate-y-48 md:translate-y-60 h-auto z-10 flex px-8 justify-center">
        <div className="w-full md:w-10/12 h-fit  bg-white shadow-2xl md:grid md:grid-cols-4 gap-4 md:px-10 py-5 rounded-lg px-4">
          <div className="relative flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="absolute inset-y-2 hidden md:block right-0 w-[1px] h-16 bg-gray-300"></div>
            <h1 className="text-gray-500 text-sm font-bold">IP Address</h1>
            <p className="text-black pt-2 text-xl md:text-3xl">{data.ip}</p>
          </div>

          <div className="relative flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="absolute inset-y-2 hidden md:block right-0 w-[1px] h-16 bg-gray-300"></div>
            <h1 className="text-gray-500 text-sm font-bold">Location</h1>
            <p className="text-black pt-2 text-xl md:text-3xl">
              {data.location?.city}, {data.location?.country}
            </p>
          </div>

          <div className="relative flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="absolute inset-y-2 hidden md:block right-0 w-[1px] h-16 bg-gray-300"></div>

            <h1 className="text-gray-500 text-sm font-bold">TimeZone</h1>
            <p className="text-black pt-2 text-xl md:text-3xl">
              UTC {data.location?.timezone}
            </p>
          </div>

          <div className="relative flex flex-col items-center md:items-start">
            <h1 className="text-gray-500 text-sm font-bold">ISP</h1>
            <p className="text-black pt-2 text-xl md:text-3xl line-clamp-2">
              {data.isp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
