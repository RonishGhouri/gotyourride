import React from "react";
import { InputPhoneCountryCode } from "./InputPhoneCountryCode";
import i1 from "../assets/back_icon.png";
import i2 from "../assets/copies.png";
import i3 from "../assets/flagg.png";
import i4 from "../assets/sunn.png";

const ContactDetail = () => {
  return (
    <div className="w-4/5 mx-auto mb-6 flex gap-5">
      {/* contact detail form section */}
      <div className="border border-black/20 w-5/7 p-10 rounded-2xl ">
        <h1 className="text-xl font-bold mb-3 mt-10">Contact Details</h1>
        <p className="mb-3">
          Enter Your Details To Send You Confirmation And Updates About Your
          Booking
        </p>
        <div className="flex gap-5 mb-5">
          <div className=" w-1/2">
            <p className="opacity-60 font-semibold">First Name</p>
            <input
              type="text"
              className="border w-full border-black/20 h-10 rounded-[4px]"
            />
          </div>
          <div className=" w-1/2">
            <p className="opacity-60 font-semibold">Last Name</p>
            <input
              type="text"
              className="border w-full border-black/20 h-10 rounded-[4px]"
            />
          </div>
        </div>
        <div className=" mb-5 ">
          <p className="opacity-60 font-semibold">Email</p>
          <input
            type="text"
            className="border w-full border-black/20 h-10 rounded-[4px]"
          />
        </div>
        <p className="opacity-60 font-semibold">Phone Number</p>
        <InputPhoneCountryCode css={"w-[49%]"} text={true} />
        <div className="mt-5 flex gap-2 mb-12">
          <input type="checkbox" className="opacity-60" />
          <p>I accept terms and conditions</p>
        </div>
        <div className="mb-12">
          <p className="opacity-60 font-semibold">Promo Code</p>
          <hr className="opacity-20" />
          <p className="text-[#f1582b] font-semibold">Enter Promo Code</p>
        </div>
        <div className="bg-[#F1582B] px-6 py-2 mt-20 w-[22.3%] mx-auto rounded-full text-white border border-[#f1582b] hover:border-[#f1582b] hover:text-[#f1582b] hover:bg-white ">
          <h1 className="text-center">BOOK NOW</h1>
        </div>
      </div>
      {/* Total Price and Booking with confidence Section */}
      <div className="flex flex-col gap-10 w-2/7 relative">
        {/* Total Price section*/}
        <div className="p-8 border rounded-2xl border-black/20">
          <p className="font-bold">
            Relax and Snorkel on Koh Racha Yai and on Banana Beach Koh Hey
            Island
          </p>
          <hr className="opacity-20 my-3" />
          <div>
            <div className="flex justify-between text-sm mt-2 opacity-60">
              <p>Date</p>
              <p>Thursday, March 20, 2025</p>
            </div>
            <div className="flex justify-between text-sm mt-2 opacity-60">
              <p>Time</p>
              <p>10:00 AM</p>
            </div>
            <div className="flex justify-between text-sm mt-2 opacity-60">
              <p>Travel</p>
              <p>2 Adults</p>
            </div>
          </div>
          <hr className="opacity-20 my-3" />
          <div className="flex gap-2 mb-7">
            <img src={i1} className="w-8 h-8 mt-1" alt="" />
            <p className="text-sm">
              Free cancellation before 10:00 AM on March 19 (tour local time). 
            </p>
          </div>
          <div className="w-full h-15 rounded-b-2xl top-72 left-0 bg-[#E8DBDB] font-bold  absolute">
            <div className="  flex justify-between px-10 mt-5">
              <p>Total</p>
              <p>$140.6</p>
            </div>
          </div>
        </div>
        {/* Booking with confidence Section */}
        <div className="p-8 border rounded-2xl border-black/20">
          <h1 className="font-bold mb-3">Booking With Confidence</h1>
          <div className="flex gap-2 mb-3">
            <img src={i2} className="w-8 h-8" alt="" />
            <div>
              <p className="font-semibold mb-2 mt-[2px]">
                Bring copies of your passport
              </p>
              <p className="text-sm">
                Having Passport is a good practice. Some tourist places might
                ask you for passport
              </p>
            </div>
          </div>
          <div className="flex gap-2 mb-3">
            <img src={i3} className="w-8 h-8" alt="" />
            <div>
              <p className="font-semibold mb-2 mt-[2px]">
                Bring copies of your passport
              </p>
              <p className="text-sm">
                Having Passport is a good practice. Some tourist places might
                ask you for passport
              </p>
            </div>
          </div>
          <div className="flex gap-2 mb-3">
            <img src={i4} className="w-8 h-8" alt="" />
            <div>
              <p className="font-semibold mb-2 mt-[2px]">
                Bring copies of your passport
              </p>
              <p className="text-sm">
                Having Passport is a good practice. Some tourist places might
                ask you for passport
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
