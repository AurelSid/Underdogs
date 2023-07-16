import { FaUser } from "react-icons/fa";
import emblem from "../../assets/emblem.png";
import React, { useState } from "react";

function profile() {
  return (
    <>
      <div className="  w-full h-full items-center justify-center  bg-zinc-900  ">
        <div className="justify-center items-center bg-zinc-800  ">
          <div className="flex w-full h-full   p-3 ">
            <button className="bg-amber-400 h-12 w-12 justify-center items-center flex rounded-full p-3 ">
              <FaUser className="invert h-10 w-10 " />
            </button>
            <p className="text-white ml-1 text-xl  m-auto">ROKO/WildDogs</p>
          </div>
        </div>
        <div className="rounded-sm m-5 jusify-center items-center  ">
          <div className="flex justify-center items-center">
            <img src={emblem} alt="" className="h-14 w-14   " />
            <div className="">
              <h1>Silver Underdog</h1>
            </div>
          </div>
        </div>
        <div className="bg-zinc-600 h-[1px]"></div>
        <div className="p-5 font-semibold text-xl">
          <h1>12k Followers</h1>
        </div>
        <div className="bg-zinc-600 h-[1px]"></div>
        <div className="p-5 font-semibold text-xl">
          <h1>5k Subscribers</h1>
        </div>
        <div className="bg-zinc-600 h-[1px]"></div>
        <div className="p-5 font-semibold text-xl">
          <h1>112k Guild points</h1>
        </div>
        <div className="bg-zinc-600 h-[1px]"></div>
        <div className="font-semibold text-xl flex justify-center p-5">
          <div className="h-60 w-60   bg-slate-300 rounded-lg"></div>
        </div>
        <div className="font-semibold text-xl flex justify-center p-5">
          <div className="h-20 w-full bg-zinc-700 rounded-lg"></div>
        </div>
      </div>
    </>
  );
}

export default profile;
