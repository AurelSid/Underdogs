"use client";
import React from "react";
import NavContext from "../context/navcontext";
import { useContext } from "react";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { label: "Home", url: "/home" },
    { label: "About us", url: "/about_us" },
    { label: "Contact", url: "/contact" },
    { label: "Portfolio", url: "/projects" },
  ];
  const { activePage, setActivePage } = useContext(NavContext);

  console.log(activePage);

  return (
    <div className="absolute top-0 w-full grid grid-cols-3  justify-center item-center my-5  ">
      <div className="px-5 text-xl justify-start items-start">
        {" "}
        <h1>FalconView</h1>
      </div>
      <div className="grid grid-cols-4">
        {links.map((link, index) => (
          <Link href={link.url}>
            <button
              key={index}
              className={`py-1 px-4 w-full m-auto flex justify-center items-center ${
                activePage !== index ? "active" : " bg-gray-400 rounded-lg "
              }`}
              onClick={() => setActivePage(index)}
            >
              {link.label}
            </button>
          </Link>
        ))}
      </div>
      <div className=" justify-end items-end flex w-full text-right px-10">
        <div className=" grid grid-cols-4 gap-4 my-auto justify-end">
          <BsTwitter />
          <BsInstagram />
          <AiFillMail />
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
