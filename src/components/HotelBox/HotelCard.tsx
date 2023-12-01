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
      <section className="border-2 mx-44 top-96 left-56 absolute  flex justify-center items-center bg-white h-[13vh] w-200 rounded-xl ">
        <div className="flex justify-center items-center p-2 m-5 gap-7">
          {/* Search Box Section */}
          <div className=" rounded-md border-2 ">
            <input
              type="text"
              id="search"
              name="search"
              className="p-2 w-80  rounded-md focus:outline-none"
              placeholder="Search by city, hotel and location"
            />
          </div>

          {/* Date Section */}
          <div className="rounded-md border-2 p-1">
            <DateRange />
          </div>

          {/* Room, Guest, Child Section */}
          <div className="rounded-md border-2 ">
            <GuestBox />
          </div>
          <div>
            <button className=" bg-[#D80032] text-xl text-white p-[6px] w-32 rounded-md">
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelCard;
