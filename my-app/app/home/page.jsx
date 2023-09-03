"use client";
import React from "react";
import { useRef } from "react";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
const page = () => {
  const section2Ref = useRef(null);
  return (
    <div>
      <div className=" h-full md:h-screen  flex bg-[#d4d4d4]">
        <div className="w-full h-full justify-center items-center mt-20 lg:mt-0 md:px-40  lg:flex">
          <motion.div
            initial={{ opacity: 0, x: -20 }} // Initial state of the component
            animate={{ opacity: 1, x: 0 }} // Animation state of the component
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center  h-full w-full"
          >
            <div className=" justify-center items-center">
              <h1 className="lg:text-8xl text-4xl font-bold  w-full   justify-center items-center m-auto text-center lg:text-left">
                We give life <br /> to your vision
              </h1>
              <h1 className=" mt-8 md:text-lg text-sm text-center lg:text-left mx-5 md:mx-0 mb-5">
                We create high quality 3D visuals for people hwo don't settle
                for less
              </h1>
            </div>
          </motion.div>
          <motion.div
            className=" m-auto w-full flex "
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {" "}
            <img src="car.png" alt="" className="m-auto " />
          </motion.div>
        </div>
      </div>
      <Section2 section2Ref={section2Ref} />
      <Section3 section2Ref={section2Ref} />
      <Section4 />
    </div>
  );
};

export default page;
