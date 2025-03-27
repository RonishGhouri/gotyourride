import React from "react";
import Star from "./Star";

const ProgressBar = () => {
  return (
    <div className="w-4/5 mx-auto ">
      <h1 className="font-bold text-2xl mb-5">Customer Reviews</h1>

      <div className="flex w-full justify-between mx-auto">
        <div className="flex flex-col items-center justify-center  w-2/12">
          <h1 className="font-extrabold text-2xl">4.3</h1>
          <Star />
          <p className="text-sm opacity-64">35K Rating</p>
        </div>
        <div className="w-px h-40 bg-gray-300 mx-4"></div>
        <div className="w-full ">
          <div className="flex gap-3">
            <div className="w-230 bg-gray-300 rounded-lg h-4 mb-5">
              <div className="bg-[#f1582b] h-full rounded-lg w-4/5"></div>
            </div>
            <p className="-mt-1 ">
              <span className="font-bold mr-3">5.0</span>{" "}
              <span className="text-[12px]">14K Reviews</span>
            </p>
          </div>
          <div className="flex gap-3">
            <div className="w-230 bg-gray-300 rounded-lg h-4 mb-5">
              <div className="bg-[#f1582b] h-full rounded-lg w-3/5"></div>
            </div>
            <p className="-mt-1 ">
              <span className="font-bold mr-3">4.0</span>{" "}
              <span className="text-[12px]">10K Reviews</span>
            </p>
          </div>
          <div className="flex gap-3">
            <div className="w-230 bg-gray-300 rounded-lg h-4 mb-5">
              <div className="bg-[#f1582b] h-full rounded-lg w-2/5"></div>
            </div>
            <p className="-mt-1 ">
              <span className="font-bold mr-3">3.0</span>{" "}
              <span className="text-[12px] ml-1">7K Reviews</span>
            </p>
          </div>
          <div className="flex gap-3">
            <div className="w-230 bg-gray-300 rounded-lg h-4 mb-5">
              <div className="bg-[#f1582b] h-full rounded-lg w-3/5"></div>
            </div>
            <p className="-mt-1 ">
              <span className="font-bold mr-3">2.0</span>{" "}
              <span className="text-[12px] ml-1">3K Reviews</span>
            </p>
          </div>
          <div className="flex gap-3">
            <div className="w-230 bg-gray-300 rounded-lg h-4 mb-5">
              <div className="bg-[#f1582b] h-full rounded-lg w-1/5"></div>
            </div>
            <p className="-mt-1 ">
              <span className="font-bold mr-3">1.0</span>{" "}
              <span className="text-[12px] ml-2">1K Reviews</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
