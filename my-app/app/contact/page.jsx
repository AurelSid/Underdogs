import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const page = () => {
  const projects = [
    { label: "Home", url: "/home" },
    { label: "About us", url: "/about_us" },
    { label: "Contact", url: "/contact" },
    { label: "Portfolio", url: "/portfolio" },
  ];
  return (
    <div>
      <div>
        <div className=" lg:h-screen h-full flex  bg-[#d4d4d4] ">
          <div className="grid grid-cols-2  m-auto px-40">
            <div className="w-full h-full flex justify-center items-center ">
              <div>
                <h1 className="text-xl">Let us know what' s on your mind!</h1>
                <div className=" grid gird-row-4 gap-6 justify-start pt-10">
                  <BsTwitter className="w-7 h-7" />
                  <BsInstagram className="w-7 h-7" />
                  <AiFillMail className="w-7 h-7" />
                  <BsLinkedin className="w-7 h-7" s />
                </div>
              </div>
            </div>
            <div className=" h-full flex justify-center items-center text-2xl m-auto w-8/12">
              <img src="dd.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
