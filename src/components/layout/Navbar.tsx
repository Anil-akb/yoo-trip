import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
  
      <div className="h-[7vh] px-6 top-0 bg-transparent left-0 sticky bg-white z-50 shadow-xl ">
        <div className="flex items-center h-full   p-4 justify-between px-4 rounded-lg bg-opacity-40">
          <div className="hidden dark:block  w-[70px]">logo</div>
          <div className="flex items-center cursor-pointer  gap-10 ">
            <ul className="flex items-center p-2 font-bold gap-4 ml-auto">
              <li className="border p-[7px] rounded-md hover:border-black transition">List your property</li>
              <li className="border p-[7px] rounded-md hover:border-black transition">My trip</li>
              <li className="border p-[7px] rounded-md hover:border-black transition">Login/Signup</li>
            </ul>
          </div>
        </div>
      </div>
    
  );
};

export default Navbar;
