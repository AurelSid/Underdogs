import leaderboard from "../../assets/board.png";

import loyal from "../../assets/loyalty.png";
import skills from "../../assets/games.png";
import activity from "../../assets/activity.png";

function Section2() {
  return (
    <>
      <div className="   w-full h-screen justify-center  items-center flex">
        <div className=" w-full  justify-center items-center z-10">
          <div className="w-full h-full flex  bg-neutral-800"></div>
          <div className="flex p-20 h-full m-auto justify-center items-center">
            <div className="w-3/6 mx-7 text-center">
              <h1 className=" text-4xl font-bold text-white">
                BUILD YOUR GUILD AND CONQUER
              </h1>
              <p className="text-white mt-2 text-2xl semi-bold">
                Form a guild with your community and form a team from your loyal
                followers and climb to the top together!
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
            <div className="w-2/6 ">
              <img src={leaderboard} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
