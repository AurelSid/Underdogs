import React from "react";
import backgroundImage from "../../public/interieur.png";
import { BsChevronDown } from "react-icons/bs";
import { useRef } from "react";

const section1 = () => {
  const section2Ref = useRef(null);
  return (
    <div className=" lg:h-screen h-full flex bg-[#d4d4d4]">
      <div className="w-full h-full justify-center items-center mt-20 lg:mt-0 md:mx-40  lg:flex">
        <div className="flex justify-center items-center  h-full w-full">
          <div className=" justify-center items-center">
            <h1 className="lg:text-8xl text-4xl font-bold  w-full   justify-center items-center m-auto text-center lg:text-left">
              We give life <br /> to your vision
            </h1>
            <h1 className=" mt-8 md:text-lg text-sm text-center lg:text-left mx-5 md:mx-0 mb-5">
              We create high quality 3D visuals for people hwo don't settle for
              less
            </h1>
          </div>
        </div>
        <div className=" m-auto w-full h-full flex">
          {" "}
          <img src="car.png" alt="" className="m-auto " />
        </div>
      </div>
      <div className="w-full hidden  absolute bottom-10 left-0 right-0 md:flex justify-center items-center">
        <button
          onClick={() =>
            section2Ref.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          <BsChevronDown className="w-20 h-20" />
        </button>
      </div>
    </div>
  );
};

export default section1;
