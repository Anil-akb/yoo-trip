import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className=" ">
      {" "}
      <div className="h-[7vh]   px-6 top-0 bg-transparent left-0 py-2">
        <div className="flex items-center h-full justify-between px-4 rounded-lg bg-opacity-40">
          <div className="hidden dark:block w-[70px]"></div>
          <div className="flex items-center cursor-pointer  gap-10">
            <div className="flex items-center p-2 font-bold gap-4">
              <div className="">List your property</div>
              <div className="">My trip</div>
              <div className="cursor-pointer">{/* <Support /> */}</div>
              <div className="">login/ signup</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
