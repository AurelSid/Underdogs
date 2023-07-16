import React from "react";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";

function sideNav({ sideNavActive, setSideNavActive }) {
  return (
    <>
      <motion.div
        className="  w-full h-full justify-center  flex bg-zinc-800 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className=" h-full w-full ">
          <div className="bg-amber-400 p-3 flex justify-between">
            <h1 className="invert">User Console</h1>
            <button
              className=" invert bg-amber "
              onClick={() => setSideNavActive(false)}
            >
              <GrClose />
            </button>
          </div>
          <li className="list-none text-left w-full">
            <div className="text-white w-full p-3 hover:bg-zinc-600 cursor-pointer  ">
              <h1>Quests</h1>
            </div>
            <div className="h-[1px]  bg-slate-700 "></div>
            <div className="text-white w-full p-3  hover:bg-zinc-600 cursor-pointer   ">
              <h1>Community</h1>
            </div>
            <div className="h-[1px]  bg-slate-700 "></div>
            <div className="text-white w-full p-3  hover:bg-zinc-600 cursor-pointer   ">
              <h1>Tournaments</h1>
            </div>
            <div className="h-[1px]  bg-slate-700 "></div>
            <div className="text-white w-full p-3  hover:bg-zinc-600 cursor-pointer   ">
              <h1>Stream Manager</h1>
            </div>
            <div className="h-[1px]  bg-slate-700 "></div>
            <div className="text-white w-full p-3  hover:bg-zinc-600 cursor-pointer   ">
              <h1>Staking</h1>
            </div>
            <div className="h-[1px]  bg-slate-700 "></div>
            <div className="text-white w-full p-3  hover:bg-zinc-600 cursor-pointer   ">
              <h1>Analitics</h1>
            </div>
            <div className="h-[1px]  bg-slate-700 "></div>
            <div className="text-white w-full p-3  hover:bg-zinc-600 cursor-pointer   ">
              <h1>Trophies</h1>
            </div>
            <div className="h-[1px]  bg-slate-700 "></div>
            <div className="text-white w-full p-3  hover:bg-zinc-600 cursor-pointer   ">
              <h1>Sponsors</h1>
            </div>
          </li>
        </div>
      </motion.div>
    </>
  );
}

export default sideNav;
