import React, { useState } from "react";
import { InputPhoneCountryCode } from "./InputPhoneCountryCode";
import AddRating from "../components/AddRating";

const Feedback = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div className="w-4/5 mx-auto">
      {/* Button */}
      <div
        onClick={handleShow}
        className={`bg-[#F1582B] w-2/12 px-6 py-2 rounded-full text-white mx-auto mb-5 ${
          show ? "hidden" : "block"
        } `}
      >
        <h1 className="text-center ">Give Feedback</h1>
      </div>

      {show && (
        <div>
          <h1 className="w-2/12 mx-auto text-center mb-5 font-semibold">
            Give Us Feedback
          </h1>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <div className="w-1/2">
                <p>First Name</p>
                <input
                  type="text"
                  className="border border-black/20 rounded-sm w-155 h-10 "
                />
              </div>
              <div className="w-1/2">
                <p>Last Name</p>
                <input
                  type="text"
                  className="border border-black/20 rounded-sm w-155 h-10"
                />
              </div>
            </div>
            <div className="w-full">
              <p>Email</p>
              <input
                type="email"
                className="border border-black/20 rounded-sm w-[1254px] h-10 "
              />
            </div>

            <InputPhoneCountryCode />
            <div>
              <p>Message</p>
              <textarea
                placeholder="Type your message here..."
                className="w-[1254px] p-3 border border-black/20 h-30 rounded-sm focus:ring-blue-500 placeholder:text-gray-400 resize-none"
              />
            </div>
            <AddRating />
            <div
              onClick={handleShow}
              className="bg-[#F1582B] w-2/12 px-6 py-2 rounded-full text-white mx-auto mb5 mt-5 "
            >
              <h1 className="text-center ">Submit</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
