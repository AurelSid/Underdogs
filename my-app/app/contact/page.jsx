"use client";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

import { motion } from "framer-motion";

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
        <div className=" h-screen  flex  bg-[#d4d4d4] ">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="md:grid grid-cols-2  m-auto md:px-40 px-10"
          >
            <div className=" h-full flex justify-center items-center text-2xl m-auto md:w-8/12 w-5/12">
              <img src="dd.png" alt="" />
            </div>
            <div className="w-full h-full flex justify-center items-center ">
              <div>
                <h1 className="text-xl text-center md:text-left">
                  Let us know what' s on your mind!
                </h1>
                <div className=" grid gird-row-4 gap-6 md:justify-start pt-10 m-auto justify-center">
                  <BsInstagram className="w-7 h-7" />
                  <div className="flex">
                    <AiFillMail className="w-7 h-7" />
                    <h1 className="mx-4">
                      aurelsid021@gmail.com / salomemichael@hotmail.fr
                    </h1>
                  </div>
                  <div className="flex">
                    <BsLinkedin className="w-7 h-7" />
                    <h1 className="mx-4">Michael Salomé / Aurélio Sidéris </h1>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;
