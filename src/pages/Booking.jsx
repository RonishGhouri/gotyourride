import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { FaShareAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles

import i from "../assets/unkown.png";
import i1 from "../assets/87.png";
import i2 from "../assets/50.png";
import i3 from "../assets/shade-ysUOK8yPnt0-unsplash.png";
import i4 from "../assets/rui-hao-lim-VajtrJauWDQ-unsplash.png";
import i5 from "../assets/Group_427_1.png";
import i6 from "../assets/Group_427_2.png";
import i7 from "../assets/Group_427_3.png";
import i8 from "../assets/Group_427_4.png";
import i9 from "../assets/orange-line.png";
import i10 from "../assets/image_1.png";
import i11 from "../assets/image_2.png";
import i12 from "../assets/Group_1.png";
import i13 from "../assets/Group_2.png";
import i14 from "../assets/Group_3.png";
import i15 from "../assets/Group_4.png";

import tick from "../assets/tick.png";
import cross from "../assets/cross.png";

import Star from "../components/Star";

import CheckBox from "../components/CheckBox";
import Dropdown from "../components/Dropdown";
import ProgressBar from "../components/ProgressBar";
import Feedback from "../components/Feedback";
import GoBackButton from "../components/GoBackButton";

const Booking = () => {
  return (
    <>
      <div className="mt-35">
        {/* back button */}
        <GoBackButton />

        {/*  */}
        <div className="w-4/5 mx-auto mt-36 ">
          {/* title*/}
          <div className="mb-5">
            <h1 className="font-bold mb-5 text-4xl">Mt. Fuji 5th Station</h1>
            <p className=" ">
              Japan's Leading GetYourRide Service...Ready In Your One Click
            </p>
          </div>
          {/* location, share, wishlist */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* location */}
            <div className="flex gap-2 text-[#615C5D]  ">
              <NavLink className="group flex gap-2">
                <SlLocationPin className="mt-[3px] group-hover:text-[#f1582b]" />
                <p className="group-hover:text-[#f1582b]">
                  Mt. Fuji 5th Station
                </p>
              </NavLink>
              <Star />
              <p>(Reviews)</p>
            </div>
            {/* share, wishlist */}
            <div className="flex gap-3 ml-78">
              <NavLink className="flex gap-2 group">
                <FaShareAlt className="mt-1 group-hover:text-[#f1582b]" />
                <p className="group-hover:text-[#f1582b]">Share</p>
              </NavLink>
              <NavLink className="flex gap-2 group">
                <IoIosHeartEmpty className="mt-[2px] text-xl group-hover:text-[#f1582b]" />
                <p className="group-hover:text-[#f1582b]">Add To Wish List</p>
              </NavLink>
              <NavLink className="hover:text-[#f1582b] group flex gap-2">
                <div className="relative ">
                  <RiShoppingCartLine className=" text-2xl " />
                  <p className="absolute inset-0 bg-[#F1582B] rounded-full text-center group-hover:border group-hover:border-[#f1582b] group-hover:bg-white group-hover:text-[#f1582b] text-sm w-4 left-3 text-white -top-[5px] h-4 text-[11px]">
                    99
                  </p>
                </div>
                <p>Cart</p>
              </NavLink>
            </div>
          </div>
          {/* 4 images in grid */}
          <div className="grid grid-cols-4 grid-rows-2 gap-2 mt-5">
            <img
              src={i1}
              className="col-span-2 row-span-2 w-170 h-[621px]"
              alt=""
            />
            <img src={i2} className="col-span-2 row-span-1 h-76" alt="" />
            <img src={i3} className="col-span-1 row-span-1 w-full" alt="" />
            <img src={i4} className="col-span-1 row-span-1 w-full" alt="" />
          </div>
          {/* Duration, People, Language, Type and Price*/}
          <div className="flex justify-between mt-8">
            {/* Duration, People, Language, Type */}
            <div className="flex gap-4">
              <div className="flex gap-2 ">
                <img src={i5} className="w-8 h-8 mt-[2px]" alt="" />
                <div className="leading-4">
                  <p className="text-[#292929] text-[11px]">Duration </p>
                  <p>10 Hour</p>
                </div>
              </div>
              <div className="flex gap-2 ">
                <img src={i6} className="w-8 h-8 mt-[2px]" alt="" />
                <div className="leading-4">
                  <p className="text-[#292929] text-[11px]">People </p>
                  <p>1-6</p>
                </div>
              </div>
              <div className="flex gap-2 ">
                <img src={i7} className="w-8 h-8 mt-[2px]" alt="" />
                <div className="leading-4">
                  <p className="text-[#292929] text-[11px]">Language </p>
                  <p>English</p>
                </div>
              </div>
              <div className="flex gap-2 ">
                <img src={i8} className="w-8 h-8 mt-[2px]" alt="" />
                <div className="leading-4">
                  <p className="text-[#292929] text-[11px]">Type </p>
                  <p>Adventure</p>
                </div>
              </div>
            </div>
            {/* Price */}
            <p>
              <span className="text-[11px] text-[#292929] mr-2">From</span>
              <span className="font-bold">$350</span>/
              <span className="relative font-semibold">
                $500{" "}
                <img src={i9} className="absolute w-30 top-2 left-0" alt="" />
              </span>
            </p>
          </div>
        </div>
      </div>
      <hr className="mb-8 mt-8 opacity-20" />
      <div className="flex justify-between w-4/5 mx-auto">
        <div className="w-2/3">
          <div>
            <h1 className="font-bold text-2xl">Description</h1>
            <p>
              Embark on an unforgettable journey with Getyourride's private Mt.
              Fuji tour, accompanied by an expert English-speaking driver. As
              you traverse the awe-inspiring landscapes of Japan, immerse
              yourself in the rich cultural tapestry woven around the iconic Mt.
              Fuji. Your knowledgeable drivers will unveil the hidden gems and
              historical anecdotes of the region, ensuring each moment is
              steeped in discovery and wonder. From serene lakeshores to
              charming villages nestled against the majestic backdrop of Mt.
              Fuji, every stop promises breathtaking vistas and unparalleled
              photo opportunities. Whether you're a seasoned adventurer or a
              first-time visitor, this exclusive tour offers a personalized and
              enriching experience, leaving you with cherished memories of
              Japan's most celebrated natural wonder. Contact Us at +96896918676
            </p>
            <hr className="mt-8 mb-8 opacity-20" />
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-2">Trip Highlights</h1>
            <p className="font-semibold">Places covered </p>
            <CheckBox />
            <hr className="mt-8 mb-8 opacity-20" />
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-2">Include/Exclude</h1>
            <div className="flex justify-between">
              <div>
                <div className="flex gap-2  mb-2">
                  <img src={tick} alt="" />
                  <p className="text-sm">Meet and greet</p>
                </div>
                <div className="flex gap-2 mb-2">
                  <img src={tick} alt="" />
                  <p className="text-sm">English-speaking driver</p>
                </div>
                <div className="flex gap-2 mb-2">
                  <img src={tick} alt="" />
                  <p className="text-sm">Air-conditioned vehicle </p>
                </div>
                <div className="flex gap-2 mb-2">
                  <img src={tick} alt="" />
                  <p className="text-sm">Kitaguchi-hongu Fuji</p>
                </div>
                <div className="flex gap-2 mb-2">
                  <img src={tick} alt="" />
                  <p className="text-sm">with WiFi when available</p>
                </div>
              </div>
              <div className="mx-auto">
                <div className="flex gap-2  mb-2">
                  <img src={cross} alt="" />
                  <p className="text-sm">Mr fuji 5th station entry ticket</p>
                </div>
                <div className="flex gap-2 mb-2">
                  <img src={cross} alt="" />
                  <p className="text-sm">Food and drinks</p>
                </div>
                <div className="flex gap-2 mb-2">
                  <img src={cross} alt="" />
                  <p className="text-sm">Tour guide</p>
                </div>
                <div className="flex gap-2 mb-2">
                  <img src={cross} alt="" />
                  <p className="text-sm">Ropeway or moterboat ticket</p>
                </div>
                <div className="flex gap-2 mb-2">
                  <img src={cross} alt="" />
                  <p className="text-sm">
                    Saiko iyashi no nemb village entry ticket%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 ml-7 ">
          <h1 className="text-2xl font-bold mb-3">Book Your Trip</h1>
          <Dropdown />
          <hr className="opacity-20 mt-4 mb-4" />
          <div className="flex  justify-between ">
            <div>
              <p className="font-bold mt-2">People:</p>
              <p>Adult</p>
              <p>(14+ Years)</p>
            </div>
            <div className="w-1/5 mt-[50px]">
              {/* The select dropdown */}
              <select className="w-full py-[2px] px-[6px] border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-black">
                <option value="" disabled>
                  When (Date)
                </option>
                <option value="option1">0</option>
                <option value="option2">1</option>
                <option value="option3">2</option>
              </select>
            </div>
          </div>
          <hr className="opacity-20 mt-5 mb-5" />
          <p className="font-bold">Trip Information</p>
          <div className="mt-2">
            <div className="flex gap-2  mb-2">
              <img src={tick} alt="" />
              <p className="text-sm">
                <span className="font-semibold">Location:</span> Mt. Fuji 5th
                Station
              </p>
            </div>
            <div className="flex gap-2 mb-2">
              <img src={tick} alt="" />
              <p className="text-sm">
                <span className="font-semibold">Service:</span> car + driver
              </p>
            </div>
            <div className="flex gap-2 mb-2">
              <img src={tick} alt="" />
              <p className="text-sm">
                <span className="font-semibold">Duration:</span> 10 Hours
              </p>
            </div>
            <div className="flex gap-2 mb-2">
              <img src={tick} alt="" />
              <p className="text-sm">
                <span className="font-semibold">People:</span> 1-6
              </p>
            </div>
          </div>
          <div className="bg-[#F1582B] px-6 py-2 rounded-full w-2/3 ml-[114px] text-white">
            <h1 className="text-center">Add to cart</h1>
          </div>
        </div>
      </div>
      <hr className="mt-8 opacity-20" />
      <div className="flex w-4/5 mx-auto justify-between mt-10">
        <div className="w-2/8">
          <h1 className="font-bold">Itinerary</h1>
          <div className="flex mt-4 gap-2">
            <img src={i15} className="w-6" alt="" />
            <p className="text-[#f1582b] font-bold">Mt. Fuji 5th Station</p>
          </div>
          <div className="flex mt-4 gap-2">
            <img src={i14} className="w-6" alt="" />
            <p className="font-semibold">starting location</p>
          </div>
          <div className="relative ">
            <img src={i11} className="w-6  pt-6   " alt="" />
            <div className="absolute inset-0">
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-2 mb-3">
                  <img
                    src={i12}
                    className="w-6 h-6 border border-[#f1582b] rounded-full"
                    alt=""
                  />
                  <div>
                    <p>Mt. Fuji 5th Station</p>
                    <p className="opacity-64 text-[11px]">(75 minutes)</p>
                  </div>
                </div>
                <div className="flex gap-2 mb-2">
                  <img src={i13} className="w-6 h-6" alt="" />
                  <div>
                    <p>Mt. Fuji 5th Station</p>
                    <p className="opacity-64 text-[11px]">(75 minutes)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={i12} className="w-6 h-6" alt="" />
                  <div>
                    <p>Mt. Fuji 5th Station</p>
                    <p className="opacity-64 text-[11px]">(75 minutes)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={i12} className="w-6 h-6" alt="" />
                  <div>
                    <p>Mt. Fuji 5th Station</p>
                    <p className="opacity-64 text-[11px]">(75 minutes)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={i12} className="w-6 h-6" alt="" />
                  <div>
                    <p>Mt. Fuji 5th Station</p>
                    <p className="opacity-64 text-[11px]">(75 minutes)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={i12} className="w-6 h-6" alt="" />
                  <div>
                    <p>Mt. Fuji 5th Station</p>
                    <p className="opacity-64 text-[11px]">(75 minutes)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={i12} className="w-6 h-6" alt="" />
                  <div>
                    <p>Mt. Fuji 5th Station</p>
                    <p className="opacity-64 text-[11px]">(75 minutes)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={i12} className="w-6 h-6" alt="" />
                  <div>
                    <p>Mt. Fuji 5th Station</p>
                    <p className="opacity-64 text-[11px]">(75 minutes)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={i12} className="w-6 h-6" alt="" />
                  <div>
                    <p>Mt. Fuji 5th Station</p>
                    <p className="opacity-64 text-[11px]">(75 minutes)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={i10} className="w-6/8 h-[688px]" alt="" />
      </div>
      <hr className="mt-8 mb-8 opacity-20" />
      <ProgressBar />
      <hr className="mt-8 mb-8 opacity-20" />
      {/* Give Feedback Section*/}
      <Feedback />
      <Swiper
        className="w-4/5 mt-5"
        slidesPerView={4} // Number of slides visible at once
        pagination={{ clickable: true }} // Enable pagination (dots)
      >
        <SwiperSlide>
          <div className="bg-[#EAF9EB] w-[95%] h-70 px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={i} className="mx-auto w-20" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Mr John</p>
            <div className="flex justify-between">
              <p className="text-sm">booking verified 12-04-2025</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              Booked a private tour with Driver jerry for a journey from Tokyo
              to Mount Fuji with my family and it was an exceptional choice.
              Despite the clouds, the experience was nothing short of fantastic.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F9E9E9] w-[95%] h-70 px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={i} className="mx-auto w-20" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Mr John</p>
            <div className="flex justify-between">
              <p className="text-sm">booking verified 12-04-2025</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              Booked a private tour with Driver jerry for a journey from Tokyo
              to Mount Fuji with my family and it was an exceptional choice.
              Despite the clouds, the experience was nothing short of fantastic.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#EAF9EB] w-[95%] h-70 px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={i} className="mx-auto w-20" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Mr John</p>
            <div className="flex justify-between">
              <p className="text-sm">booking verified 12-04-2025</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              Booked a private tour with Driver jerry for a journey from Tokyo
              to Mount Fuji with my family and it was an exceptional choice.
              Despite the clouds, the experience was nothing short of fantastic.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F9E9E9] w-[95%] h-70 px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={i} className="mx-auto w-20" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Mr John</p>
            <div className="flex justify-between">
              <p className="text-sm">booking verified 12-04-2025</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              Booked a private tour with Driver jerry for a journey from Tokyo
              to Mount Fuji with my family and it was an exceptional choice.
              Despite the clouds, the experience was nothing short of fantastic.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#EAF9EB] w-[95%] h-70 px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={i} className="mx-auto w-20" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Mr John</p>
            <div className="flex justify-between">
              <p className="text-sm">booking verified 12-04-2025</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              Booked a private tour with Driver jerry for a journey from Tokyo
              to Mount Fuji with my family and it was an exceptional choice.
              Despite the clouds, the experience was nothing short of fantastic.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F9E9E9] w-[95%] h-70 px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={i} className="mx-auto w-20" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Mr John</p>
            <div className="flex justify-between">
              <p className="text-sm">booking verified 12-04-2025</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              Booked a private tour with Driver jerry for a journey from Tokyo
              to Mount Fuji with my family and it was an exceptional choice.
              Despite the clouds, the experience was nothing short of fantastic.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Booking;
