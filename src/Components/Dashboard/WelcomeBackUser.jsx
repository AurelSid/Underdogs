import { GrNext } from "react-icons/gr";

function welcomeBackUser() {
  return (
    <>
      <div className="  w-full  justify-center bg-stone-70  ">
        <div className=" bg-zinc-850 h-full  items-center justify-center w-full    px-20 py-10">
          <div className="w-full h-full justify-center items-center  ">
            <h1 className="text-3xl text-white font-bold justify-center m-auto">
              Welcome Back #User
            </h1>
            <div>
              <div className="text-white">
                <p>
                  Long time no see! Here is the recap of your recent activities!
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-300 w-full mt-5 h-[1px]"></div>
          <div className="grid grid-flow-col flex-col gap-8 ">
            <div className="shadow-2xl shadow-black justify-between col-span-4  flex bg-zinc-800 p-5 rounded-xl  mt-10  border-4 border-amber-400 border-solid">
              <div className="text-white p-5">
                <h1 className="text-white font-bold ">Active Time</h1>
                <p className="text-2xl font-bold">12h5min</p>
              </div>
              <div className="invert flex justify-center items-center ">
                <GrNext className="w-8 h-8 cursor-pointer" />
              </div>
            </div>
            <div className="shadow-2xl shadow-black col-span-1  bg-zinc-800  p-5 rounded-xl mt-10  border-4 border-amber-400 border-solid">
              <div className="text-white p-5">
                <h1 className="text-white font-bold ">Quests Completed</h1>
                <p className="text-2xl font-bold">15</p>
              </div>
            </div>
            <div className="shadow-2xl shadow-black col-span-1  bg-zinc-800  p-5 rounded-xl mt-10  border-4 border-amber-400 border-solid">
              <div className="text-white p-5">
                <h1 className="text-white font-bold ">
                  Competitions Completed
                </h1>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default welcomeBackUser;
