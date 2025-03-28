import React from "react";
import GoBackButtonWhite from "../components/GoBackButtonWhite";
import { IoChevronForwardSharp } from "react-icons/io5";

import i1 from "../assets/contact-1.png";
import i2 from "../assets/phone_1.png";
import i3 from "../assets/location.png";
import i4 from "../assets/email.png";
import i5 from "../assets/attach.png";
import i6 from "../assets/u-i.png";
import i7 from "../assets/e-i.png";
import i8 from "../assets/w-i.png";

const Contact = () => {
  return (
    <>
      {/* image section */}
      <div className="mt-30 relative">
        <img src={i1} alt="" />
        <GoBackButtonWhite className="absolute" />
        <h1 className="absolute text-white top-18 left-[44.7%] text-4xl font-bold">
          Contact Us
        </h1>
        <p className="absolute flex text-white top-29 left-[47%]">
          Home <IoChevronForwardSharp className="mt-1" /> Contact
        </p>
      </div>
      {/* cards */}
      <div className="mt-6 w-4/5 mx-auto mb-14">
        <div className="flex gap-5">
          <div className="border-2 rounded-xl border-black/20 w-1/4 h-[250px] pt-15  ">
            <img src={i3} className="mx-auto mb-[13px]  w-22" alt="" />
            <p className="text-center font-semibold">Adress</p>
            <p className="text-center text-sm">Nice Day Hotel , Japan</p>
          </div>
          <div className="border-2 rounded-xl border-black/20 w-1/4 h-[250px] pt-15 ">
            <img src={i2} className="mx-auto mb-3  w-20" alt="" />
            <p className="text-center font-semibold">Phone Number</p>
            <p className="text-center text-sm">+447453923024</p>
          </div>
          <div className="border-2 rounded-xl border-black/20 w-1/4 h-[250px] pt-15 ">
            <img src={i4} className="mx-auto mb-[13px]  w-20" alt="" />
            <p className="text-center font-semibold">Email address</p>
            <p className="text-center text-sm">gotyourride@gmail.com</p>
          </div>
          <div className="border-2 rounded-xl border-black/20 w-1/4 h-[250px] pt-15 ">
            <img src={i5} className="mx-auto mb-3  w-20 " alt="" />{" "}
            <p className="text-center font-semibold">Social Media Link</p>
            <p className="text-center text-sm">
              www.facebook.com/getyouride.jp
            </p>
          </div>
        </div>
        {/* description and contact form */}
        <div className="flex justify-between mt-12">
          {/* description */}
          <div className="w-[30%] s">
            <h1 className="text-xl font-semibold ">Get In Touch</h1>
            <p className="font-semibold">
              Contact with Us for <br /> Your Any Help
            </p>
            <p>
              We offer carefully curated destinations and tours that capture the
              true essence of location, ensuring you experience. Our attraction
              pass save you more than buying individual tickets.
            </p>
          </div>
          {/* contact form */}
          <div className="border-2 border-black/20 py-10 px-17 w-3/5 rounded-2xl">
            <h1 className="font-bold">Fill Up The Form</h1>
            <p className="">
              enter your Details to send you confirmation and updates about your
              booking
            </p>
            <div className=" mt-6">
              <div>
                <p className="opacity-61 font-semibold ml-15">Name</p>
                <div className="flex justify-between">
                  <img src={i6} className="w-15 " alt="" />
                  <input
                    type="text"
                    className="border-2 rounded-xl border-black/20 w-full px-5"
                  />
                </div>
              </div>
              <div className="mt-6">
                <p className="opacity-61 font-semibold ml-15">Email</p>
                <div className="flex justify-between">
                  <img src={i7} className="w-10 h-10  mt-3 ml-[9px]" alt="" />
                  <input
                    type="text"
                    className="border-2 rounded-xl border-black/20 w-[90.5%] px-5 h-15"
                  />
                </div>
              </div>
              <div className="mt-6">
                <p className="opacity-61 font-semibold ml-15">
                  Enter your message
                </p>
                <div className="flex justify-between">
                  <img src={i8} className="w-10 h-10 mt-3 ml-[9px]" alt="" />

                  <textarea
                    name=""
                    id=""
                    rows={5}
                    cols={60}
                    className="border-2 rounded-xl border-black/20 w-[90.5%] px-5 py-5"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="bg-[#F1582B] w-1/4 px-6 py-2 rounded-full text-white mx-auto mt-10">
              <h1 className="text-center ">Submit</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
