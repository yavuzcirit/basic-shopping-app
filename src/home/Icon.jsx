import React from "react";
import icon from "../assets/icon.svg";
import { Link } from "react-router-dom";

const Icon = () => {
  return (
    <div className="fixed bottom-8 right-8 cursor-pointer " title="Click To Add New Item">
      <Link to="/create-product">
        {" "}
        <img className="w-[100px] h-[100px]" src={icon} alt="plus" />
      </Link>
    </div>
  );
};

export default Icon;
