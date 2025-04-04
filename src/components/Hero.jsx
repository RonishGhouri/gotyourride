import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Hero = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);

  // Previous slide function
  const previous = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  // Next slide function
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const interval = setInterval(next, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, [curr]);

  return (
    <>
      <div className="overflow-hidden h-screen relative">
        <div
          className="flex transition-transform ease-in-out duration-100"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {slide}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-6">
        <button
          onClick={previous}
          className="p-3 rounded-full shadow bg-white/90 hover:bg-white"
        >
          <FaArrowLeftLong size={19} />
        </button>
        <button
          onClick={next}
          className="p-3 rounded-full shadow bg-white/90 hover:bg-white"
        >
          <FaArrowRightLong size={19} />
        </button>
      </div>
      <div className="absolute inset-0 flex flex-col left-64 top-[270px] text-white w-5/12">
        <h1 className="text-5xl font-extrabold montserrat-title ">
          A MESMERIZING SUNSET OVER MT.FUJI, JAPAN
        </h1>
        <p>
          A Mesmerizing Sunset Over Mt. Fuji, Japan, Bathes The Iconic Peak In A
          Golden Glow, Creating A Serene And Breathtaking View.
        </p>
        <div className="flex mt-20 gap-5">
          <NavLink className="bg-[#F1582B] px-6 py-2 rounded-full text-white border border-[#f1582b] hover:border-[#f1582b] hover:text-[#f1582b] hover:bg-white">
            <h1>BOOK NOW</h1>
          </NavLink>
          <NavLink className="border px-6 py-2 rounded-full text-white hover:text-[#f1582b] hover:bg-white">
            <h1>MORE INFO</h1>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Hero;
