import { GrNext } from "react-icons/gr";

function recommended() {
  return (
    <>
      <div className="  w-full h-full justify-center  bg-neutral-800  ">
        <div className="  h-full items-center justify-center w-full    px-20 py-10">
          <div className="w-full h-full justify-center items-center  ">
            <div>
              <div className="text-white">
                <p>Recommended for you</p>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col flex-col gap-8 h-full ">
            <div className="shadow-2xl shadow-black justify-between    flex bg-zinc-800 p-5 rounded-xl  mt-10  border-4 border-amber-400 border-solid">
              <div className="text-white p-5">
                <h1 className="text-white font-bold ">Active Time</h1>
                <p className="text-2xl font-bold">12h5min</p>
              </div>
              <div className="invert flex justify-center items-center ">
                <GrNext className="w-8 h-8 cursor-pointer" />
              </div>
            </div>
            <div className="shadow-2xl shadow-black   bg-zinc-800  p-5 rounded-xl mt-10  border-4 border-amber-400 border-solid">
              <div className="text-white p-5">
                <h1 className="text-white font-bold ">Quests Completed</h1>
                <p className="text-2xl font-bold">15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default recommended;
