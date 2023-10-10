"use client";

import React from "react";

import { BsCodeSlash } from "react-icons/bs";
import { GiIceCube } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { delay, motion } from "framer-motion";

const section1 = () => {
  return (
    <div>
      <div>
        <div>
          <div className=" lg:h-screen h-full flex bg-[#d4d4d4]">
            <div className=" m-auto  h-full  absolute  z-0 opacity-40 ">
              {" "}
              <img
                src="gal.png"
                alt=""
                className="md:h-screen md:w-screen hidden lg:block"
              />
            </div>
            <div className="w-full h-full justify-center items-center my-20 lg:mt-0 md:mx-10 lg:mx-20 flex  lg:z-20">
              <motion.div
                className="m-auto justify-center items-center md:bg-white shadow-xl md:p-20  md:bg-opacity-20 rounded-2xl "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="m-auto justify-center items-center">
                  <h1 className="text-center md:py-20 py-10 px-12 md:text-2xl ">
                    At FaclonView, we create 3D but not only! We are the hwole
                    packge!
                  </h1>
                  <div className=" grid lg:grid-cols-3 lg:gap-0 gap-6">
                    <motion.div
                      className="mx-5  bg-white  bg-opacity-80 rounded-xl px-8 py-2 shadow-lg shadow-gray-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.3 }}
                    >
                      <div className=" m-auto justify-center py-5">
                        <div className="md:block flex justify-center items-center md:mb-5 mb-5">
                          <BsCodeSlash className="md:h-20 md:w-20 h-7 w-7 justify-center flex m-auto" />
                          <h1 className=" text-center justify-center items-center  font-semibold   m-auto  ">
                            Web developpment
                          </h1>
                        </div>
                        <h1 className="text-center text-sm md:text-md">
                          With experience in web development , our team can also
                          provide a beautiful window to your company anf
                          showcase your work in the best light
                        </h1>
                      </div>
                    </motion.div>
                    <motion.div
                      className="mx-5  bg-white  bg-opacity-80 rounded-xl px-8 py-2 shadow-lg shadow-gray-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      <div className=" m-auto justify-center py-5">
                        <div className="md:block flex justify-center items-center md:mb-5 mb-5">
                          <GiIceCube className="md:h-20 md:w-20 h-7 w-7 justify-center flex m-auto" />
                          <h1 className=" text-center justify-center items-center  font-semibold   m-auto  ">
                            3D production
                          </h1>
                        </div>
                        <h1 className="text-center text-sm md:text-md">
                          Of , course , we specialise in 3D renders and setup
                          high quality scenes for every project we work on. We
                          specialise in architecture , product design , and
                          marketing visuals.
                        </h1>
                      </div>
                    </motion.div>
                    <motion.div
                      className="mx-5  bg-white  bg-opacity-80 rounded-xl px-8 py-2 shadow-lg shadow-gray-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    >
                      <div className=" m-auto justify-center py-5">
                        <div className="md:block flex justify-center items-center md:mb-5 mb-5">
                          < MdOutlineDesignServices className="md:h-20 md:w-20 h-7 w-7 justify-center flex m-auto" />
                          <h1 className=" text-center justify-center items-center  font-semibold   m-auto  ">
                            Graphic design
                          </h1>
                        </div>
                        <h1 className="text-center text-sm md:text-md">
                          With a strong past experience in graphic design , we
                          provide Graphic design service to our clients. When
                          creating beautiful assets like 3D and Websites , it
                          would be a shame not to brign them to the eyes of the
                          public in the best light possible.
                        </h1>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section1;
