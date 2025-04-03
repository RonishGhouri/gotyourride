import React from "react";
import GoBackButton from "../components/GoBackButton";

const PaymentPage = () => {
  return (
    <div className="mt-36">
      <GoBackButton />
      {/* Contact and Payment detail buttons*/}
      <div className="flex gap-5  -mt-[14px] bg-amber-500 w-[22.15%] mx-auto">
        <div className="flex gap-2 bg-amber-400 mx-auto group">
          <div className="bg-[#D4C9C9] w-8 h-8 text-center  group-hover:bg-black">
            <p className=" text-[#948888] mt-1 group-hover:text-white ">1</p>
          </div>
          <h1 className="text-center mt-1">Contact Details</h1>
        </div>
        <div className="flex gap-2 bg-amber-400 mx-auto ">
          <div className="group w-8 h-8 -mt-1">
            <div className="bg-[#D4C9C9] w-8 h-8 text-center  group-hover:bg-black">
              <p className=" text-[#948888] mt-1 group-hover:text-white ">2</p>
            </div>
          </div>
          <h1 className="text-center mt-1">Payment Details</h1>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
