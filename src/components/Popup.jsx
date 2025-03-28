import React, { useState, useEffect } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles

import Star from "./Star";
import { NavLink } from "react-router-dom";
import image from "../assets/image.png";
import video from "../assets/video.mp4";

import image1 from "../assets/unsplash.png";
import i1 from "../assets/destination-icon-01-1.png";
import i2 from "../assets/suitcase-packages-01-1.png";
import i3 from "../assets/satisfaction-gauranette-01-1.png";
import i4 from "../assets/expert-01-1.png";
import i5 from "../assets/fuji-mountain-image-1.png";
import i6 from "../assets/Group-286.png";
import i7 from "../assets/clock-icon-01.png";
import i8 from "../assets/user-icon-01.png";
import i10 from "../assets/solution-bulb-concept-svgrepo-com-1.png";

import image2 from "../assets/image-1.png";
import image3 from "../assets/image-2.png";
import image4 from "../assets/image-3.png";
import image5 from "../assets/image-4.png";
import image6 from "../assets/image-5.png";
import image7 from "../assets/image-6.png";

import image8 from "../assets/autumn-season-mountain-fuji-kawaguchiko-lake-japan.png";
import image9 from "../assets/matsumoto-castle-osaka-japan.png";
import image10 from "../assets/beautiful-shot-red-construction-water-with-human-silhouettes-looking-it.png";
import image11 from "../assets/image-8.png";
import image12 from "../assets/image-9.png";
import image13 from "../assets/image-10.png";

import image17 from "../assets/nick-night-6ckbKRjydSw-unsplash.png";
import image18 from "../assets/SVGRepo_iconCarrier_1.png";
import image19 from "../assets/SVGRepo_iconCarrier_2.png";
import image20 from "../assets/SVGRepo_iconCarrier_3.png";
import image21 from "../assets/image-21.png";
import image22 from "../assets/image-22.png";
import image23 from "../assets/image-23.png";
import image24 from "../assets/SVGRepo_iconCarrier_4.png";
import image25 from "../assets/SVGRepo_iconCarrier_5.png";
import image26 from "../assets/SVGRepo_iconCarrier_6.png";
import image27 from "../assets/image_4.png";
import image28 from "../assets/image_5.png";
import image29 from "../assets/image_6.png";

import { CiHeart } from "react-icons/ci";
import VideoPlayer from "./VideoPlayer";

