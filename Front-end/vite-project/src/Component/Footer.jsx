import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-700 fixed bottom-0">
      <div className="">
  
        <p className="flex mx-auto justify-center items-center text-white ">
          &copy; {new Date().getFullYear()} Your E-commerce Project. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
