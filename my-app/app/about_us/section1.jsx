import React from "react";

const section1 = () => {
  return (
    <div>
      <div>
        <div>
          <div className=" lg:h-screen h-full flex bg-[#d4d4d4]">
            <div className="w-full h-full justify-center items-center mt-20 lg:mt-0 md:mx-40  lg:grid grid-cols-2 ">
              <img
                src="robotside.png"
                className="md:w-3/4 w-2/4 m-auto"
                alt=""
              />
              <div className=" justify-start items-start p-10 md:p-0 text-center  lg:text-left">
                <h1 className="text-2xl font-semibold mb-4 ">A Two man Army</h1>
                <h1 className="md:text-lg text-sm   ">
                  A company made up of two people working tightly together can
                  be described as a "Two men army". In such a setup, the two
                  individuals collaborate closely, leveraging their unique
                  skills and expertise to achieve their goals. This close-knit
                  partnership allows for efficient decision-making, effective
                  communication, and a strong sense of unity. With their
                  combined efforts, a two-person company can be agile,
                  adaptable, and highly productive.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section1;