const Popup = () => {
  // Effect to disable/enable body scroll when modal is opened/closed

  return (
    <div>
      <div className="bg-white ron top-[670px] mx-auto  pl-18 pr-4  w-4/5 h-6/12 border border-white flex absolute inset-0 items-center justify-between shadow-2xl">
        <div className="flex flex-col gap-4 py-3">
          <h3 className="border-b border-b-[#DDDDDD] w-80 font-bold flex gap-2 py-3 hover:text-[#F1582B] cursor-pointer">
            <img className="ml-4" src={i1} alt="" />
            MOST POPULAR DESTINATIONS
          </h3>
          <h3 className="border-b border-b-[#DDDDDD] w-80 font-bold flex gap-2 py-3 hover:text-[#F1582B] cursor-pointer">
            <img className="ml-4" src={i2} alt="" />
            BUDGET FRIENDLY PACKAGES
          </h3>
          <h3 className="border-b border-b-[#DDDDDD] w-80 font-bold flex gap-2 py-3 hover:text-[#F1582B] cursor-pointer">
            <img className="ml-4" src={i3} alt="" />
            SATISFACTION GAURANTEED
          </h3>
          <h3 className=" w-80 font-bold flex gap-2 py-3 hover:text-[#F1582B] cursor-pointer">
            <img className="ml-4 w-6" src={i4} alt="" />
            EXPERIENCED TRAVEL EXPERTS
          </h3>
        </div>
        <div className="flex w-5/8 gap-8">
          <img
            className="border border-white rounded-3xl w-70"
            src={i5}
            alt=""
          />
          <div className="">
            <h3 className=" w-80 font-bold flex gap-2 py-3 ">
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
      </div>
      {/* ///////// */}
      {/* next part */}
      {/* ///////// */}
      {/* title */}
      <div className="text-center  mb-10 mt-[350px]">
        <p className="text-[#F1582B] ">Let’s Explore the World</p>
        <h1 className="font-bold text-4xl">
          Top Experiences on the <br />
          Got Your Guide
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto gap-5">
        <div className=" rounded-2xl shadow-2xl hover:shadow-[var(--custom-property)]">
          {/* image 2*/}
          <div className="relative">
            <img src={image2} alt="" />
            <div className="absolute inset-0 top-6 ">
              <div className="flex justify-between items-center">
                <div className="bg-[#F1582B] px-3 py-2 h-9 rounded-full ml-6 text-white cursor-pointer">
                  Featured
                </div>
                <CiHeart
                  size={30}
                  className="bg-white text-[#F1582B] mr-6 rounded-full p-1 cursor-pointer hover:bg-[#F1582B] hover:text-white"
                />
              </div>
            </div>
          </div>
          {/* text part */}
          <div className="px-6 pb-6">
            <div className="flex justify-between py-2 text-[11px] font-semibold">
              <p className="flex gap-2">
                <img src={i7} className="w-[13px] h-[13px] mt-[2px]" alt="" />
                10 Hours
              </p>
              <p className="flex gap-2">
                <img src={i8} className="w-[11px] h-[11px] mt-[2px]" alt="" />
                1-6 Guest
              </p>
            </div>
            <p className="font-semibold text-xl ">
              Private Mountain Fuji Sightseeing Tour
            </p>
            <p className="pl-4 py-2">Mt. Fuji 5th Station</p>
            <p className="text-[11px]">
              From &nbsp;&nbsp;<span className="font-extrabold">$300 </span>
              <span className="text-[#FF0303] font-semibold">$500</span>
            </p>
          </div>
        </div>
        <div className=" rounded-2xl shadow-2xl hover:shadow-[var(--custom-property)]">
          {/* image 3*/}
          <div className="relative">
            <img src={image3} alt="" />
            <div className="absolute inset-0 top-6 ">
              <div className="flex justify-between items-center">
                <div className="bg-[#F1582B] px-3 py-2 h-9 rounded-full ml-6 text-white cursor-pointer">
                  Featured
                </div>
                <CiHeart
                  size={30}
                  className="bg-white text-[#F1582B] mr-6 rounded-full p-1 cursor-pointer hover:bg-[#F1582B] hover:text-white"
                />
              </div>
            </div>
          </div>
          {/* text part */}
          <div className="px-6 pb-6">
            <div className="flex justify-between py-2 text-[11px] font-semibold">
              <p className="flex gap-2">
                <img src={i7} className="w-[13px] h-[13px] mt-[2px]" alt="" />
                10 Hours
              </p>
              <p className="flex gap-2">
                <img src={i8} className="w-[11px] h-[11px] mt-[2px]" alt="" />
                1-6 Guest
              </p>
            </div>
            <p className="font-semibold text-xl ">
              Private Mountain Fuji Sightseeing Tour
            </p>
            <p className="pl-4 py-2">Chureito Pagoda</p>
            <p className="text-[11px]">
              From &nbsp;&nbsp;<span className="font-extrabold">$300 </span>
              <span className="text-[#FF0303] font-semibold">$500</span>
            </p>
          </div>
        </div>
        <div className=" rounded-2xl shadow-2xl hover:shadow-[var(--custom-property)]">
          {/* image 4*/}
          <div className="relative">
            <img src={image4} alt="" />
            <div className="absolute inset-0 top-6 ">
              <div className="flex justify-between items-center">
                <div className="bg-[#F1582B] px-3 py-2 h-9 rounded-full ml-6 text-white cursor-pointer">
                  Featured
                </div>
                <CiHeart
                  size={30}
                  className="bg-white text-[#F1582B] mr-6 rounded-full p-1 cursor-pointer hover:bg-[#F1582B] hover:text-white"
                />
              </div>
            </div>
          </div>
          {/* text part */}
          <div className="px-6 pb-6">
            <div className="flex justify-between py-2 text-[11px] font-semibold">
              <p className="flex gap-2">
                <img src={i7} className="w-[13px] h-[13px] mt-[2px]" alt="" />
                10 Hours
              </p>
              <p className="flex gap-2">
                <img src={i8} className="w-[11px] h-[11px] mt-[2px]" alt="" />
                1-6 Guest
              </p>
            </div>
            <p className="font-semibold text-xl ">
              Private Mountain Fuji Sightseeing Tour
            </p>
            <p className="pl-4 py-2">Laka Kawagochiko </p>
            <p className="text-[11px]">
              From &nbsp;&nbsp;<span className="font-extrabold">$300 </span>
              <span className="text-[#FF0303] font-semibold">$500</span>
            </p>
          </div>
        </div>
        <div className=" rounded-2xl shadow-2xl hover:shadow-[var(--custom-property)]">
          {/* image 5*/}
          <div className="relative">
            <img src={image5} alt="" />
            <div className="absolute inset-0 top-6 ">
              <div className="flex justify-between items-center">
                <div className="bg-[#F1582B] px-3 py-2 h-9 rounded-full ml-6 text-white cursor-pointer">
                  Featured
                </div>
                <CiHeart
                  size={30}
                  className="bg-white text-[#F1582B] mr-6 rounded-full p-1 cursor-pointer hover:bg-[#F1582B] hover:text-white"
                />
              </div>
            </div>
          </div>
          {/* text part */}
          <div className="px-6 pb-6">
            <div className="flex justify-between py-2 text-[11px] font-semibold">
              <p className="flex gap-2">
                <img src={i7} className="w-[13px] h-[13px] mt-[2px]" alt="" />
                10 Hours
              </p>
              <p className="flex gap-2">
                <img src={i8} className="w-[11px] h-[11px] mt-[2px]" alt="" />
                1-6 Guest
              </p>
            </div>
            <p className="font-semibold text-xl ">
              Private Mountain Fuji Sightseeing Tour
            </p>
            <p className="pl-4 py-2">Osaka Castle</p>
            <p className="text-[11px]">
              From &nbsp;&nbsp;<span className="font-extrabold">$300 </span>
              <span className="text-[#FF0303] font-semibold">$500</span>
            </p>
          </div>
        </div>
        <div className=" rounded-2xl shadow-2xl hover:shadow-[var(--custom-property)]">
          {/* image 6*/}
          <div className="relative">
            <img src={image6} alt="" />
            <div className="absolute inset-0 top-6 ">
              <div className="flex justify-between items-center">
                <div className="bg-[#F1582B] px-3 py-2 h-9 rounded-full ml-6 text-white cursor-pointer">
                  Featured
                </div>
                <CiHeart
                  size={30}
                  className="bg-white text-[#F1582B] mr-6 rounded-full p-1 cursor-pointer hover:bg-[#F1582B] hover:text-white"
                />
              </div>
            </div>
          </div>
          {/* text part */}
          <div className="px-6 pb-6">
            <div className="flex justify-between py-2 text-[11px] font-semibold">
              <p className="flex gap-2">
                <img src={i7} className="w-[13px] h-[13px] mt-[2px]" alt="" />
                10 Hours
              </p>
              <p className="flex gap-2">
                <img src={i8} className="w-[11px] h-[11px] mt-[2px]" alt="" />
                1-6 Guest
              </p>
            </div>
            <p className="font-semibold text-xl ">
              Private Mountain Fuji Sightseeing Tour
            </p>
            <p className="pl-4 py-2">Shiten noji Tample</p>
            <p className="text-[11px]">
              From &nbsp;&nbsp;<span className="font-extrabold">$300 </span>
              <span className="text-[#FF0303] font-semibold">$500</span>
            </p>
          </div>
        </div>
        <div className=" rounded-2xl shadow-2xl hover:shadow-[var(--custom-property)]">
          {/* image 7*/}
          <div className="relative">
            <img src={image7} alt="" />
            <div className="absolute inset-0 top-6 ">
              <div className="flex justify-between items-center">
                <div className="bg-[#F1582B] px-3 py-2 h-9 rounded-full ml-6 text-white cursor-pointer">
                  Featured
                </div>
                <CiHeart
                  size={30}
                  className="bg-white text-[#F1582B] mr-6 rounded-full p-1 cursor-pointer hover:bg-[#F1582B] hover:text-white"
                />
              </div>
            </div>
          </div>
          {/* text part */}
          <div className="px-6 pb-6">
            <div className="flex justify-between py-2 text-[11px] font-semibold">
              <p className="flex gap-2">
                <img src={i7} className="w-[13px] h-[13px] mt-[2px]" alt="" />
                10 Hours
              </p>
              <p className="flex gap-2">
                <img src={i8} className="w-[11px] h-[11px] mt-[2px]" alt="" />
                1-6 Guest
              </p>
            </div>
            <p className="font-semibold text-xl ">
              Private Mountain Fuji Sightseeing Tour
            </p>
            <p className="pl-4 py-2">Shensekai</p>
            <p className="text-[11px]">
              From &nbsp;&nbsp;<span className="font-extrabold">$300 </span>
              <span className="text-[#FF0303] font-semibold">$500</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-4/5  flex mt-[80px]  items-center mx-auto ">
        <div className="w-[350px] relative mx-auto ">
          <img
            src={image1}
            className="w-[350px] h-[430px]  rounded-4xl"
            alt=""
          />
          <div className="absolute rounded-2xl bg-[#F1582B] inset-0 w-28 h-28 top-[300px] left-[220px] text-center text-white">
            <p className="mt-6 font-bold text-4xl">05+</p>
            <p className="text-[8px] mt-3">YEARS OF EXPERIENCE</p>
          </div>
        </div>
        <div className="w-5/8  ">
          <div className="ml-14">
            <p className="text-[#F1582B] ">Let’s Explore the World</p>
            <h1 className="font-bold text-3xl w-full">
              We Make Your Travel More Enjoyable
            </h1>
            <p className=" mt-5 w-[700px]">
              Experience the freedom of a flexible schedule and the choice of
              what you want to do and for how long you wish to do it. Relax in a
              comfortable ride in modern minivanthat can seat as many as 13
              passengers. Take in the views of Mount Fuji at your leisure by
              using the private charter service for the whole duration of your
              trip to the region.
            </p>
            <div className="flex mt-3 gap-29">
              <h3 className="w-80 font-semibold  flex gap-2 py-3">
                <img className="w-[48px] h-[48px] -mt-1" src={i6} alt="" />
                Nationaly wel known <br /> service provider
              </h3>
              <h3 className="w-80 font-semibold  flex gap-2 py-3">
                <img className="w-[48px] h-[48px] -mt-1" src={i10} alt="" />
                Most popular booking <br /> solution provider
              </h3>
            </div>
            <p className="flex ">
              <BiChevronsRight className="mt-1 " />
              Free cancellation: Cancel up to 24 hours in advance for a full
              refund
            </p>
            <p className="flex mt-1 ">
              <BiChevronsRight className="mt-1" />
              Hand picked premium Accommodations that guarantee comfort and
              relaxation.
            </p>
            <p className="flex mt-1 pb-9">
              <BiChevronsRight className="mt-1" />
              Dedicated 24/7 support team ready to assist you at any moment.
            </p>
            <NavLink className="bg-[#F1582B] px-3 py-2 rounded-full mt-7 text-white">
              Book Now
            </NavLink>
          </div>
        </div>
      </div>
      {/* ///////// */}
      {/* next part */}
      {/* ///////// */}
      {/* title */}
      <div className="text-center mt-40 mb-10">
        <p className="text-[#F1582B] ">Search place Near You</p>
        <h1 className="font-bold text-4xl">
          Know About Our Famous Distination
        </h1>
      </div>
      <div className="w-4/5 mx-auto ">
        <Swiper
          spaceBetween={50} // Space between slides
          slidesPerView={2} // Number of slides visible at once
          pagination={{ clickable: true }} // Enable pagination (dots)
        >
          <SwiperSlide>
            <div className="relative">
              <img src={image8} alt="" />
              <div className="flex absolute bg-white shadow-2xl p-4 px-6 bottom-14 w-11/16 left-18 leading-6 rounded-2xl items-center ">
                Private Mountain fuji sightseeing tour
                <HiOutlineArrowUpRight
                  className="hover:bg-[#F1582B]  p-1 w-[34px] rounded-full hover:text-white bg-white border border-[#f1582b] text-[#f1582b]"
                  size={30}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={image9} alt="" />
              <div className="flex absolute bg-white shadow-2xl p-4 px-6 bottom-14 w-11/16 left-18 leading-6 rounded-2xl items-center ">
                Private Mountain fuji sightseeing tour
                <HiOutlineArrowUpRight
                  className="hover:bg-[#F1582B]  p-1 w-[34px] rounded-full hover:text-white bg-white border border-[#f1582b] text-[#f1582b]"
                  size={30}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={image10} alt="" />
              <div className="flex absolute bg-white shadow-2xl p-4 px-6 bottom-14 w-11/16 left-18 leading-6 rounded-2xl items-center ">
                Private Mountain fuji sightseeing tour
                <HiOutlineArrowUpRight
                  className="hover:bg-[#F1582B]  p-1 w-[34px] rounded-full hover:text-white bg-white border border-[#f1582b] text-[#f1582b]"
                  size={30}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={image11} alt="" />
              <div className="flex absolute bg-white shadow-2xl p-4 px-6 bottom-14 w-11/16 left-18 leading-6 rounded-2xl items-center ">
                Private Mountain fuji sightseeing tour
                <HiOutlineArrowUpRight
                  className="hover:bg-[#F1582B]  p-1 w-[34px] rounded-full hover:text-white bg-white border border-[#f1582b] text-[#f1582b]"
                  size={30}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={image12} alt="" />
              <div className="flex absolute bg-white shadow-2xl p-4 px-6 bottom-14 w-11/16 left-18 leading-6 rounded-2xl items-center ">
                Private Mountain fuji sightseeing tour
                <HiOutlineArrowUpRight
                  className="hover:bg-[#F1582B]  p-1 w-[34px] rounded-full hover:text-white bg-white border border-[#f1582b] text-[#f1582b]"
                  size={30}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={image12} alt="" />
              <div className="flex absolute bg-white shadow-2xl p-4 px-6 bottom-14 w-11/16 left-18 leading-6 rounded-2xl items-center ">
                Private Mountain fuji sightseeing tour
                <HiOutlineArrowUpRight
                  className="hover:bg-[#F1582B]  p-1 w-[34px] rounded-full hover:text-white bg-white border border-[#f1582b] text-[#f1582b]"
                  size={30}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* ///////// */}
      {/* next part */}
      {/* ///////// */}
      {/* title */}
      <div className="text-center mt-40 mb-10">
        <p className="text-[#F1582B] ">Reason Why Choose Us</p>
        <h1 className="font-bold text-4xl">Why Choose Us</h1>
      </div>
      <div className="w-4/5 mx-auto">
        <img src={image17} alt="" />
      </div>
      {/* ///////// */}
      {/* next part */}
      {/* ///////// */}
      <div className=" w-4/5 mx-auto mt-16">
        <Swiper
          spaceBetween={50} // Space between slides
          slidesPerView={3} // Number of slides visible at once
          pagination={{ clickable: true }} // Enable pagination (dots)
        >
          <SwiperSlide>
            <div className="bg-[#FCE8DF] rounded-2xl pb-7 px-1 flex flex-col items-center">
              <div className="mt-3  w-1/2 h-[120px]">
                <img src={image18} className="mx-auto pt-3" alt="" />
              </div>
              <h1 className=" text-center mt-8 font-bold  ">
                Experienced Travel Experts
              </h1>
              <p className="mx-auto w-4/6 mt-5 text-sm h-[120px]  ">
                Rely on our knowledgeable travel agents to create the perfect
                journey tailored just for you.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FCE8DF] rounded-2xl pb-7 px-1 flex flex-col items-center">
              <div className="mt-3   w-1/2 h-[120px]">
                <img src={image20} className="mx-auto pt-6" alt="" />
              </div>
              <h1 className=" text-center mt-8 font-bold  ">
                Effortless Booking Made Simple
              </h1>
              <p className="mx-auto w-4/6 mt-5 text-sm h-[120px]  ">
                Our easy-to-use booking platform makes planning your ideal trip
                to Japan a breeze, so you can focus on enjoying the journey from
                the start
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FCE8DF] rounded-2xl pb-7 px-1 flex flex-col items-center">
              <div className="mt-3  w-1/2 h-[120px]">
                <img src={image19} className="mx-auto pt-4" alt="" />
              </div>
              <h1 className=" text-center mt-8 font-bold  ">
                Local Guide Services
              </h1>
              <p className="mx-auto w-4/6 mt-5 text-sm h-[120px]  ">
                Professional local guides for city tours, nature excursions, or
                cultural experiences. Multi-lingual guides.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FCE8DF] rounded-2xl pb-7 px-1 flex flex-col items-center">
              <div className="mt-3  w-1/2 h-[120px]">
                <img src={image24} className="mx-auto pt-6" alt="" />
              </div>
              <h1 className=" text-center mt-8 font-bold  ">
                Complete Travel Security
              </h1>
              <p className="mx-auto w-4/6 mt-5 text-sm h-[120px]  ">
                Your safety and peace of mind are our top priorities, ensuring
                that your journey is fully protected at all times
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FCE8DF] rounded-2xl pb-7 px-1 flex flex-col items-center">
              <div className="mt-3   w-1/2 h-[120px]">
                <img src={image25} className="mx-auto pt-7" alt="" />
              </div>
              <h1 className=" text-center mt-8 font-bold  ">
                Travel Insurance
              </h1>
              <p className="mx-auto w-4/6 mt-5 text-sm h-[120px]  ">
                Offering travel insurance packages that cover health, lost
                luggage, trip cancellations
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FCE8DF] rounded-2xl pb-7 px-1 flex flex-col items-center">
              <div className="mt-3  w-1/2 h-[120px]">
                <img src={image26} className="mx-auto pt-7" alt="" />
              </div>
              <h1 className=" text-center mt-8 font-bold  ">
                Recommendations Restaurants
              </h1>
              <p className="mx-auto w-4/6 mt-5 text-sm h-[120px]  ">
                During your travel Reservations at local restaurants
                Availability to create your journey happy.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      ;{/* ///////// */}
      {/* next part */}
      {/* ///////// */}
      {/* title */}
      <div className="text-center mt-30 mb-10">
        <h1 className="font-bold text-4xl">View Famous Site</h1>
      </div>
      <VideoPlayer image={image} video={video} />
      {/* ///////// */}
      {/* next part */}
      {/* ///////// */}
      <div className="text-center mt-40 mb-10">
        <h1 className="font-bold text-4xl">What Our Customers Say</h1>
      </div>
      <Swiper
        className="w-4/5 "
        slidesPerView={4} // Number of slides visible at once
        pagination={{ clickable: true }} // Enable pagination (dots)
      >
        <SwiperSlide>
          <div className="bg-[#D8F4DA] w-[95%] px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={image21} className="mx-auto w-50" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Name.......</p>
            <div className="flex justify-between">
              <p className="text-sm">United Kingdom</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              A travel agency is a business that facilitates travel arrangements
              for individuals or groups, acting as an intermediary between
              travelers and various travel suppliers like airlines, hotels, and
              cruise lines. They offer a range of services, from booking flights
              and accommodations to creating customized itineraries
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FFE2CE] w-[95%] px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={image22} className="mx-auto w-50" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Name.......</p>
            <div className="flex justify-between">
              <p className="text-sm">United Kingdom</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              A travel agency is a business that facilitates travel arrangements
              for individuals or groups, acting as an intermediary between
              travelers and various travel suppliers like airlines, hotels, and
              cruise lines. They offer a range of services, from booking flights
              and accommodations to creating customized itineraries
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F1D4D4] w-[95%] px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={image23} className="mx-auto w-50" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Name.......</p>
            <div className="flex justify-between">
              <p className="text-sm">United Kingdom</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              A travel agency is a business that facilitates travel arrangements
              for individuals or groups, acting as an intermediary between
              travelers and various travel suppliers like airlines, hotels, and
              cruise lines. They offer a range of services, from booking flights
              and accommodations to creating customized itineraries
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#D9D9D9] w-[95%] px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={image27} className="mx-auto w-50" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Name.......</p>
            <div className="flex justify-between">
              <p className="text-sm">United Kingdom</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              A travel agency is a business that facilitates travel arrangements
              for individuals or groups, acting as an intermediary between
              travelers and various travel suppliers like airlines, hotels, and
              cruise lines. They offer a range of services, from booking flights
              and accommodations to creating customized itineraries
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#D8F4DA] w-[95%] px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={image28} className="mx-auto w-50" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Name.......</p>
            <div className="flex justify-between">
              <p className="text-sm">United Kingdom</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              A travel agency is a business that facilitates travel arrangements
              for individuals or groups, acting as an intermediary between
              travelers and various travel suppliers like airlines, hotels, and
              cruise lines. They offer a range of services, from booking flights
              and accommodations to creating customized itineraries
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FFE2CE] w-[95%] px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={image29} className="mx-auto w-50" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Name.......</p>
            <div className="flex justify-between">
              <p className="text-sm">United Kingdom</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              A travel agency is a business that facilitates travel arrangements
              for individuals or groups, acting as an intermediary between
              travelers and various travel suppliers like airlines, hotels, and
              cruise lines. They offer a range of services, from booking flights
              and accommodations to creating customized itineraries
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Popup;
