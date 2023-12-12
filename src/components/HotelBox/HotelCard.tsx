import React from "react";
import date from "date-and-time";
import GuestBox from "./GuestBox";
import DateRange from "./DateRange";
import Image from "next/image";
import HeroImage from "../assets/hotel-1.jpg";

const HotelCard = () => {
  return (
    <>
      <div>
        <Image
          src={HeroImage}
          className="w-full object-cover h-[360px] opacity-90 "
          alt="Picture of the author"
        />
      </div>
      <section className="border-2 top-2/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-4">
        <div className="flex justify-center items-center gap-7">
          {/* Search Box Section */}
          <div className="rounded-md border-2">
            <input
              type="text"
              id="search"
              name="search"
              className="p-2 w-80 rounded-md focus:outline-none"
              placeholder="Search by city, hotel and location"
            />
          </div>

          {/* Date Section */}
          <div className="inline-block rounded-md border-2 w-[280px]">
            <DateRange />
          </div>

          {/* Room, Guest, Child Section */}
          <div className="inline-block rounded-md border-2 w-[200px]">
            <GuestBox />
          </div>

          <div>
            <button className="bg-[#D80032] text-xl text-white p-[6px] w-32 rounded-md">
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelCard;
