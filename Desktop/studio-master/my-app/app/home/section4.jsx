import React from "react";

const section4 = () => {
  return (
    <div className="h-screen flex px-10  w-full bg-gradient-to-t from-black to-zinc-800 justify-center items-center ">
      <div className="items-center ">
        <div className="w-full justify-center items-center text-center text-white mb-10">
          <h1 className="md:text-5xl text-2xl font-semibold">
            Your style , your business
          </h1>
          <h1 className="mt-5 md:text-xl">
            We are ready to answer your needs whatever your field of business,
            keep innovating and let uss take care of the rest
          </h1>
        </div>
        <div className="md:grid grid-cols-4 gap-5 m-auto hidden   ">
          <div className=" m-4">
            <img src="gaming.png" alt="" />
            <div className="absolute text-white  mt-2 ml-1 text-center ">
              Gaming &gt;{" "}
            </div>
          </div>
          <div className=" m-4">
            <img src="chaise.png" alt="" />
            <div className="absolute text-white mt-2 ml-1 ">
              Interior Deisgn &gt;
            </div>
          </div>
          <div className=" m-4">
            <img src="sculpt.jpg" alt="" />
            <div className="absolute text-white mt-2 ml-1 ">Sculpts &gt;</div>
          </div>
          <div className=" m-4">
            <img src="clavier2.jpg" alt="" />
            <div className="absolute text-white mt-2 ml-1 ">
              Industrial Deisgn &gt;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section4;
