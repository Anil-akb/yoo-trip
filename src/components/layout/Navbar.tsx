import React from "react";
import Link from "next/link";
import Home from "@/components/assets/modern-house.png";
import Trip from "@/components/assets/business-trip.png";
import User from "@/components/assets/user.png";
import Image from "next/image";
import Logo from '../assets/TRIP-1.png'

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="h-[8vh] px-6 top-0 bg-transparent left-0 sticky bg-white z-20 shadow">
      <div className="flex items-center h-full p-4 justify-between px-4 rounded-lg bg-opacity-40">
        <div className="flex items-center gap-10">
          <Link href={"/"}>
            <div className="  w-[70px]">
            <Image src={Logo} width={200} height={100} alt="Logo" />
            </div>
          </Link>
        </div>
        <div className="flex items-center cursor-pointer gap-10 ml-auto">
          <ul className="flex items-center p-4 font-bold gap-4">
            <li className="border flex p-[7px] rounded-md hover:border-gray-400 transition items-center">
              <span className="mr-2">
                <Image src={Home} alt={"home"} width={20} height={20} />
              </span>{" "}
              <h2 className="text-lg"> List your property</h2>
            </li>
            <li className="border flex p-[7px] rounded-md hover:border-gray-400 transition items-center">
              <span className="mr-2">
                <Image src={Trip} alt={"trip"} width={20} height={20} />
              </span>{" "}
              <h2 className="text-lg">My Trip</h2>
            </li>
            <Link href={"/login"}>
              <li className="border flex p-[7px] rounded-md hover:border-gray-400 transition items-center">
                <span className="mr-2">
                  <Image src={User} alt={"user"} width={20} height={20} />
                </span>{" "}
                <h2 className="text-lg">Login / SignUp</h2>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
