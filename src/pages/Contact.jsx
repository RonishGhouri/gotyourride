import React from "react";
import GoBackButtonWhite from "../components/GoBackButtonWhite";
import i1 from "../assets/contact-1.png";

const Contact = () => {
  return (
    <>
      <div className="mt-30 relative">
        <img src={i1} className="" alt="" />
        <GoBackButtonWhite className="absolute" />
      </div>
      <div></div>
    </>
  );
};

export default Contact;
