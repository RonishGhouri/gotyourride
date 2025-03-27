import React from "react";
import { NavLink } from "react-router-dom";
import f from "../assets/facebook.png";
import w from "../assets/whatsapp.png";
import i from "../assets/instagram.png";
import y from "../assets/youtube.png";

const SocialIcons = () => {
  return (
    <div className="flex gap-1">
      <NavLink>
        <img src={f} />
      </NavLink>
      <NavLink>
        <img src={w} />
      </NavLink>
      <NavLink>
        <img src={i} />
      </NavLink>
      <NavLink>
        <img src={y} />
      </NavLink>
    </div>
  );
};

export default SocialIcons;
