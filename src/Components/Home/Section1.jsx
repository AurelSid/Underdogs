import Neon from "../../assets/neon.png";

import loyal from "../../assets/loyalty.png";
import skills from "../../assets/games.png";
import activity from "../../assets/activity.png";

function Section1() {
  return (
    <>
      <div className="   w-full h-full justify-center  items-center flex">
        <div className=" w-full  justify-center items-center z-10">
          <div className="w-full h-full flex  bg-neutral-800">
            <div className="m-auto text-center w-1/2 py-16">
              <h1 className=" text-3xl font-bold text-white">
                WE CHANGE STREAMING BY CHANGIN THE GAME
              </h1>
              <p className="text-white mt-4 text-xl semi-bold">
                At UNDERDOGS , we strive to revolutionise gaming streaming and
                e-sport by using blockchain power and decentralized solutions.
              </p>
            </div>
          </div>
          <div className="md:flex p-20 h-full m-auto justify-center items-center">
            <div className="w-3/12">
              <img src={Neon} alt="" />
            </div>
            <div className="w-3/6 mx-7 text-center">
              <h1 className=" text-4xl font-bold text-white">
                AN EQUAL REWARDING EXPERIECE FOR ALL
              </h1>
              <p className="text-white mt-2 text-2xl semi-bold">
                Our main goal is to provide a rewarding platform for all users
                and removing the one way experience of our centralized
                predecessors
              </p>
              <div className="flex justify-center items-center text-white mt-16">
                <div>
                  <img
                    src={loyal}
                    alt=""
                    className="w-2/6 justify-center items-center m-auto "
                  />
                  <h1 className=" font-semibold text-xl">Loyalty Rewarded</h1>
                  <p className="mt-4">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                </div>
                <div className="h-40 w-1 mx-2 bg-white"></div>

                <div>
                  <img
                    src={activity}
                    alt=""
                    className="w-2/6 justify-center items-center m-auto "
                  />
                  <h1 className=" font-semibold text-xl">Activity Rewarded</h1>
                  <p className="mt-4">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                </div>
                <div className="h-40 w-1 mx-2 bg-white"></div>
                <div>
                  <img
                    src={skills}
                    alt=""
                    className="w-2/6 justify-center items-center m-auto "
                  />
                  <h1 className=" font-semibold text-xl">Skills Rewarded</h1>
                  <p className="mt-4">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
