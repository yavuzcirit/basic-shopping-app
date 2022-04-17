import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="bg-white h-[75px] w-[80%] mx-auto flex justify-between content-center rounded-xl mt-[25px] drop-shadow-lg">
    <p className="ml-[20px] my-[auto] leading-[18px] italic font-bold text-[25px]"> <Link to="/"> Upayment Store </Link></p>
      <p className="mr-[20px] my-[auto] leading-[18px]  italic font-bold text-[25px]">Register</p>
    </div>);
};

export default Topbar;
