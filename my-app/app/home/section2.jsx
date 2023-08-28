import React from "react";
import { useRef } from "react";
const section2 = ({ section2Ref }) => {
  return (
    <div className=" lg:h-screen h-full flex bg-cover bg-center">
      <div className=" m-auto  h-full  absolute  z-0 ">
        {" "}
        <img
          src="interieur.png"
          alt=""
          className="md:h-screen md:w-screen hidden md:block"
        />
      </div>
      <div
        id="section2"
        ref={section2Ref}
        className=" w-full h-full justify-center items-center py-20 md:py-none md:mt-20 lg:mt-0 px-10 md:px-0  lg:flex lg:z-20  bg-black md:bg-opacity-0 md:bg-none"
      >
        <div className="flex justify-center items-center  h-full w-full ">
          <div className=" justify-center items-center text-white bg-none md:bg-black md:bg-opacity-70 w-screen md:py-10">
            <h1 className="lg:text-5xl text-xl font-bold  w-full   justify-center items-center m-auto text-center ">
              Visual excellence is a must in a visual driven world
            </h1>
            <h1 className=" mt-8 md:text-lg text-xs  text-center">
              At FalconView , we thrive on challenging ourselves to bring the
              level of production that a fast-paced industry asks for. <br />
              We always make sure to stay up to date with latest tools and
              workflows to guarantee our clients the best delivery.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section2;
