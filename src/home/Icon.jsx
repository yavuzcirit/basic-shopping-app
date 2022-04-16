import React from "react";
import icon from '../assets/icon.svg'

const Icon = () => {
  return (
    <div className="fixed bottom-2 right-5 cursor-pointer" >
      <img className="w-[100px] h-[100px]" src={icon} alt="plus" />
    </div>
 
        );
};

export default Icon;
