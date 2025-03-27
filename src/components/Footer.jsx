import React from "react";
import { NavLink } from "react-router-dom";
import image21 from "../assets/Group-169.png";
import image22 from "../assets/Group-174.png";
import image23 from "../assets/Group-176.png";
import image24 from "../assets/got-your-ride-logo-variation-01-1.png";
import image25 from "../assets/Group-117.png";
import image26 from "../assets/Group-118.png";
import image27 from "../assets/email-14-svgrepo-com-1.png";
import SocialIcons from "./SocialIcons.jsx";

const Footer = () => {
  return (
    <div>
      <div className="w-full  bg-[#1E1E1E] h-[450px] pt-6">
        {/* orange part */}
        <div className="flex bg-[#f1582b] w-4/5 mx-auto items-center justify-between p-5 rounded-2xl text-white font-bold">
          <NavLink className="flex gap-2">
            <img className="p-1 w-10" src={image21} alt="" />
            <p className="mt-2">Location</p>
          </NavLink>
          <NavLink className="flex gap-2">
            <img className="p-1 w-10" src={image22} alt="" />
            <p className="mt-2">Email</p>
          </NavLink>
          <NavLink className="flex gap-2">
            <img className="p-1 w-10" src={image23} alt="" />
            <p className="mt-2">Contact Us</p>
          </NavLink>
        </div>
        {/* Remainig part */}
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white mx-auto mt-6 justify-between">
          <div>
            <img src={image24} className="w-15" alt="" />
            <p className="text-sm       ">
              GetYourRide offers affordable and comfortable transportation
              throughout Japan, ensuring a pleasant journey whether you're
              exploring Tokyo's bustling streets or the serene countryside. With
              our service, you can relax and fully enjoy Japan’s unique
              ambiance.
            </p>
          </div>
          <div>
            <div className="ml-37  w-1/2">
              <h1>Contact Us</h1>
              <NavLink className="flex mt-8 gap-2">
                <img src={image25} className="w-4 h-[18px] " alt="" />
                <p className="">Location</p>
              </NavLink>
              <NavLink className="flex mt-5 gap-2">
                <img src={image26} className="w-4 h-[18px] " alt="" />
                <p className="">Contact Us</p>
              </NavLink>
              <NavLink className="flex mt-5 gap-2 mb-8">
                <img src={image27} className="w-4 h-[18px] " alt="" />
                <p className="">Email</p>
              </NavLink>
              <SocialIcons />
            </div>
          </div>
          <div>
            <div className="ml-20  ">
              <div className="ml-10">
                <h1 className="mb-8">Famous Destination</h1>
                <div className="flex flex-col gap-3">
                  <NavLink>Mt. Fuji 5th Station</NavLink>
                  <NavLink>Chureito Pagoda</NavLink>
                  <NavLink>Laka Kawagochiko </NavLink>
                  <NavLink>Osaka Castle</NavLink>
                  <NavLink>Shiten noji Tample </NavLink>
                  <NavLink>Shensekai</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="ml-37 ">
              <h1 className="mb-8">Links TO Meet Us</h1>
              <div className="flex flex-col gap-3">
                <NavLink>Home</NavLink>
                <NavLink>About Us</NavLink>
                <NavLink>Destinations</NavLink>
                <NavLink>Testimonials</NavLink>
                <NavLink>Contact Us </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
