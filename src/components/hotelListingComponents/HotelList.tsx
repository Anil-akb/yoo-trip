import React from "react";
import DropdownComponents from "../ui/dropdown/DropDown";
import PriceRange from "../ui/priceRange/PriceRange";

type Props = {};

const HotelList = (props: Props) => {
  const dynamicDropdownItems = [
    "Popularity",
    "Ratings",
    "Price high to low",
    "Price low to high",
  ];
  return (
    <div>
      <div></div>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-2 col-span-1 border border-green-600">
          <h1 className="text-xl font-bold p-4 text-red-600">Filters</h1>
          <div>
            <PriceRange />
          </div>
        </div>
        <div className="col-span-1 border">02</div>
        <div className="row-span-3 col-span-4 ">
          <div className="border border-green-700 p-3 px-6 flex justify-between">
            <h1 className="text-xl font-bold mt-2">Hotels in Puri</h1>
            <span className="flex">
              <h1 className="items-center mt-3 mr-3 text-lg">Sort by</h1>
              <DropdownComponents dropdownItems={dynamicDropdownItems} />
            </span>
          </div>
          <div className="border mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
            laborum?
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
