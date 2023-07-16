import React from "react";
import { GrPrevious } from "react-icons/gr";
import { BiMenu } from "react-icons/bi";
import { motion } from "framer-motion";

function closedSideNav({ sideNavActive, setSideNavActive }) {
  return (
    <>
      <motion.div
        className="  w-full h-full justify-center  flex bg-zinc-800 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className=" h-full w-full ">
          <div className="bg-amber-400 p-3 flex">
            <button
              className="m-auto invert bg-amber"
              onClick={() => setSideNavActive(true)}
            >
              <BiMenu className="" />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default closedSideNav;
