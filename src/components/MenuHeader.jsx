import React from "react";

import { Badge } from "antd";
import { NavLink } from "react-router-dom";
const MenuHeader = ({ icon, title, count, path }) => {
  console.log("count ", count);
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };
  return (
    <li className="btn-hover gap-2 flex text-light text-[16px] font-light leading-[23px] w-[160px] items-center">
      {count ? (
        <Badge count={count} color="#EA6C00">
          <img className="w-[32px] h-[32px] ml-[8px]" src={icon} alt="logo" />
        </Badge>
      ) : (
        <img className="w-[32px] h-[32px] ml-[8px]" src={icon} alt="logo" />
      )}

      <NavLink
        to={path}
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? " #FF963C" : "#FFFFFF",
          };
        }}
        className="mr-[16px] btn-hover"
        smooth
        spy
      >
        {title}
      </NavLink>
    </li>
  );
};

export default MenuHeader;
