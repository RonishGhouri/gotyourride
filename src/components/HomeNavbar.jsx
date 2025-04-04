import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Got-Your-Ride-Logo-05-1.png";
import { FaEnvelope } from "react-icons/fa6";
import { IoCaretDownSharp } from "react-icons/io5";
import SocialIcons from "./SocialIcons";
import image from "../assets/phone.png";
import { GrLocation } from "react-icons/gr";

const HomeNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="top-0 zee-index w-full text-white bg ">
      {/* top side of navbar */}
      <div
        className={`px-5 sm:px-[7vw] md:px-[8vw] lg:px-[11vw] flex justify-between transition-all duration-700  py-3 items-center border-b  w-full ${
          scrolled ? "bg-[#f1582b]" : "block bg-black/30 "
        }`}
      >
        <div
          className="flex 
      gap-8 "
        >
          {/* <div className="flex gap-2 items-center">
            <FaPhoneAlt />
            +44 745 392 3024
          </div> */}
          <NavLink className="flex gap-2 items-center">
            <FaEnvelope className="mt-[1px]" />
            <p className="mt-[-4px]">gotyourride@gmail.com</p>
          </NavLink>
        </div>
        <div className="flex text-white">
          <SocialIcons />
        </div>
      </div>
      {/* bottom side of navbar */}
      <div
        className={`px-5 sm:px-[7vw] md:px-[8vw] lg:px-[11vw] transition-all duration-700 flex justify-between top-0  items-center w-full ${
          scrolled ? "bg-white text-black shadow-md" : " bg-black/30 shadow-2xl"
        } `}
      >
        <NavLink to="/">
          <img className="ml-[-8px] w-20" src={logo} alt="" />
        </NavLink>
        <div className="flex gap-11 ">
          <NavLink to="/">
            <h1>HOME</h1>
          </NavLink>
          <NavLink to="/about">
            <h1>ABOUT</h1>
          </NavLink>
          <NavLink className="group relative">
            <h1 className="flex items-center">
              DESTINATIONS <IoCaretDownSharp size={20} />
            </h1>
            <div className="group-hover:block hidden absolute pt-2">
              <div className="flex flex-col gap-2 w-57 py-3 px-5 bg-white shadow-md text-gray-500 rounded">
                <NavLink
                  to="/booking"
                  className="cursor-pointer hover:text-[#f1582b] flex gap-2"
                >
                  <GrLocation className="text-2xl text-[#f1582b]" />
                  City Tokyo
                </NavLink>
                <hr className="opacity-20" />
                <NavLink
                  to="/booking"
                  className="cursor-pointer hover:text-[#f1582b] flex gap-2"
                >
                  <GrLocation className="text-2xl text-[#f1582b]" />
                  Mt. Fuji 5th Station
                </NavLink>
                <hr className="opacity-20" />

                <NavLink
                  to="/booking"
                  className="cursor-pointer hover:text-[#f1582b] flex gap-2"
                >
                  <GrLocation className="text-2xl text-[#f1582b]" />
                  Hakone tour
                </NavLink>
                <hr className="opacity-20" />

                <NavLink
                  to="/booking"
                  className="cursor-pointer hover:text-[#f1582b] flex gap-2"
                >
                  <GrLocation className="text-2xl text-[#f1582b]" />
                  Osaka Castle
                </NavLink>
              </div>
            </div>
          </NavLink>
          <NavLink to="/contact">
            <h1>CONTACT</h1>
          </NavLink>
        </div>
        <div className=" mt-2 ">
          <div className="flex gap-2">
            <img src={image} alt="" />
            <p>+447453923024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
