import WelcomeBackUser from "../Dashboard/WelcomeBackUser";
import Profile from "../Dashboard/Profile";
import Recommended from "../Dashboard/Recommended";
import SideNav from ".././SideNav";
import ClosedSideNav from "../Dashboard/ClosedSideNav";
import { useState } from "react";
import { motion } from "framer-motion";

function userDashboard() {
  const [sideNavActive, setSideNavActive] = useState(true);
  console.log(sideNavActive);
  return (
    <>
      <motion.div
        layout
        className="bg-gradient-to-t from-zinc-900 to-slate-300  w-full h-screen justify-center  grid grid-cols-12"
      >
        {sideNavActive ? (
          <motion.div
            className="col-span-2 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={500}
          >
            <SideNav
              sideNavActive={sideNavActive}
              setSideNavActive={setSideNavActive}
            />
          </motion.div>
        ) : (
          <motion.div
            className="h-full w-10 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={500}
          >
            <ClosedSideNav
              sideNavActive={sideNavActive}
              setSideNavActive={setSideNavActive}
            />
          </motion.div>
        )}

        <motion.div
          className=" h-full w-full col-span-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <div className="h-1/2">
            <WelcomeBackUser />
          </div>
          <div className="h-1/2">
            <WelcomeBackUser />
          </div>
        </motion.div>
        {sideNavActive ? (
          <motion.div
            className="h-full col-span-2 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <Profile />
          </motion.div>
        ) : (
          <div className="h-full col-span-3">
            <Profile />
          </div>
        )}
      </motion.div>
    </>
  );
}

export default userDashboard;
