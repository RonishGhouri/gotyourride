import React, { useState } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import i1 from "../assets/destination-icon-01-1.png";
import i2 from "../assets/suitcase-packages-01-1.png";
import i3 from "../assets/satisfaction-gauranette-01-1.png";
import i4 from "../assets/expert-01-1.png";
import i5 from "../assets/fuji-mountain-image-1.png";

const HighIndexComponent = () => {
  const [currentComponent, setCurrentComponent] = useState(1);
  const handleCurrentComponent = (pointer) => {
    setCurrentComponent(pointer);
  };
  return (
    <div className="bg-white ron top-[670px] mx-auto  pl-18 pr-4  w-4/5 h-6/12 border border-white flex absolute inset-0 items-center justify-between shadow-2xl">
      <div className="flex flex-col gap-4 py-3">
        <h3
          onClick={() => handleCurrentComponent(1)}
          className="border-b border-b-[#DDDDDD] w-80 font-bold flex gap-2 py-3 hover:text-[#F1582B] cursor-pointer"
        >
          <img className="ml-4" src={i1} alt="" />
          MOST POPULAR DESTINATIONS
        </h3>
        <h3
          onClick={() => handleCurrentComponent(2)}
          className="border-b border-b-[#DDDDDD] w-80 font-bold flex gap-2 py-3 hover:text-[#F1582B] cursor-pointer"
        >
          <img className="ml-4" src={i2} alt="" />
          BUDGET FRIENDLY PACKAGES
        </h3>
        <h3
          onClick={() => handleCurrentComponent(3)}
          className="border-b border-b-[#DDDDDD] w-80 font-bold flex gap-2 py-3 hover:text-[#F1582B] cursor-pointer"
        >
          <img className="ml-4" src={i3} alt="" />
          SATISFACTION GAURANTEED
        </h3>
        <h3
          onClick={() => handleCurrentComponent(4)}
          className=" w-80 font-bold flex gap-2 py-3 hover:text-[#F1582B] cursor-pointer"
        >
          <img className="ml-4 w-6" src={i4} alt="" />
          EXPERIENCED TRAVEL EXPERTS
        </h3>
      </div>
      {currentComponent === 1 && (
        <div className="flex w-5/8 gap-8">
          <img
            className="border border-white rounded-3xl w-70 h-82"
            src={i5}
            alt=""
          />
          <div className="">
            <h3 className=" w-80 font-bold flex gap-2 py-3 text-[#f1582b]">
              MOST POPULAR DESTINATIONS
            </h3>
            <p className="w-90 mb-2">
              Explore the worldwide destinations which are the most preferred by
              people, including amazing natural beauties as well as lively urban
              scenery. Get to see the famous places, be a part of different
              cultures, and record the most special memories of your life during
              the journey.
            </p>
            <p className="flex">
              <BiChevronsRight className="mt-1" />
              Mount Fuji
            </p>
            <p className="flex mb-6">
              <BiChevronsRight className="mt-1" />
              Tokyo
            </p>
            <NavLink className="bg-[#F1582B] px-3 py-2 rounded-full text-white">
              Book Now
            </NavLink>
          </div>
        </div>
      )}

      {currentComponent === 2 && (
        <div className="flex w-5/8 gap-8">
          <img
            className="border border-white rounded-3xl w-70 h-82"
            src={i5}
            alt=""
          />
          <div className="">
            <h3 className=" w-80 font-bold flex gap-2 py-3 text-[#f1582b]">
              BUDGET FRIENDLY PACKAGES
            </h3>
            <p className="w-90 mb-2">Ronish</p>
            <p className="flex">
              <BiChevronsRight className="mt-1" />
              Mount Fuji
            </p>
            <p className="flex mb-6">
              <BiChevronsRight className="mt-1" />
              Tokyo
            </p>
            <NavLink className="bg-[#F1582B] px-3 py-2 rounded-full text-white">
              Book Now
            </NavLink>
          </div>
        </div>
      )}
      {currentComponent === 3 && (
        <div className="flex w-5/8 gap-8">
          <img
            className="border border-white rounded-3xl w-70 h-82"
            src={i5}
            alt=""
          />
          <div className="">
            <h3 className=" w-80 font-bold flex gap-2 py-3 text-[#f1582b]">
              SATISFACTION GAURANTEED
            </h3>
            <p className="w-90 mb-2">Ghouri</p>
            <p className="flex">
              <BiChevronsRight className="mt-1" />
              Mount Fuji
            </p>
            <p className="flex mb-6">
              <BiChevronsRight className="mt-1" />
              Tokyo
            </p>
            <NavLink className="bg-[#F1582B] px-3 py-2 rounded-full text-white">
              Book Now
            </NavLink>
          </div>
        </div>
      )}
      {currentComponent === 4 && (
        <div className="flex w-5/8 gap-8">
          <img
            className="border border-white rounded-3xl w-70 h-82"
            src={i5}
            alt=""
          />
          <div className="">
            <h3 className=" w-80 font-bold flex gap-2 py-3 text-[#f1582b]">
              EXPERIENCED TRAVEL EXPERTS
            </h3>
            <p className="w-90 mb-2">Ronish Emanual</p>
            <p className="flex">
              <BiChevronsRight className="mt-1" />
              Mount Fuji
            </p>
            <p className="flex mb-6">
              <BiChevronsRight className="mt-1" />
              Tokyo
            </p>
            <NavLink className="bg-[#F1582B] px-3 py-2 rounded-full text-white">
              Book Now
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default HighIndexComponent;
