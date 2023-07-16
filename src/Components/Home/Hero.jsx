import video from "../../assets/video.mp4";
import { motion } from "framer-motion";
function Hero() {
  return (
    <>
      <div className="  w-full h-full justify-center items-center flex">
        <div className="h-screen w-full flex justify-center items-center ">
          <div className="md:flex md:p-20 m-auto justify-center items-center text-center md:text-left z-20">
            <div className="md:w-2/6 mx-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                <h1 className=" md:text-6xl text-5xl font-bold text-white">
                  JOIN THE UNDERDOGS
                </h1>
                <p className="text-white mt-2 text-sm md:text-2xl semi-bold">
                  We want to bring game streaming and e-sport to the blockchain.
                  Stream your gaming , incentivise your community and give back
                  to them by rewarding them for their loyalty.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <button className="bg-white w-28 bg-opacity-20 px-3 py-2 text-white mr-5 mt-5 font-semibold rounded-sm ">
                  Buy UND$
                </button>
                <button className="bg-white w-28 bg-opacity-20 px-3 py-2 text-white mr-5 mt-5 font-semibold rounded-sm ">
                  Connect
                </button>
              </motion.div>
            </div>

            <div className="  md:w-2/6 mx-7 md:mt-0 mt-8 shadow-2xl shadow-black  ">
              <video src={video} autoPlay muted className="p-2 "></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
