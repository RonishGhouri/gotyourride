import React from "react";
import GoBackButton from "../components/GoBackButton";
import ContactDetail from "../components/ContactDetail";
import PaymentDetail from "../components/PaymentDetail";

const PaymentPage = () => {
  return (
    <div className="mt-36">
      <GoBackButton />
      {/* Contact and Payment detail buttons*/}
      <div className="flex gap-5  -mt-[20px]  w-[23%] mx-auto mb-20">
        <div className="flex gap-2  mx-auto cursor-pointer ">
          <div className="bg-[#D4C9C9] w-8 h-8 text-center rounded-full  ">
            <p className=" text-[#948888] mt-1  ">1</p>
          </div>
          <h1 className="text-center mt-1">Contact Details</h1>
        </div>
        <div className="flex gap-2  mx-auto cursor-pointer">
          <div className="bg-[#D4C9C9] w-8 h-8 text-center rounded-full ">
            <p className=" text-[#948888] mt-1 ">2</p>
          </div>
          <h1 className="text-center mt-1">Payment Details</h1>
        </div>
      </div>
      {/* Calling contact component */}
      <ContactDetail />
      {/* Calling payment component */}
      <PaymentDetail />
    </div>
  );
};

export default PaymentPage;
