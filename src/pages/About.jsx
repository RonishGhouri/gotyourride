import React from "react";
import GoBackButtonWhite from "../components/GoBackButtonWhite";
import { IoChevronForwardSharp } from "react-icons/io5";
import i1 from "../assets/about-1.png";
import i2 from "../assets/solution-bulb-concept-svgrepo-com-1.png";
import i3 from "../assets/Vector-1.png";
import i4 from "../assets/china-1.png";
import i5 from "../assets/about-2.png";
import VideoPlayer from "../components/VideoPlayer";
import image from "../assets/about-image.png";
import video from "../assets/video.mp4";
import i6 from "../assets/about-card-1.png";
import i7 from "../assets/about-card-2.png";
import i8 from "../assets/about-card-3.png";
import i9 from "../assets/about-card-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles

import { TiCameraOutline } from "react-icons/ti";

const About = () => {
  return (
    <>
      {/* image section */}
      <div className="mt-30 relative">
        <img src={i1} className="h-[202px] w-screen" alt="" />
        <GoBackButtonWhite className="absolute" />
        <h1 className="absolute text-white top-18 left-[45.3%] text-4xl font-bold">
          About Us
        </h1>
        <p className="absolute flex text-white top-29 left-[47%]">
          Home <IoChevronForwardSharp className="mt-1" /> About
        </p>
      </div>
      <div className=" w-full ">
        <div className=" w-4/5 mx-auto relative">
          <h1 className="w-1/2 text-2xl font-bold">
            We Make Your Travel More <br />
            <span className="ml-25">Enjoyable</span>
          </h1>
          <p className="w-1/2 ">
            Experience the freedom of a flexible schedule and the choice of what
            you want to do and for how long you wish to do it. Relax in a
            comfortable ride in modern minivan that can seat as many as 13
            passengers. Take in the views of Mount Fuji at your leisure by using
            the private charter service for the whole duration of your trip to
            the region.
          </p>
          <img
            src={i5}
            className="absolute w-[350px] left-[53%] ze-index top-0"
            alt=""
          />
          <div className="absolute left-[53%] top-[330px] bg-[#f1582b] rounded-2xl w-[300px] pb-5 text-center text-white">
            <h1 className="text-[60px] font-bold ml-[5px] "> 20+</h1>
            <p className="text-[11px] font-bold ">YEARS OF EXPERIENCE</p>
          </div>
        </div>
        <hr className="opacity-20 mt-6 mb-6" />
        <div className=" w-4/5 mx-auto flex justify-between ">
          <div className="flex border border-black/20 h-47 w-1/2 gap-20 p-3 rounded-xl relative">
            <div className="text-center w-[45%]">
              <img src={i3} className="w-13 mt-2 mx-auto" alt="" />
              <p className="font-semibold w-4/5 mx-auto mt-2">
                Nationally wel known service provider
              </p>
              <p className="text-sm w-5/6 mx-auto">
                Welcome to our tourism ecosystem, we are here for you
              </p>
            </div>
            <div className="text-center w-[45%]">
              <img src={i2} className="w-13 mx-auto" alt="" />
              <p className="font-semibold w-4/5 mx-auto">
                Most popular booking solution provider
              </p>
              <p className="text-sm w-5/6 mx-auto">
                Welcome to our tourism ecosystem, we are here for you
              </p>
            </div>
            <div className="absolute top-[268px] left-0">
              <h1 className="font-bold text-2xl">More About Us</h1>
              <p className=" ml-1 opacity-60">Watch This Video</p>
            </div>
          </div>
          <img src={i4} className="w-[350px]" alt="" />
        </div>
      </div>

      {/* video section */}
      <VideoPlayer video={video} image={image} css={"-mt-22"} />

      {/* image slider */}
      <div className="w-4/5 mx-auto mt-12 mb-6">
        <h1 className="text-xl font-bold mb-6">Recently Posts on Instagram</h1>
        <Swiper
          spaceBetween={12}
          slidesPerView={4} // Number of slides visible at once
          pagination={{ clickable: true }} // Enable pagination (dots)
        >
          <SwiperSlide className="group relative">
            <img src={i6} className=" " alt="" />
            <div className="bg-[#f1582b]/20 group-hover:block hidden transition-all duration-300 rounded-md top-0 ease-out absolute w-full h-full">
              <TiCameraOutline className=" text-9xl mx-auto text-[#f1582b]  mt-[23%] " />
            </div>
          </SwiperSlide>
          <SwiperSlide className="group relative">
            <img src={i7} className=" " alt="" />
            <div className="bg-[#f1582b]/20 group-hover:block hidden transition-all duration-300 rounded-md top-0 ease-out absolute w-full h-full">
              <TiCameraOutline className=" text-9xl mx-auto text-[#f1582b]  mt-[23%] " />
            </div>
          </SwiperSlide>
          <SwiperSlide className="group relative">
            <img src={i8} className=" " alt="" />
            <div className="bg-[#f1582b]/20 group-hover:block hidden transition-all duration-300 rounded-md top-0 ease-out absolute w-full h-full">
              <TiCameraOutline className=" text-9xl mx-auto text-[#f1582b]  mt-[23%] " />
            </div>
          </SwiperSlide>
          <SwiperSlide className="group relative">
            <img src={i9} className=" " alt="" />
            <div className="bg-[#f1582b]/20 group-hover:block hidden transition-all duration-300 rounded-md top-0 ease-out absolute w-full h-full">
              <TiCameraOutline className=" text-9xl mx-auto text-[#f1582b]  mt-[23%] " />
            </div>
          </SwiperSlide>
          <SwiperSlide className="group relative">
            <img src={i6} className=" " alt="" />
            <div className="bg-[#f1582b]/20 group-hover:block hidden transition-all duration-300 rounded-md top-0 ease-out absolute w-full h-full">
              <TiCameraOutline className=" text-9xl mx-auto text-[#f1582b]  mt-[23%] " />
            </div>
          </SwiperSlide>
          <SwiperSlide className="group relative">
            <img src={i7} className=" " alt="" />
            <div className="bg-[#f1582b]/20 group-hover:block hidden transition-all duration-300 rounded-md top-0 ease-out absolute w-full h-full">
              <TiCameraOutline className=" text-9xl mx-auto text-[#f1582b]  mt-[23%] " />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default About;
