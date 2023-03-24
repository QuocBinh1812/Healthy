import React from "react";
import { Link } from "react-scroll";
import { Badge } from "antd";

const MenuHeader = ({ icon, title, count }) => {
  console.log("count ", count);
  return (
    <li className="btn-hover gap-2 flex text-light text-[16px] font-light leading-[23px] w-[160px] items-center">
      {count ? (
        <Badge count={count} color="#EA6C00">
          <img className="w-[32px] h-[32px] ml-[8px]" src={icon} alt="logo" />
        </Badge>
      ) : (
        <img className="w-[32px] h-[32px] ml-[8px]" src={icon} alt="logo" />
      )}

      <Link to="Home" activeClass="" className="mr-[16px]" smooth spy>
        {title}
      </Link>
    </li>
  );
};

export default MenuHeader;
