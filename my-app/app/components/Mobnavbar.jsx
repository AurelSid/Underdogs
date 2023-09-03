"use client";
import React from "react";
import { motion } from "framer-motion";
import NavContext from "../context/navcontext";
import { useContext } from "react";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
const mobnavbar = () => {
  const links = [
    { label: "Home", url: "/home" },
    { label: "About us", url: "/about_us" },
    { label: "Contact", url: "/contact" },
    { label: "Our projects", url: "/projects" },
  ];
  const { activePage, setActivePage } = useContext(NavContext);
  const [mobileNavActive, setMobileNavActive] = useState(true);

  console.log(activePage);

  return (
    <motion.div className="">
      <button className=" fixed top-3 left-3  z-10  ">
        {mobileNavActive ? (
          <BiMenu
            className="w-8 h-8 text-gray-500 "
            onClick={() => setMobileNavActive(!mobileNavActive)}
          />
        ) : (
          <GrClose
            className="w-6 h-6 z-10 fixed"
            onClick={() => setMobileNavActive(!mobileNavActive)}
          />
        )}
      </button>
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Initial state of the component
        animate={{ opacity: 1, y: 0 }} // Animation state of the component
        transition={{ duration: 0.5 }} // Transition duration for the animation
        className={`fixed inset-0 flex justify-center items-center lg:hidden bg-zinc-700 z-0 ${
          mobileNavActive ? "hidden" : ""
        }`}
      >
        <div
          className={`flex h-screen  gap-10 justify-center items-center w-screen ${
            mobileNavActive ? "hidden" : ""
          }`}
        >
          {" "}
          <div className="grid grid-rows-3 gap-5=4 text-white">
            <div className="px-5 text-xl  justify-center items-center m-auto text-center">
              {" "}
              <h1>FalconView</h1>
            </div>
            <div className="grid grid-col-1 justify-center items-center m-auto text-center ">
              {links.map((link, index) => (
                <Link key={index} href={link.url}>
                  <button
                    onClick={() => (
                      setActivePage(index), setMobileNavActive(!mobileNavActive)
                    )}
                  >
                    {link.label}
                  </button>
                </Link>
              ))}
            </div>
            <div className=" justify-center items-center flex w-full text-right px-10">
              <div className=" flex  gap-4 my-auto justify-center">
                <BsTwitter />
                <BsInstagram />
                <AiFillMail />
                <BsLinkedin />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default mobnavbar;
